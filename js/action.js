
function random(){
  let bodyWidth = document.body.clientWidth;
  let bodyHeight = document.body.clientHeight;
  let randPosX = Math.floor((Math.random()*bodyWidth));
  let randPosY = Math.floor((Math.random()*bodyHeight));
  $('#rand_pos').css('left', randPosX);
  $('#rand_pos').css('top', randPosY);
}


$(document).ready(function() {
  $("body").mousemove(function(e){
  $('.flashlight').css('top', e.pageY-50).css('left', e.pageX-50); })
;})

// function showCat(){
//     document.body.style.background =  "black"
// }

// $(function(){
//       $('#rand_pos').mouseover(function() {
//          // var h = $('#rand_pos').height()
//          // var w = $('#rand_pos').width()
//
//          var bodyWidth = document.body.clientWidth - w;
//          var bodyHeight = document.body.clientHeight - h;
//          var randPosX = Math.floor((Math.random() * bodyWidth));
//          var randPosY = Math.floor((Math.random() * bodyHeight));
//          var posXY = 'x: ' + randPosX + '<br />' + 'y: ' + randPosY;
//
//         $('#rand_pos').css('left', randPosX);
//         $('#rand_pos').css('top', randPosY);
//       });
//     })