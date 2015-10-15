$(document).ready(function() {
  window.dancers = [];
  var initLeft = 0;

  $(".addDancerButton").on("click", function(event) {

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];


    var dancer = new dancerMakerFunction(
      10,
      initLeft,
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
      10,
      initLeft,
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
      10,
      initLeft,
      600,
      '<img src="./src/images/gifs 2/obama.gif" class="dancer">'
    );
    initLeft+= 160;
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


    $("body").mouseover(function(event){
      var height = $(window).height();
      var top = event.pageY / height * 100;
      window.dancers[0].setPosition(top, event.pageX)
    })





});

