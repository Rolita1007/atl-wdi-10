// General Assembly, WDI (Web Development Immersive) Remote, Cohort 02 (R2D2)
// Copyright (C) 2016 Matt Brendzel under the GNU General Public License.
// See LICENSE for details.

var timerUI = {
  drawNumericDisplay: function(timerValue){
   var $id = $('.numeric-display');
   

  },
  drawProgressBars: function(timerValue){
    var progress = 100 - timerValue;
    var bars = document.getElementByClassName('progress-bar');
    for (var i = 0; i < bars.length; i++){
      bars[i].style.width = progres + '%';
    }
  },
  drawLitFuses: function(timerValue){
   var percentUnBurnt = timerValue/100;
   var numFuses = document.getElementByClassName('fuse').length;
   for (var i = 0, i < numFuses; i++){
    document.getElementByClassName('unBurnt')[i].style.width = percentUnBurnt*98 + '%';
    document.getElementByClassName('burnt')[i].style.width = (1 - percentUnBurnt)*98 + '%';
   }
  },
  drawCrawlers: function(timerValue){
    // Your Code Here
  }
};
