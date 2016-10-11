
void

    function() {

        var depth = 16,
            branchWidth = 12,
            step = 0;
        var newDepthPub, depthPub;
        var canvas = document.getElementById('mycanvas');
        var ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.globalCompositeOperation = 'lighter';

        var drawTree = function(ctx, startX, startY, length, angle, depth, branchWidth) {
            var rand = Math.random,
                newDepth,
                newLength, newAngle, maxBranch = 3,
                endX, endY, maxAngle = 2 * Math.PI / 4,
                subBranches, lenShrink;

            ctx.beginPath();
            ctx.moveTo(startX, startY);
            endX = startX + length * Math.cos(angle);
            endY = startY + length * Math.sin(angle);
            ctx.lineCap = 'round';
            ctx.lineWidth = branchWidth;
            ctx.lineTo(endX, endY);

            if (depth <= 2) {
                ctx.strokeStyle = 'rgb(0,' + (((rand() * 64) + 128) >> 0) + ',0)'
            } else {
                ctx.strokeStyle = 'rgb(' + (((rand() * 64) + 64) >> 0) + ',50, 25)'
            }
            ctx.stroke();

            newDepth = depth - 1;
            if (!newDepth) return;

            subBranches = maxBranch - 1;
            branchWidth *= .7;

            for (var i = 0; i < subBranches; i++) {
                newAngle = angle + rand() * maxAngle - maxAngle * .5;
                newLength = length * (.7 + rand() * .3);
                setTimeout(function() {
                    drawTree(ctx, endX, endY, newLength, newAngle, newDepth, branchWidth)
                    newDepthPub = newDepth;
                    depthPub = depth;
                    step++;
                }, 100)
            }
        };

        var init = function() {
            step = 0;
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            ctx.globalCompositeOperation = 'lighter';
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
            drawTree(ctx, ~~(window.innerWidth / 2), ~~(window.innerHeight / 1.02), 60, -Math.PI / 2, depth, branchWidth)
        };

        var regrow = function() {
            if (step < 65534) return;
            init()
        };

        document.querySelector('body').addEventListener('click', function(e) {
            regrow()
        });

        document.addEventListener('DOMContentLoaded', function() {
            init()
        }, false);

        window.onresize = regrow

    }();