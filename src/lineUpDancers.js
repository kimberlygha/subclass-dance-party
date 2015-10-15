var lineUpDancers = function(){
  var dancers = window.dancers;
  var top = 0;
  for(var i = 0 ; i < dancers.length ; i++){
    dancers[i].setPosition(top, 10);
    top+=20;
  }
}