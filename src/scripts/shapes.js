'use strict';

function shapeGenerator() {
  this.svgNS = "http://www.w3.org/2000/svg";
}

shapeGenerator.prototype.circle = function(backgroundColor, parentElement) {
  // const circleElement = document.createElement("div");
  // circleElement.style.width = '100%';
  // circleElement.style.height = '100%';
  // circleElement.style.background = backgroundColor;
  // circleElement.style.borderRadius = '50%';
  // Subtract 2 as border is 1 px
  const height = parentElement.getBoundingClientRect().height - 2;
  const width = parentElement.getBoundingClientRect().width - 2;
  console.log("height width", height, width);
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", width);
  svg.setAttribute('height', height);
  const circleElement = document.createElementNS(this.svgNS, 'circle');
  circleElement.setAttributeNS(null,"id","circleElement");
  circleElement.setAttributeNS(null, "cx", height/2);
  circleElement.setAttributeNS(null, "cy", height/2);
  circleElement.setAttributeNS(null, "r", height/2);
  circleElement.setAttributeNS(null, "fill", backgroundColor);
  circleElement.setAttributeNS(null,"stroke","none");
  svg.appendChild(circleElement);
  return svg;
}

shapeGenerator.prototype.parallelogram1 = function(backgroundColor, parentElement) {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const height = parentElement.getBoundingClientRect().height - 2;
  const width = parentElement.getBoundingClientRect().width - 2;
  svg.setAttribute("width", width);
  svg.setAttribute('height', height);
  const polygon = document.createElementNS(this.svgNS, 'polygon');
  polygon.setAttributeNS(null, "fill", backgroundColor);
  polygon.setAttributeNS(null, "cy", height / 2);
  //polygon.setAttribute("points", `0,0 ${width / 4},0 ${width},${3 * height/4} ${width},${height} ${3 * width / 4}, ${height} 0, ${height / 4} `)
  polygon.setAttribute('points', `0,0 ${width / 2},0  ${width},${height} ${width/2},${height}`)
  svg.appendChild(polygon);
  // const paralleogram = document.createElement("div");
  // paralleogram.className = 'parallelogram1';
  // paralleogram.style.background = backgroundColor;

  return svg;
}

shapeGenerator.prototype.parallelogram2 = function(backgroundColor) {
  const paralleogram = document.createElement("div");
  paralleogram.className = 'parallelogram2';
  paralleogram.style.background = backgroundColor;

  return paralleogram;
}

shapeGenerator.prototype.quarterTopLeft = function(backgroundColor) {
  const quarterParent = document.createElement("div");
  const quarter1 = document.createElement("div");
  const cutout = document.createElement("div");
  quarter1.className = 'quarter quarter1';
  cutout.className = 'cutout';
  quarter1.style.background = backgroundColor;
  quarterParent.appendChild(quarter1);
  quarterParent.appendChild(cutout);

  return quarterParent;
}

shapeGenerator.prototype.quarterTopRight = function(backgroundColor) {
  const quarterParent = document.createElement("div");
  const quarter2 = document.createElement("div");
  const cutout = document.createElement("div");
  quarter2.className = 'quarter quarter2';
  cutout.className = 'cutout';
  quarter2.style.background = backgroundColor;
  quarterParent.appendChild(quarter2);
  quarterParent.appendChild(cutout);

  return quarterParent;
}

shapeGenerator.prototype.quarterBottomLeft = function(backgroundColor) {
  const quarterParent = document.createElement("div");
  const quarter3 = document.createElement("div");
  const cutout = document.createElement("div");
  quarter3.className = 'quarter quarter3';
  cutout.className = 'cutout';
  quarter3.style.background = backgroundColor;
  quarterParent.appendChild(quarter3);
  quarterParent.appendChild(cutout);

  return quarterParent;
}

shapeGenerator.prototype.quarterBottomRight = function(backgroundColor) {
  const quarterParent = document.createElement("div");
  const quarter4 = document.createElement("div");
  const cutout = document.createElement("div");
  quarter4.className = 'quarter quarter4';
  cutout.className = 'cutout';
  quarter4.style.background = backgroundColor;
  quarterParent.appendChild(quarter4);
  quarterParent.appendChild(cutout);

  return quarterParent;
}

shapeGenerator.prototype.colorPicker = function() {
  const colorPicker = document.createElement('input');
  colorPicker.className = 'jscolor';
  colorPicker.setAttribute('prevvalue', 'FFFFFF');

  return colorPicker;
}

module.exports = shapeGenerator;
