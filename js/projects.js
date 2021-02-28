
$(function () {

var theme= $('#theme');
$('#to-blue').click(function(){
    theme.attr("href"," css/blue.css");
});

$('#to-bordo').click(function(){
    theme.attr('href', 'css/bordo.css');
});
$('#to-gray').click(function(){
    theme.attr('href', 'css/gray.css');
});

$('.subir').click(function(e){
    e.preventDefault();
$('html,body').animate({
    scrollTop:0
}, 500);
return false;
});

$('#login form').submit(function(){
  var form_name=$('#form_name').val(); 
  localStorage.setItem('form_name', form_name);
});
var form_name=localStorage.getItem('form_name');

if(form_name !=null && form_name != 'undefined'){
    var about_text=$('#about p');

about_text.html('<br></br><strong>Welcome, '+form_name+' </strong>');
about_text.append("<a href='#' id='logout'>Logout</a>");

    $('#login').hide();

    $('#logout').click(function(){
        localStorage.clear();
       location.reload();
    });
}

$('#acordeon').accordion();
  $(".ui-corner-top")
  .css({'background':'#fff',
  'border':'#333'
});
 $('.ui-state-default').css('color','black');
 $('.ui-widget-content').css('background','rgb(221, 221, 221');

});