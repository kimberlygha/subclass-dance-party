var growingDancer = function(top,left,timeBetweenSteps){ 
  makeDancer.apply(this, arguments)
  this.grow = true;
  this.colors = ['blue','yellow','orange','pink','black','grey'];
};

growingDancer.prototype = Object.create(makeDancer.prototype);
growingDancer.prototype.constructor =growingDancer; 

growingDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  if(this.grow){
    var position = Math.floor(Math.random()*this.colors.length);
    this.setColor(this.colors[position]);
    this.setSize(20);
    this.grow = false;  
  } else{
    this.setSize(10);
    this.grow = true;
  }
}