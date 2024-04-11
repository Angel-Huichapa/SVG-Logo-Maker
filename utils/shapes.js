const fs = require("fs");
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    makeColor(color){
        this.color = color;
    }
  
    writeSvg(filename, content) {
      fs.writeFile(filename, content, (err) => {
        if (err) {
          console.error(`Error writing the file: ${filename}`, err);
        } else {
          console.log(`SVG file ${filename} made successfully.`);
        }
      });
    }
  }