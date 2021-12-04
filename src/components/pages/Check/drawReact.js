// Define our labelmap
const labelMap = {
    1:{name:'Mask', color:'red'},
    2:{name:'NoMask', color:'yellow'},
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx)=>{
    for(let i=0; i<=boxes.length; i++){
        if(boxes[i] && classes[i] && scores[i]>threshold){
            // Extract variables
            const [y,x,height,width] = boxes[i]
            const text = classes[i]

            // Set styling
            ctx.strokeStyle = labelMap[text]['color']
            ctx.lineWidth = 10
            ctx.fillStyle = 'white'
            ctx.font = '30px Arial'

            // DRAW!!
            ctx.beginPath()
            ctx.fillText(labelMap[text]['name'] + ' - ' + Math.round(scores[i]*100)/100, x*imgWidth, y*imgHeight-10)
            ctx.rect(x*imgWidth, y*imgHeight, width*imgWidth/2, height*imgHeight/2);
            ctx.stroke()
        }
    }
}

/*
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
*/