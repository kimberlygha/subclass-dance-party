// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, imageSrc) {


  // use jQuery to create an HTML <span> tag
  this.$node = $(imageSrc);
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.timeBetweenSteps = timeBetweenSteps;
  this.color = "red";
  this.paired = false;
  //this.step.bind(this);
  this.step();
};


  makeDancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
  
    // this.step = this.step.bind(this);
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  };

  makeDancer.prototype.setSize = function(size){
    var sizeSettings = {
      height:size +"px"
    };
    this.$node.css(sizeSettings);
  }

  makeDancer.prototype.setBorder = function(){
    var sizeSettings = {
      "border-radius": 0+"px"
    };
    this.$node.css(sizeSettings);
  }

  makeDancer.prototype.setColor = function(color){
    this.color = color;

    this.$node.css({"border-color" : this.color});

  }

  makeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    var styleSettings = {
      top: top+'%',
      left: left
    };
    this.$node.css(styleSettings);
  };
