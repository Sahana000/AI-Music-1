song1 =""
song2 =""

function preload() {
    song1 = loadSound("There_s Nothing Holdin_Me Back-Shawn.mp3")
    song2 = loadSound("Dhvani Bhanushali-Leja Re.mp3")
}
function setup() {
    canvas = createCanvas(600, 520);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 520);
}

function start() {

}