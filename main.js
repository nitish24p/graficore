const arrayColors = ['#39f7ed', '#2e0087', '#fff', '#8af5ef',
  '#aaefeb', '#9e6ef9', '#eaeaea', '#7f45ec',
  '#def3f2', '#cebaf5'
  ];

const squares = document.querySelectorAll('.square');

squares.forEach((sq) => {
  sq.addEventListener('click', handlerClick)
})

function handlerClick(event) {
  const height = event.target.offsetHeight;
  const width = event.target.offsetWidth;

  const widthChild = width / 2;
  for(var i =1 ; i <= 4; i++) {
     const childElem = document.createElement("div");
    childElem.className = 'base-style-class';
    childElem.style.width = '50%';
    childElem.style.height = '50%';
    childElem.style.borderWidth = '1px';
    childElem.style.borderStyle = 'solid';
    childElem.style.borderColor = 'rgb(212, 212, 212)';
    //childElem.style.background = arrayColors[Math.floor(Math.random() * arrayColors.length)];
    childElem.addEventListener('click', handlerClick);

    event.target.appendChild(childElem)
  }
  
  event.stopPropagation()
  
}

function Grid () {
  this.gridArray = [ 1, 2, 3, 4];
  this.shape = new shapeGenerator();
  this.shapeArray = [
    'circle',
    'paralleogram1',
    'paralleogram2',
    'quarterTopLeft',
    'quarterTopRight',
    'quarterBottomLeft',
    'quarterBottomRight'];
}


Grid.prototype.init = function() {
  const parentGrid = document.querySelector('.new-parent');
  const self = this;
  this.buttonElement = document.querySelector('.button');
  this.buttonElement.addEventListener('click', this.colorGrid.bind(this));
  this.gridArray.forEach(function(element) {
    const childGridElement = document.createElement('div');
    childGridElement.dataset.index = element;
    childGridElement.className = 'square';
    childGridElement.addEventListener('click', self.clickCell.bind(self));
    parentGrid.appendChild(childGridElement);
  })
  // Create 4 divs here based on array
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

Grid.prototype.colorGrid = function() {
  // Main Algo + Business logic
  if (this.gridArray.length === 0) {
    const marginElements = document.querySelectorAll('.base-style-class');
    marginElements.forEach(function(element) {
      //console.log(element.style)
      element.style.margin = '0px';
    })
    return;
  }
  console.log("CALLING", this.gridArray);
  let maxValue = Math.max.apply(this, this.gridArray); 
  const cellIndex = this.gridArray.indexOf(parseInt(maxValue, 10));

  const cellElement = document.querySelector('[data-index="' + maxValue + '"]');

  //cellElement.style.background = arrayColors[Math.floor(Math.random() * arrayColors.length)];
  const shape = this.shapeArray[Math.floor(Math.random() * this.shapeArray.length)];
  console.log(shape);
  const quarter = this.shape[shape](arrayColors[Math.floor(Math.random() * arrayColors.length)]);

  this.gridArray = this.gridArray.slice(0, cellIndex).concat(this.gridArray.slice(cellIndex + 1));


  cellElement.style.borderStyle = 'none';
  cellElement.parentNode.style.borderStyle = 'none'


  cellElement.appendChild(quarter);
  this.colorGrid();

}

window.onload = function() {
  window.grid = new Grid();
  grid.init()
};


