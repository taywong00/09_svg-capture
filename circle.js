var pic = document.getElementById('vimage');
var clearButton = document.getElementById('clear');

var drawDot = function(e) {
  var dot = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle'
  );

  //var x = Math.floor(Math.random() * Math.floor(500));
  //var y = Math.floor(Math.random() * Math.floor(500));

  //draw dot at clicked location
  dot.setAttribute("cx", e.offsetX);
  dot.setAttribute("cy", e.offsetY);
  dot.setAttribute("r", "10");
  dot.setAttribute("fill", "red");
  dot.setAttribute("stroke", "red");

  pic.appendChild(dot);

  dot.addEventListener('click', changeColor, true)

}

var drawRandomDot = function (e) {
  var dot = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'circle'
  );

  var x = Math.floor(Math.random() * Math.floor(500));
  var y = Math.floor(Math.random() * Math.floor(500));

  //draw dot at randomlocation
  dot.setAttribute("cx", x);
  dot.setAttribute("cy", y);
  dot.setAttribute("r", "10");
  dot.setAttribute("fill", "red");
  dot.setAttribute("stroke", "red");

  pic.appendChild(dot);

  dot.addEventListener('click')

}

var changeColor = function(e) {
  this.setAttribute("fill", "blue");
  this.addEventListener('click', replace(e));
}

var replace = function(e) {
  pic.removeChild(this);
  drawRandomDot(e);
}

pic.addEventListener('click', drawDot);
clearButton.addEventListener('click', clear);
