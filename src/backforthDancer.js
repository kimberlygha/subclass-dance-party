var backforthDancer = function(top, left, timeBetweenSteps){
  makeDancer.apply(this,arguments);
  this.top = top; 
  this.left = left; 
  this.moveLeft = true; 
};

backforthDancer.prototype = Object.create(makeDancer.prototype);
backforthDancer.prototype.constructor = backforthDancer; 

backforthDancer.prototype.step = function(){ 
    makeDancer.prototype.step.call(this);
   if(this.moveLeft){
    this.left+=50;
    this.moveLeft = false; 
   }else{
    this.left -= 50; 
    this.moveLeft = true; 
   }
    this.setPosition(this.top, this.left);

};