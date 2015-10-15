var growingDancer = function(top,left,timeBetweenSteps){ 
  makeDancer.apply(this, arguments)
  this.grow = true;
};

growingDancer.prototype = Object.create(makeDancer.prototype);
growingDancer.prototype.constructor =growingDancer; 

growingDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  if(this.grow){
    this.setSize(20);
    this.grow = false;  
  } else{
    this.setSize(10);
    this.grow = true;
  }
}