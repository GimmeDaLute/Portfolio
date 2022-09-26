var animation = null;

function animationFunction() {
  var animatedElement = document.getElementById("simpleAnimation");   
  var position = 0;
  clearInterval(animation);
  animation = setInterval(frame, 10);
  function frame() {
    if (position == 315) {
      clearInterval(animation);
    } else {
      position++; 
      animatedElement.style.top = position + 'px'; 
      animatedElement.style.left = position + 'px'; 
    }
  }
}
