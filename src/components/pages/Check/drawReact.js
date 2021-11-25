export const drawRect = (obj, ctx) => {
    // Loop through each prediction
    obj.forEach(prediction => {

        // Extract boxes and classes
        const [x, y, width, height] = prediction["bbox"];
        const text = prediction["class"];
        const score = prediction["score"];

        //Class & Score
        console.log(text + "  " + score.toFixed(4) * 100 + "%");

        // Set styling
        const color = Math.floor(score * 16000000).toString(16);
        ctx.strokeStyle = '#' + color
        ctx.font = '18px Arial';

        // Draw rectangles and text
        ctx.beginPath();
        ctx.fillStyle = '#' + color
        ctx.lineWidth = 1.5;
        ctx.fillText(text, x, y - 10);
        ctx.strokeRect(x, y, width, height);
    });
}