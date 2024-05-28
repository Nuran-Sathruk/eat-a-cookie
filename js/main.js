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