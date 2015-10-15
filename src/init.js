$(document).ready(function() {
  window.dancers = [];
  var initLeft = 0;

  $(".addDancerButton").on("click", function(event) {

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];


    var dancer = new dancerMakerFunction(
      100,
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
      100,
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
      100,
      initLeft,
      600,
      '<img src="./src/images/gifs 2/obama.gif" class="dancer">'
    );
    initLeft+= 160;
    $('body').append(dancer.$node);
     window.dancers.push(dancer);
  });

  $(".lineUpDancers").on("click", function(event) {


    var dancers = window.dancers;
    var top = 20;
    for(var i = 0 ; i < dancers.length ; i++){
      dancers[i].top = top; 
      dancers[i].left = 30;
      dancers[i].setPosition(top,30); 
    top+=50;
    }

  });

    $(".danceRows").on("click", function(event) {
      var dancers = window.dancers;
      var growingRow = 0;
      var backforthRow = 0;
      var blinkyRow = 0;
      var left = 0;
      for(var i = 0; i < dancers.length; i++){
        var currentDancer = dancers[i];
        if(currentDancer.constructor === growingDancer ){
          growingRow+= 220;
          dancers[i].top = 200;
          dancers[i].left = growingRow; 
          dancers[i].setPosition(200, growingRow);
        } else if (currentDancer.constructor === makeBlinkyDancer ){
          blinkyRow+= 220;
          dancers[i].top = 400;
          dancers[i].left = blinkyRow; 
          dancers[i].setPosition(400, blinkyRow);
        } else if (currentDancer.constructor === backforthDancer ){
          backforthRow+=220;
          dancers[i].top = 600;
          dancers[i].left = backforthRow; 
          dancers[i].setPosition(600, backforthRow);
        }
      }
    });






});

