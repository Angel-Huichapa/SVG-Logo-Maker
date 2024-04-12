const readline = require('readline');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./utils/shapes');
const path = require('path'); // Import the path module

function promptUser(prompt) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

async function main() {
  const text = await promptUser('Enter up to three characters: ');
  const textColor = await promptUser('Enter text color: ');
  const shapeChoice = await promptUser('Choose a shape (circle, triangle, square): ');
  const shapeColor = await promptUser('Enter shape color: ');

  let shape;
  switch (shapeChoice.toLowerCase()) {
    case 'circle':
      shape = new Circle(shapeColor);
      break;
    case 'triangle':
      shape = new Triangle(shapeColor);
      break;
    case 'square':
      shape = new Square(shapeColor);
      break;
    default:
      console.error('Invalid shape choice');
      return;
  }

  const svgContent = shape.render(shape.renderText(text, textColor)); // Use renderText method here
  const outputFolder = path.join(__dirname, 'output'); // Construct the path to the "output" folder
  const filename = path.join(outputFolder, 'output.svg'); // Specify the filename and its path

  fs.mkdirSync(outputFolder, { recursive: true }); // Create the "output" folder if it doesn't exist
  shape.writeSvgFile(filename, svgContent); // Write the SVG file to the specified path
}

main();
