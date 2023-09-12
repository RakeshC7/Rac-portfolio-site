import React, { useState, useEffect, useRef } from 'react';

const AnimatedBg = () => {
    const canvasRef = useRef(null);
    const [canvasWidth, setCanvasWidth] = useState(null);
    const [canvasHeight, setCanvasHeight] = useState(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const heightScale = 0.866;

        const rnd = (min, max) => {
            return Math.floor((Math.random() * (max - min + 1)) + min);
        };

        const render = () => {
            ctx.fillStyle = 'rgb(246,249,252)';
            ctx.fillRect(0, 0, canvasWidth, canvasHeight);
            ctx.lineWidth = 0;

            const hueStart = rnd(0, 0);
            const triSide = 40;
            const halfSide = triSide / 2;
            const rowHeight = Math.floor(triSide * heightScale);
            const columns = Math.ceil(canvasWidth / triSide) + 1;
            const rows = Math.ceil(canvasHeight / rowHeight);

            let col, row, x;
            for (row = 0; row < rows; row++) {
                const hue = hueStart + (row * 3);

                for (col = 0; col < columns; col++) {
                    x = col * triSide; // Declare x as let here

                    const y = row * rowHeight;
                    let clr;

                    if (row % 2 !== 0) {
                        x -= halfSide;
                    }

                    // upward pointing triangle
                    clr = 'hsl(' + hue + ', 0%, ' + rnd(90, 240) + '%)';
                    ctx.fillStyle = clr;
                    ctx.strokeStyle = clr;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + halfSide, y + rowHeight);
                    ctx.lineTo(x - halfSide, y + rowHeight);
                    ctx.closePath();
                    ctx.fill();

                    // downward pointing triangle
                    clr = 'hsl(' + hue + ', 0%, ' + rnd(90, 245) + '%)';
                    ctx.fillStyle = clr;
                    ctx.strokeStyle = clr;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + triSide, y);
                    ctx.lineTo(x + halfSide, y + rowHeight);
                    ctx.closePath();
                    ctx.fill();
                }
            }
        };

        if (typeof window !== 'undefined') {
            setCanvasWidth(window.innerWidth);
            setCanvasHeight(window.innerHeight);
        }

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        render();

        const handleResize = () => {
            setCanvasWidth(window.innerWidth);
            setCanvasHeight(window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [canvasWidth, canvasHeight]);

    return (
        <canvas
            id='animatedBg'
            ref={canvasRef}
        ></canvas>
    );
};

export default AnimatedBg;