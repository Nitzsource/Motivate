// Animation to encourage and motivate
function setup() {
  createCanvas(800, 600);
  frameRate(30); // Smooth animation
  textSize(20);
  textFont('Georgia');
  textAlign(CENTER);
}

let phase = 0; // Animation phase
let yStack = 400; // Stack height
let xHero = -100; // Hero position
let stubbornText = "";

function draw() {
  background(240);

  if (phase === 0) {
    // Scene 1: Mountain of Books
    fill(200);
    for (let i = 0; i < 10; i++) {
      rect(300, yStack - i * 30, 150, 25); // Books
    }
    fill(0);
    text("Networking: 600 Pages!", width / 2, 50);
    text("How will I ever finish this?", width / 2, 450);

    if (frameCount > 90) {
      stubbornText = "Wait a second... I have a plan!";
      phase = 1;
    }
  } else if (phase === 1) {
    // Scene 2: Planning Moment
    fill(255, 255, 204);
    rect(100, 100, 600, 300, 20); // Planning board

    fill(0);
    text("Step 1: Skip unnecessary gibberish.", width / 2, 150);
    text("Step 2: Focus on important diagrams.", width / 2, 200);
    text("Step 3: Ace CPP first, then Networking!", width / 2, 250);

    text(stubbornText, width / 2, 350);

    if (frameCount > 240) phase = 2;
  } else if (phase === 2) {
    // Scene 3: Superhero Transformation
    background(135, 206, 235);

    fill(255, 0, 0);
    ellipse(width / 2, height / 2, 200, 250); // Superhero cape

    fill(255);
    textSize(30);
    text("Queen of Planning!", width / 2, height / 2);

    fill(0);
    textSize(20);
    text("Stubborn mode: ON!", width / 2, height / 2 + 50);

    if (frameCount > 360) phase = 3;
  } else if (phase === 3) {
    // Scene 4: The Victory Scene
    background(255, 223, 186);

    fill(0, 0, 255);
    textSize(40);
    text("100% Achieved!", width / 2, 200);

    fill(0);
    textSize(20);
    text("She planned it, she conquered it, she aced it!", width / 2, 300);

    // Motivational punchline
    text("Moral of the story: You are unstoppable! 😎", width / 2, 400);
  }
}
