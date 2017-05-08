// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

/// Data & Core Business Logic ///
const Stopwatch = {
  tickClock: function(){
    if (Stopwatch.isRunning) {
      setTimeout(Stopwatch.tickClock, 10); // trigger next clock tick
      Stopwatch.advanceTenMillisecs();
      AppController.handleClockTick();
    }
  },
  isRunning: false,
  mins: 0,
  secs: 0,
  millisecs: 0,
  laps: [],
  // DO NOT EDIT ABOVE THIS LINE
  advanceTenMillisecs: function(){
   Stopwatch.millisecs += 10;
   if (Stopwatch.millisecs === 1000) {
    Stopwatch.millisecs = 0;
    Stopwatch.secs += 1; 
   }
   if (Stopwatch.secs === 60) {
    Stopwatch.secs = 0;
    Stopwatch.mins += 1;
   }
  },
  reset: function(){
    // Your Code Here
    Stopwatch.millisecs = 0;
    Stopwatch.secs = 0;
    Stopwatch.mins = 0;
    Stopwatch.updateLapListDisplay = [];
  },
  start: function(){
    // Your Code Here
    if (Stopwatch.isRunning === false){
      Stopwatch.isRunning = true;
      Stopwatch.tickClock();
    }else{
      return;
    }

  },
  stop: function(){
    // Your Code Here
   if (Stopwatch.isRunning === true){
    Stopwatch.isRunning = false;
  }else {
   return; 
  }
  },
  lap: function(){
    // Your Code Here
    if (Stopwatch.isRunning === true) {
      Stopwatch.laps.push(Stopwatch.mins + ':' + Stopwatch.secs + ':' + Stopwatch.millisecs);
    }else{
      return;
    }
  }
};

/// User Interface ///
const ViewEngine = {
  updateTimeDisplay: function(mins, secs, millisecs){
   
   if (mins.length == 1){
    mins = '0' + mins;
   }

   if (secs.length == 1) {
    secs = '0' + secs;
   }
   if (millisecs.length == 1) {  
      millisecs = '0' + millisecs;
   }
   $('#time-display').html(mins + ':' +secs + ':' + millisecs); 
  },
  updateLapListDisplay: function(laps){
    // Your Code Here
    $('#lap-list').html('<li>' + laps + '</li>')
  }
};
const ViewHelpers = {
  zeroFill: function(number, length){
    // Your Code Here
    if (number.toString().length < length){
      for (var i = number.length; i < length; i++) {
        number = '0' + number;
      }
    }else{
      return number;
    }
  },
};

/// Top-Level Application Code ///
const AppController = {
  handleClockTick: function(){
    // Your Code Here
    ViewEngine.updateTimeDisplay (Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
  },
  handleClickStart: function() {
    // Your Code Here
    if (Stopwatch.isRunning === false) {
      Stopwatch.start();
    } else if( Stopwatch.isRunning === true){
      return;
    }
  },
  handleClickStopReset: function(){
    // Your Code Here
    if (Stopwatch.isRunning === true){
      Stopwatch.stop();
    } else if(Stopwatch.isRunning === false){
      Stopwatch.reset();
      ViewEngine.updateTimeDisplay(Stopwatch.mins, Stopwatch.secs, Stopwatch.millisecs);
      ViewEngine.updateLapListDisplay();
    }
  },
  handleClickLap: function(){
    // Your Code Here
    if (Stopwatch.isRunning === true){
      Stopwatch.lap();
      ViewEngine.updateLapListDisplay(Stopwatch.laps);
    } else{
        return;
    }
  }
};

window.onload = function(){
  // Attach AppController methods to the DOM as event handlers here.
  $('#start').on('click', AppController.handleClickStart);
  $('#lap').on('click',  AppController.handleClickLap);
  $('#stop').on('click', AppController.handleClickStopReset);

};
