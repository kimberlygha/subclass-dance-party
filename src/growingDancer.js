var growingDancer = function(top,left,timeBetweenSteps, imageSrc){ 
  makeDancer.apply(this, arguments)
  this.grow = true;
  // this.$node = $('<img src="./src/images/gifs 2/obama.gif" class="dancer">');
  this.colors = ['blue','yellow','orange','pink','black','grey'];
};

growingDancer.prototype = Object.create(makeDancer.prototype);
growingDancer.prototype.constructor =growingDancer; 

growingDancer.prototype.step = function(){
  makeDancer.prototype.step.call(this);
  if(this.grow){
    var position = Math.floor(Math.random()*this.colors.length);
    this.setSize(150);
    this.grow = false;  
  } else{
    this.setSize(100);
    this.grow = true;
  }
}