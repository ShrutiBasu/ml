Webcam.attach('#camara');
camara = document.getElementById("camara");
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

function take_selfie() {
    Webcam.snap(function (img) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="' + img + '"/>';
    })
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/B5tYQN96C/model.json',modelLoaded);

function modelLoaded(){

}
function check(){
    img=document.getElementById("selfie_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
document.getElementById("object").innerHTML="Object : "+results[0].label;
document.getElementById("accuracy").innerHTML="Accuracy : "+results[0].confidence;
}