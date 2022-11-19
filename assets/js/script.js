$(function (){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 150) {
            $('#navbar-example2').addClass("scroll-efect");
        } else {
            $("#navbar-example2").removeClass("scroll-efect");
        }
    });
});



/*---Para coultar texto de las card ---*/
$(document).ready(function()
{
$(".titulo-tarjeta").on( "click", function() {	 
    $('.texto-tarjeta').toggle();
     });
});

/*---Resaltar texto de las cards---*/

    $(".titulo-tarjeta").click(function(){
    $(".titulo-tarjeta").css({'text-shadow': '3px 3px 6px rgb(9, 33, 108)','font-weight': '500'});
    });
 

/*---Mensaje de alerta---*/
    var alertPlaceholder = document.getElementById('liveAlertPlaceholder')
var alertTrigger = document.getElementById('liveAlertBtn')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)
}

if (alertTrigger) {
  alertTrigger.addEventListener('click', function () {
    alert('Genial, enviaste el mensaje &#128522', 'success')
  })
}

