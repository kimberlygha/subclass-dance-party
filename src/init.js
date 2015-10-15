$(document).ready(function() {
  window.dancers = [];

  $(".addDancerButton").on("click", function(event) {

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];


    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });


  $(".addSwayButton").on("click", function(event) {

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];


    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
     window.dancers.push(dancer);
  });

  $(".addGrowingButton").on("click", function(event) {

    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];


    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
     window.dancers.push(dancer);
  });

  $(".lineUpDancers").on("click", function(event) {


    var dancers = window.dancers;
    var top = 0;
    for(var i = 0 ; i < dancers.length ; i++){
      dancers[i].setPosition(top, 10);
    top+=20;
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
          currentDancer.setPosition(200, growingRow);
        } else if (currentDancer.constructor === makeBlinkyDancer ){
          blinkyRow+= 220;
          currentDancer.setPosition(400, blinkyRow);
        } else if (currentDancer.constructor === backforthDancer ){
          backforthRow+=220;
          currentDancer.setPosition(600 , backforthRow);
        }
      }


    });



});

