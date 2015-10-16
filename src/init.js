$(document).ready(function() {
  window.dancers = [];
  window.pairs = [];
  var initLeft = 0;

  $(".addDancerButton").on("click", function(event) {

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];


    var dancer = new dancerMakerFunction(
      Math.random()*100,
      Math.random()*$(window).width(),
      600,
      '<img src="./src/images/gifs 2/pizza.gif" class="dancer">'
    );
    initLeft += 160;
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });


  $(".addSwayButton").on("click", function(event) {

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];


    var dancer = new dancerMakerFunction(
      Math.random()*100,
      Math.random()*$(window).width(),
      600,
'<img src="./src/images/gifs 2/beyonce.gif" class="dancer">'
    );
    initLeft+= 160;
    $('body').append(dancer.$node);
     window.dancers.push(dancer);
  });

  $(".addGrowingButton").on("click", function(event) {

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];


    var dancer = new dancerMakerFunction(
      Math.random()*100,
      Math.random()*$(window).width(),
      600,
      '<img src="./src/images/gifs 2/obama.gif" class="dancer">'
    );
    $('body').append(dancer.$node);
     window.dancers.push(dancer);
  });

  $(".lineUpDancers").on("click", function(event) {

    initLeft = 0; 
    var dancers = window.dancers;
    var top = 20;
    for(var i = 0 ; i < dancers.length ; i++){
      dancers[i].top = top; 
      dancers[i].left = 30;
      dancers[i].setPosition(top,30); 
    top+=5;
    }

  });

    $(".danceRows").on("click", function(event) {
      initLeft = 0 ;
      var dancers = window.dancers;
      var growingRow = 0;
      var backforthRow = 0;
      var blinkyRow = 0;
      var left = 0;
      for(var i = 0; i < dancers.length; i++){
        var currentDancer = dancers[i];
        if(currentDancer.constructor === growingDancer ){
          growingRow+= 220;
          dancers[i].top = 20;
          dancers[i].left = growingRow; 
          dancers[i].setPosition(20, growingRow);
        } else if (currentDancer.constructor === makeBlinkyDancer ){
          blinkyRow+= 220;
          dancers[i].top = 40;
          dancers[i].left = blinkyRow; 
          dancers[i].setPosition(40, blinkyRow);
        } else if (currentDancer.constructor === backforthDancer ){
          backforthRow+=220;
          dancers[i].top = 60;
          dancers[i].left = backforthRow; 
          dancers[i].setPosition(60, backforthRow);
        }
      }
    });

    $('.grey').on("click", function(event){
      $('body').css({'background-image':"url(http://p1.pichost.me/i/8/1311083.jpg)"});

    })

    $('.pizza').on("click", function(event){
      $('body').css({'background-image':"url(https://pizza.dominos.com/store/2778/photo-0.jpg)"});

    });

    $('.whitehouse').on("click", function(event){
      $('body').css({'background-image':"url(http://www.free-desktop-backgrounds.net/free-desktop-wallpapers-backgrounds/free-hd-desktop-wallpapers-backgrounds/166051785.jpg)"});

    })

    $("body").keypress(function(event){
      if(event.keyCode === 32){
        // pair on spacebar 
        // make a shallow copy of dancers array 
       // write a function that takes an array as an argument
        var pairUp = function(arr){
          var pair = [];
        //  check to see if length of array is greater than 1 
          if(arr.length < 2){
          // if arr.length === 1
            if(arr.length === 1){
              pair.push(arr[0]);
              var dance = new growingDancer(10,initLeft,600,'<img src="./src/images/gifs 2/obama.gif" class="dancer">');
              window.dancers.push(dance);
              $('body').append(dance.$node);
              pair.push(dance);
            }
            return; 
          }
          // store first value of the array to a variable called match and remove it from array   
          var match = arr.shift();
          pair.push(match); 
          var matchCoordinates = [match.left, match.top];
          // reduce the array to return the closest dancer and dancer's index  
          var closest = arr.reduce(function(dancer, item, i){
            var coordinate2 = [item.left,item.top];
            var diff = [Math.pow(matchCoordinates[0]-coordinate2[0],2), Math.pow(matchCoordinates[1]-coordinate2[1],2)]
            var length = Math.sqrt(diff[0]+diff[1]);
            if(length < dancer[1]){
              dancer = [item, length, i];
            }
            return dancer; 
          },[dancers[0],Infinity,0])
          // push dancer and match variable to pair array 
          pair.push(closest[0]);
          // push pair array to Allpairs array 
          window.pairs.push(pair);
          // splice the original array to remove partner 
          arr.splice(closest[2], 1);
          // call function on new array 
          pairUp(arr);
       }
      var dancers = window.dancers.slice(); 

       pairUp(dancers);

       window.pairs.forEach(function(pair){
        var top = Math.floor(Math.random()*100);
        var left = Math.floor(Math.random()*$(window).width);
          pair[0].setPosition(top, left);
          pair[1].setPosition(top, left+20);
       })
    }
  });

});




