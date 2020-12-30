function getRandomColor(){
  var letters='0123456789ABCDEF';
  var color='#';
  for(var i = 0; i < 6; i++) {
    var r=Math.floor(Math.random()*16)
    color=color+letters[r]
  }
  return color;
  }
  var b=document.querySelector('button');
  b.addEventListener('click',changecolor)
  function changecolor(){
    var body=document.querySelector('body');
    body.style.background=getRandomColor();
  }
