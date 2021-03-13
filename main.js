Webcam.set ({
    width: 387,
    height: 288,
    dest_width: 397,
    dest_height: 298,
    image_format: 'png',
    png_quality: 90,
    
    constraints: {
        facingMode: "environment"
    }
});
camera = document.getElementById("camera");
Webcam.attach("#camera");

function takeSnapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("snapshot").innerHTML = '<img id="capturedImg" src="' + data_uri + '"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('MobileNet', modelLoaded);
function modelLoaded() {
    console.log('Model Loaded!');
}
function identifyImage() {
    img = document.getElementById("capturedImg");
    classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("objectName").innerHTML = results[0].label;
    }
}