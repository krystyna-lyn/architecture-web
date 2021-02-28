
$(function () {
    $('.gallary').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1300,
        pager: false

    });



    var posts = [
        {
            title: 'First Title',
            date: moment().format('MMMM Do YYYY '),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestiae dolores magni facere aliquid neque voluptas. A fugiat molestiae cum natus! Obcaecati voluptates voluptate ipsa vitae consequuntur aliquid pariatur aliquam sunt ducimus deserunt illo debitis a dignissimos ea exercitationem sit quasi assumenda, non voluptatum! Numquam rerum dicta a reprehenderit accusamus.'
        },
        {
            title: 'Second Title',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestiae dolores magni facere aliquid neque voluptas. A fugiat molestiae cum natus! Obcaecati voluptates voluptate ipsa vitae consequuntur aliquid pariatur aliquam sunt ducimus deserunt illo debitis a dignissimos ea exercitationem sit quasi assumenda, non voluptatum! Numquam rerum dicta a reprehenderit accusamus.'
        },
        {
            title: 'Third Title',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestiae dolores magni facere aliquid neque voluptas. A fugiat molestiae cum natus! Obcaecati voluptates voluptate ipsa vitae consequuntur aliquid pariatur aliquam sunt ducimus deserunt illo debitis a dignissimos ea exercitationem sit quasi assumenda, non voluptatum! Numquam rerum dicta a reprehenderit accusamus.'
        },
        {
            title: 'Fourth Title',
            date: new Date(),
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestiae dolores magni facere aliquid neque voluptas. A fugiat molestiae cum natus! Obcaecati voluptates voluptate ipsa vitae consequuntur aliquid pariatur aliquam sunt ducimus deserunt illo debitis a dignissimos ea exercitationem sit quasi assumenda, non voluptatum! Numquam rerum dicta a reprehenderit accusamus.'
        }
    ];
   

    posts.forEach((item,index)=>{
var post=`
<article class="post">
            <h2>${item.title}</h2>
            <span>${item.date}</span>
            <p>${item.content}</p>
        <a href="#" class="read-more">Read more</a>
        
    </article>
`;
$('#posts').append(post);

    });


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

$('.to-top').click(function(e){
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
if(window.location.href.indexOf('reloj')>-1){

    setInterval(function(){
        var reloj=moment().format('hh:mm:ss');
        $('#reloj').html(reloj);
    },1000)


}
if(window.location.href.indexOf('contact')>-1){
$.validate({
    lang: 'en',
    errorMessagePosition: 'top',
    scrollToTopOnError:true
});
}
});