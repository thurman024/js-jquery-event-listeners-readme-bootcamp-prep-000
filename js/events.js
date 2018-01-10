//define functions here
function getIt() {
  $('p').click()
  alert("Hey!")
  return
}
function frameIt() {
  $('img').on('load', function(){
    <class = "tasty">
  })
  return
}
function pressIt() {
  $('form').on('keydown', function(key) {
    if(key.which == 71) {
      alert("G was pressed");
    }
  });
  return
}

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()
});
