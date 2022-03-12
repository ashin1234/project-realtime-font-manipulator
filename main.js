function setup(){
    canvas=createCanvas(550, 500);
    canvas.position(560, 100);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
    }
}
function modelLoaded(){
    console.log('PoseNet Is Intialized!');
}
function draw(){
    background("#092AAD")
}


