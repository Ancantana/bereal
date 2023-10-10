let capture;
let capturedImage;

function setup() {
  createCanvas(600, 600);
  capture = createCapture(VIDEO);
  capture.hide();

  const captureButton = select('#captureButton');
  captureButton.mousePressed(captureImage);
}

function captureImage() {
  capturedImage = capture.get();
  image(capturedImage, 20, 20, width, height);
  
  const dateTimeElement = select('#dateTime');
  dateTimeElement.html(getDateTimeString());
}

function getDateTimeString() {
  const now = new Date();
  return `Captured on ${now.toDateString()} at ${now.toLocaleTimeString()}`;
}

function draw() {
  // No need to use background here, as the captured image will cover the canvas
}
