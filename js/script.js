class CreateFigure {
  constructor(width, height, bdColor, borderRadius, elsOpacity) {
    this.width = width;
    this.height = height;
    this.bdColor = bdColor;
    this.borderRadius = borderRadius;
    this.elsOpacity = elsOpacity;
  }

  create() {
    let box = document.createElement("div");
    box.style.width = this.width + "px";
    box.style.height = this.height + "px";
    box.style.background = this.bdColor;
    box.style.borderRadius = this.borderRadius + "px";
    box.style.elsOpacity = this.elsOpacity;
    document.body.appendChild(box);

  }
}

const div = new CreateFigure(300, 300, "red", 150, 1);

div.create();

console.log(div);