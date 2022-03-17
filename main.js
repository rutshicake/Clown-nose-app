noseX=0;
noseY=0;
function preload() {
    clown_nose=loadImage('https://i.postimg.cc/mZMKnpQk/483-4838535-cartoon-pig-nose-png-transparent-png-removebg-preview-1.png');
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log('PoseNet is initialized');
}
function draw() {
image(video,0,0,300,300);
image(clown_nose,noseX-30,noseY-10,60,40);
}
function take_snapshot(){
    save('Myspecialfilters.png');
}
function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x="+noseX);
        console.log("nose y="+noseY);
    }
}