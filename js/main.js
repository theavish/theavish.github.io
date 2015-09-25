$($(document).ready(function() {
   var kcode = false;
   if (window.addEventListener) {
      var state = 0;
      var phrase = [38,38,40,40,37,39,37,39,66,65];
      window.addEventListener("keydown", function(input) {
         if (input.keyCode == phrase[state]) {
            state++;
         } else {
            state = 0;
         }
         if (state == 10) {
            console.log('You got it!');
            kcode = true;
         }
      }, true);
   }


}));
