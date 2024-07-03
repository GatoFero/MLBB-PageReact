$(document).ready(function(){

  //Modelos Wanwan
  //Presentacion WanWan
  var audioPresentacion = $('<audio>').attr('src', 'assets/img/recursos/vozPrimera.wav')
  var audioResponder = $('<audio>').attr('src', 'assets/img/recursos/horaDeAclararTusDudas.wav')
  $('').html(audioPresentacion)
  $('').html(audioResponder)
  $('.modeloWanWan').click(function(){
    audioPresentacion[0].play()
    $('.modeloWanWan').css('background', 'url(assets/img/recursos/wanwanAfirma.png) no-repeat center').css('background-size', 'cover')
  })
  audioPresentacion.on('ended', function(){
    $('.modeloWanWan').css('background', 'url(assets/img/recursos/wanwanBase.png) no-repeat center').css('background-size', 'cover')
  })
  
  //Cambio de emociones primera
  $('.preguntaIzq').hover(function(){
    $('.modeloWanWan').css('background', 'url(assets/img/recursos/wanwanDuda.png) no-repeat center').css('background-size', 'cover')
    $('.modeloWanWan').css('transform', 'scaleX(-1)')
  })
  $('.preguntaDer').hover(function(){
    $('.modeloWanWan').css('background', 'url(assets/img/recursos/wanwanDuda.png) no-repeat center').css('background-size', 'cover')
    $('.modeloWanWan').css('transform', 'scaleX(1)')
  })

  //PResentacion de Modelo WanWan izquierda - derecha
  $('.preguntaDer').click(function(){
    $('#wanwanDer').addClass('modeloWanWanDer')
    audioResponder[0].play()
    $('.preguntasDer').hide()
    $('.preguntasIzq').hide()
    $('.modeloWanWan').hide()
  })

  $('.preguntaIzq').click(function(){
    $('#wanwanIzq').addClass('modeloWanWanIzq')
    audioResponder[0].play()
    $('.preguntasIzq').hide()
    $('.preguntasDer').hide()
    $('.modeloWanWan').hide()
  })
  // agrega primer all
  $('.botonesRoles .rol[category="all"]').addClass('selectRol')
  // Cambiar clase active
  $('.rol').click(function(){
    var rolSelect = $(this).attr('category')

    $('.rol').removeClass('selectRol')
    $(this).addClass('selectRol')

    $('.cardHero').css('opacity', '0%').hide()
    $('.cardHero[category= "'+rolSelect+'"').show().css('opacity', '100%')
  })

  $('.rol[category="all"]').click(function(){
    $('.cardHero').show().css('opacity', '100%')
  })

  //Buscar Heroes
  $('#buscarHeroe').on('keyup', function() {
    var busqueda = $(this).val().toLowerCase();
    $('.rol').removeClass('selectRol')
    $('.botonesRoles .rol[category="all"]').addClass('selectRol')
          
    $('.allHeroes .cardHero').css('opacity', '0%').hide()
      if(busqueda==''){
        $('.cardHero').show().css('opacity', '100%')
      }
    $('.cardHero[hero*="'+busqueda+'"]').show().css('opacity', '100%')
  });
  
  //Coordinacion de habilidades
  $('.textHabilidad').hide()
  $('.demosSkill').hide()
  $('.textHabilidad[skill="0"]').show()
  $('.demosSkill[skill="0"]').show()
      
  $('.inputSkills input').click(function(){
    var numSkill= $(this).attr('skill')

    $('.textHabilidad').hide()
    $('.demosSkill').hide()

    $('.textHabilidad[skill*="'+numSkill+'"]').show()
    $('.demosSkill[skill*="'+numSkill+'"]').show()
  })

  //Creacion de Page Hero
  var storePageHero = localStorage.getItem('copypageHero');
  
  function loadPageHero(pageUrl) {
    console.log('Cargando página: ' + pageUrl);
    $.ajax({
        url: pageUrl,
        dataType: 'html',
        success: function (data) {
            $('#heroPageVar').html(data);
        },
    });
  }

  if (storePageHero) {
    loadPageHero('pageHeroes/' + storePageHero + '.html');
  }

  $('.cardHero').hover(function () {
    var pageHero = $(this).attr('hero');
    console.log(pageHero);

    localStorage.setItem('copypageHero', pageHero);

    loadPageHero('pageHeroes/' + pageHero + '.html');
  });

  //Flechas carrusel 1 y 2

  var limite = 0
  var izquierda = +100
  var derecha = -100

  //Scrolls 
  $('#cont-carruselFavOne').click(function(){
    limite = 0
    console.log(limite)
    $('.carruselFav').css('left', +limite+'vw')
  })
  $('#cont-carruselFavTwo').click(function(){
    limite = -100
    $('.carruselFav').css('left', +limite+'vw')
  })
  $('#cont-carruselFavThree').click(function(){
    limite = -200
    $('.carruselFav').css('left', +limite+'vw')
  })
  $('#cont-carruselFavFour').click(function(){
    limite = -300
    $('.carruselFav').css('left', +limite+'vw')
  })
  $('#cont-carruselFavFive').click(function(){
    limite = -400
    $('.carruselFav').css('left', +limite+'vw')
  })

  //Flechas laterales
  $('#flechaIzq').click(function(){
    limite = limite + izquierda;
    if(limite > 0){
      limite = -400
    }
    if (limite === 0) {
      $('#cont-carruselFavOne').prop('checked', true);
    }
    if (limite === -100) {
      $('#cont-carruselFavTwo').prop('checked', true);
    }
    if (limite === -200) {
      $('#cont-carruselFavThree').prop('checked', true);
    }
    if (limite === -300) {
      $('#cont-carruselFavFour').prop('checked', true);
    }
    if (limite === -400) {
      $('#cont-carruselFavFive').prop('checked', true);
    }
    $('.carruselFav').css('left', +limite+'vw')
  })
  $('#flechaDere').click(function(){
    limite = limite + derecha
    if(limite < -400){
      limite = 0
    }
    if (limite === 0) {
      $('#cont-carruselFavOne').prop('checked', true);
    }
    if (limite === -100) {
      $('#cont-carruselFavTwo').prop('checked', true);
    }
    if (limite === -200) {
      $('#cont-carruselFavThree').prop('checked', true);
    }
    if (limite === -300) {
      $('#cont-carruselFavFour').prop('checked', true);
    }
    if (limite === -400) {
      $('#cont-carruselFavFive').prop('checked', true);
    }
    $('.carruselFav').css('left', +limite+'vw')
  })

  //Carrusel inicio
  var carruselLimite = 0
  var izquierdaCarrusel = +100
  var derechaCarrusel = -100
    
  $('#flechaIzq2').click(function(){
    carruselLimite = carruselLimite + izquierdaCarrusel;
    if(carruselLimite > 0){
      carruselLimite = -300
    }
    $('.carruselInicio').css('left', +carruselLimite+'vw')
  })
  $('#flechaDere2').click(function(){
    carruselLimite = carruselLimite + derechaCarrusel
    if(carruselLimite < -300){
      carruselLimite = 0
    }
    $('.carruselInicio').css('left', +carruselLimite+'vw')
  })
});

// Menu Mobile
function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
    document.getElementById("menu").style.visibility="hidden";
};
function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
    document.getElementById("menu").style.visibility="visible";
};
