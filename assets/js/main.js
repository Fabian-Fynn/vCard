function grayscale(src){

var graycanvas = document.createElement("canvas");
var ctx = graycanvas.getContext("2d");
var imgObj = new Image();
imgObj.src = 'html.png';
graycanvas.width = imgObj.width;
graycanvas.height = imgObj.height;
console.log(src);
console.log(graycanvas.height);
ctx.drawImage(imgObj, 0, 0);
var canvasPixels = ctx.getImageData(0, 0, 512, 512);

for(var y = 0; y < 512; y++){
for(var x = 0; x < 512; x++){

var i = (y * 4) * canvasPixels.width + x * 4;
var average = (canvasPixels.data[i] + canvasPixels.data[i + 1] + canvasPixels.data[i + 2]) / 3;
canvasPixels.data[i] = average;
canvasPixels.data[i + 1] = average;
canvasPixels.data[i + 2] = average;
}
}
ctx.putImageData(canvasPixels, 0, 0, 0, 0, canvasPixels.width, canvasPixels.height);
return graycanvas .toDataURL();
}


//usage $(selector).grayScale();
