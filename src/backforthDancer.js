var backforthDancer = function(top, left, timeBetweenSteps, imageSrc){
  makeDancer.apply(this,arguments);
  this.top = top; 
  this.left = left; 
  this.moveLeft = true; 
  // this.$node = $('<img src="./src/images/gifs 2/beyonce.gif" class="dancer">');
  // this.setBorder();
};

backforthDancer.prototype = Object.create(makeDancer.prototype);
backforthDancer.prototype.constructor = backforthDancer; 

backforthDancer.prototype.step = function(){ 
    makeDancer.prototype.step.call(this);
   if(this.moveLeft){
    this.left -= 30; 
    this.moveLeft = false; 
   }else{
    this.left += 30; 
    this.moveLeft = true; 
   }
    this.setPosition(this.top, this.left);

};