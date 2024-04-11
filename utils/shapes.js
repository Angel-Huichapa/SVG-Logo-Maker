class Shape {
    constructor(color) {
      this.color = color;
    }
  
    render(content, width = 100, height = 100) {
      return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;
    }
  
    renderText(acronym, textColor, yPosition = "50%") {
      return `<text x="50%" y="${yPosition}" dominant-baseline="middle" text-anchor="middle" fill="${textColor}" font-size="25">${acronym}</text>`;
    }
  
    writeSvgFile(filename, content) {
      // Write SVG content to a file
    }
  }
  
  class Triangle extends Shape {
    constructor(color, sideLength) {
      super(color);
      this.sideLength = sideLength;
    }
  
    render() {
      const height = Math.sqrt(3) / 2 * this.sideLength;
      const halfSide = this.sideLength / 2;
      const points = `0,${height} ${this.sideLength},${height} ${halfSide},0`;
      return super.render(`<polygon points="${points}" fill="${this.color}" />`);
    }
  }
  
  class Circle extends Shape {
    constructor(color, radius) {
      super(color);
      this.radius = radius;
    }
  
    render() {
      return super.render(`<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}" />`);
    }
  }
  
  class Square extends Shape {
    constructor(color, sideLength) {
      super(color);
      this.sideLength = sideLength;
    }
  
    render() {
      return super.render(`<rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`);
    }
  }
  