'use strict';

const arrayColors = ['#39f7ed', '#2e0087', '#fff', '#8af5ef',
  '#aaefeb', '#9e6ef9', '#eaeaea', '#7f45ec',
  '#def3f2', '#cebaf5'
  ];

function Grid () {
  this.gridArray = [ 1, 2, 3, 4];
  this.shape = new shapeGenerator();
  this.shapeArray = [
    'circle',
    'parallelogram1',
    'parallelogram2',
    'quarterTopLeft',
    'quarterTopRight',
    'quarterBottomLeft',
    'quarterBottomRight',
    'blank',
    'colorFill',
    ];

  this.colorArray = [];


  /* Slider Dom Elements */
  this.circleSlider = document.querySelector('#circle');
  this.parallelogram1Slider = document.querySelector('#parallelogram1');
  this.parallelogram2Slider = document.querySelector('#parallelogram2');
  this.quarterTopLeftSlider = document.querySelector('#quarterTopLeft');
  this.quarterTopRightSlider = document.querySelector('#quarterTopRight');
  this.quarterBottomLeftSlider = document.querySelector('#quarterBottomLeft');
  this.quarterBottomRightSlider = document.querySelector('#quarterBottomRight');
  this.blankSlider = document.querySelector('#blank');
  this.colorFillSlider = document.querySelector('#colorFill');

  /*Color DOM ELEMENT */


  /* Checkbox Dom Elements */
  this.circleCheckBox = document.querySelector('#circle-check');
  this.parallelogram1CheckBox = document.querySelector('#parallelogram1-check');
  this.parallelogram2CheckBox = document.querySelector('#parallelogram2-check');
  this.quarterTopLeftCheckBox = document.querySelector('#quarterTopLeft-check');
  this.quarterTopRightCheckBox = document.querySelector('#quarterTopRight-check');
  this.quarterBottomLeftCheckBox = document.querySelector('#quarterBottomLeft-check');
  this.quarterBottomRightCheckBox = document.querySelector('#quarterBottomRight-check');
  this.blankCheckBox = document.querySelector('#blank-check');
  this.colorFillCheckBox = document.querySelector('#colorFill-check');


  this.addColorPicker = document.querySelector('.add-color-picker');

  this.colorPickerList = document.querySelector('.color-picker');

}


Grid.prototype.init = function() {
  const parentGrid = document.querySelector('.new-parent');
  const self = this;
  this.buttonElement = document.querySelector('.button');
  this.buttonElement.addEventListener('click', this.generatePattern.bind(this));
  this.gridArray.forEach(function(element) {
    const childGridElement = document.createElement('div');
    childGridElement.dataset.index = element;
    childGridElement.className = 'square';
    childGridElement.addEventListener('click', self.clickCell.bind(self));
    parentGrid.appendChild(childGridElement);
  })
  // Create 4 divs here based on array


  // Bind Listeners to Slider
  this.circleSlider.addEventListener('change', this.onChangeSlider.bind(this));
  this.parallelogram1Slider.addEventListener('change', this.onChangeSlider.bind(this));
  this.parallelogram2Slider.addEventListener('change', this.onChangeSlider.bind(this));
  this.quarterTopLeftSlider.addEventListener('change', this.onChangeSlider.bind(this));
  this.quarterTopRightSlider.addEventListener('change', this.onChangeSlider.bind(this));
  this.quarterBottomLeftSlider.addEventListener('change', this.onChangeSlider.bind(this));
  this.quarterBottomRightSlider.addEventListener('change', this.onChangeSlider.bind(this));
  this.blankSlider.addEventListener('change', this.onChangeSlider.bind(this));
  this.colorFillSlider.addEventListener('change', this.onChangeSlider.bind(this));



  // Bind Listeners to Checkbox
  this.circleCheckBox.addEventListener('change', this.onCheckBoxChecked.bind(this));
  this.parallelogram1CheckBox.addEventListener('change', this.onCheckBoxChecked.bind(this));
  this.parallelogram2CheckBox.addEventListener('change', this.onCheckBoxChecked.bind(this));
  this.quarterTopLeftCheckBox.addEventListener('change', this.onCheckBoxChecked.bind(this));
  this.quarterTopRightCheckBox.addEventListener('change', this.onCheckBoxChecked.bind(this));
  this.quarterBottomLeftCheckBox.addEventListener('change', this.onCheckBoxChecked.bind(this));
  this.quarterBottomRightCheckBox.addEventListener('change', this.onCheckBoxChecked.bind(this));
  this.blankCheckBox.addEventListener('change', this.onCheckBoxChecked.bind(this));
  this.colorFillCheckBox.addEventListener('change', this.onCheckBoxChecked.bind(this));

  this.addColorPicker.addEventListener('click', this.addColor.bind(this));
}

Grid.prototype.addColor = function() {
  const color = this.shape.colorPicker();
  color.addEventListener('change', this.onColorChange.bind(this));
  this.colorPickerList.appendChild(color);
  window.jscolor.installByClassName('jscolor')
}

Grid.prototype.onColorChange = function(event) {
  console.log(event.defaultValue)
  console.log(event.target.value);
  console.log(event.target);
  console.log(event);
}

Grid.prototype.onCheckBoxChecked = function(event) {
  const shape = event.target.dataset.shape;
  const checked = event.target.checked;
  const el = shape + 'Slider';
  const sliderElement = this[el];

  if (checked) {
    sliderElement.parentNode.removeAttribute('hidden');
    this.shapeArray = this.shapeArray.concat([shape]);
  } else {
    if (this.shapeArray.length === 1) {
      // SHOW DOM ELEMENT TO SHOW ATLEAST 1 shape
    }
    sliderElement.parentNode.setAttribute('hidden', 'true');
    this.shapeArray = this.shapeArray.filter(function(existingElement) {
      return existingElement !== shape;
    });
  }
}

Grid.prototype.onChangeSlider = function(event) {
  const shape = event.target.id;
  const newValue = event.target.value;
  const oldValue = countInArray.call(this, this.shapeArray, shape);
  console.log(newValue, oldValue);
  // Clear Array
  this.shapeArray = this.shapeArray.filter(function(existingElement) {
    return existingElement !== shape;
  });

  const newShapeArray = new Array(parseInt(newValue, 10)).fill(shape);

  this.shapeArray = this.shapeArray.concat(newShapeArray);

}

Grid.prototype.clickCell = function(event) {
  // Update Array Count
  let maxValue = Math.max.apply(this, this.gridArray);
  const cellValue = event.target.dataset.index;
  const cellIndex = this.gridArray.indexOf(parseInt(cellValue, 10));
  let newArray = []

  for (let i = 1; i <= 4; i++) {
    maxValue+=1;
    newArray.push(maxValue);
  }
  this.gridArray = this.gridArray.slice(0, cellIndex).concat(newArray).concat(this.gridArray.slice(cellIndex + 1));

  console.log(this.gridArray)

  // Function to create child Grids
  const height = event.target.offsetHeight;
  const width = event.target.offsetWidth;
  const widthChild = width / 2;
  for(var i =0 ; i <4; i++) {
    const childElem = document.createElement("div");
    childElem.className = 'base-style-class';
    childElem.style.width = '50%';
    childElem.style.height = '50%';
    childElem.style.borderWidth = '1px';
    childElem.style.borderStyle = 'solid';
    childElem.style.borderColor = 'rgb(212, 212, 212)';
    childElem.dataset.index = newArray[i];
    //childElem.style.background = arrayColors[Math.floor(Math.random() * arrayColors.length)];
    childElem.addEventListener('click', this.clickCell.bind(this));

    event.target.appendChild(childElem)
  }
  
  event.stopPropagation()
}

Grid.prototype.generatePattern = function() {
  console.log(this.shapeArray);
  // Main Algo + Business logic
  if (this.gridArray.length === 0) {
    const marginElements = document.querySelectorAll('.base-style-class');
    marginElements.forEach(function(element) {
      //console.log(element.style)
      element.style.margin = '0px';
      element.style.borderStyle = 'none';
    })
    return;
  }

  let maxValue = Math.max.apply(this, this.gridArray); 
  const cellIndex = this.gridArray.indexOf(parseInt(maxValue, 10));

  const cellElement = document.querySelector('[data-index="' + maxValue + '"]');

  //cellElement.style.background = arrayColors[Math.floor(Math.random() * arrayColors.length)];
  const shape = this.shapeArray[Math.floor(Math.random() * this.shapeArray.length)];

  if (shape === 'blank' ) {
    cellElement.style.background = arrayColors[2]; // white
  } else if (shape === 'colorFill') {
    cellElement.style.background = arrayColors[Math.floor(Math.random() * arrayColors.length)];
  } else {
    const quarter = this.shape[shape](arrayColors[Math.floor(Math.random() * arrayColors.length)]);
    cellElement.appendChild(quarter);
  }
  

  this.gridArray = this.gridArray.slice(0, cellIndex).concat(this.gridArray.slice(cellIndex + 1));
  // cellElement.style.borderStyle = 'none';
  // cellElement.parentNode.style.borderStyle = 'none'


  //cellElement.appendChild(quarter);
  this.generatePattern();

}

window.onload = function() {
  window.grid = new Grid();
  grid.init()
};

function countInArray(array, value) {
  return array.reduce((n, x) => n + (x === value), 0);
}

// DOWNLOAD
/*
domtoimage.toPng(node)
.then(function(dataUrl){
      const link = document.createElement('a')
      link.download = 'graficore.png'
      link.href = dataUrl
      document.body.appendChild(link)
      link.click()
      link.remove()


})
*/

