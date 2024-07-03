$(document).ready(function(){

    //Sistema de habilidades
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

    //Sistema de galeria de skin
    var defaultSkin = $('.defaultskin').attr('skin')
    $('.cont-fondoGallery').css('background', 'url('+defaultSkin+') no-repeat center').css('background-size', 'cover')
    $('.defaultskin').addClass('selectSkin')
    $('.skin').click(function(){
        var skin = $(this).attr('skin')
        
        $('.skin').removeClass('selectSkin')
        $(this).addClass('selectSkin')
        $('.cont-fondoGallery').css('background', 'url('+skin+') no-repeat center').css('background-size', 'cover')
    })

    //Sistema de deslizamiento de skins
    var indicador = 100
    var deslizador = 93
    var aumentoTop = 0
    var aumentoBot = 0

    $('.skin').click(function(){
        if($(this).is($('.deslizador').children('section').eq(0+aumentoTop))){
            if(indicador < 100){
                aumentoBot--
                aumentoTop--
                indicador = indicador + deslizador
            }
            $('.deslizador').css('top', indicador + 'px')
        }
        if($(this).is($('.deslizador').children('section').eq(3+aumentoBot))){
            if(aumentoBot>aumentoTop){
                aumentoTop++
            }
            aumentoBot++
            indicador = indicador - deslizador
            $('.deslizador').css('top', indicador + 'px')
        }
    })

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
  audioElement.on('ended', function(){
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
})