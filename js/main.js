var num = 0;
window.onload = function () {
        var name = prompt("What is your name");
        
        var space = document.getElementById("space");
        
        space.innerHTML = name + "'s Bakery";
}
var cookie = document.getElementById("cookie");
$(document).ready(function(){
  var cookies = 0;
$('#cookie').click(function(){
    cookies++;
    updateCookies();
  });
function updateCookies() {
    $('#cookies').text(cookies);
  }
});