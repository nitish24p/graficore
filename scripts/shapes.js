function shapeGenerator() {

}

shapeGenerator.prototype.circle= function(backgroundColor) {
  const circleElement = document.createElement("div");
  circleElement.style.width = '100%';
  circleElement.style.height = '100%';
  circleElement.style.background = backgroundColor;
  circleElement.style.borderRadius = '50%';

  return circleElement;
}

shapeGenerator.prototype.parallelogram1 = function(backgroundColor) {
  const paralleogram = document.createElement("div");
  paralleogram.className = 'parallelogram1';
  paralleogram.style.background = backgroundColor;

  return paralleogram;
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
  colorPicker.defaultValue = 'FFFFFF';

  return colorPicker;
}
