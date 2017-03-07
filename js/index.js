/**
 * Created by funinbook on 2017/1/10.
 */

$(function () {
    $('.close').click(function () {
        $a1.css('color','#000');
        $a1.css('border-bottom','none');
        $a2.css('color','#000');
        $a2.css('border-bottom','none');

    });
   // $('#content').fullpage();
    $('.nav ul li a').click(function () {
        $('.nav ul li a').removeClass('active');
        $(this).addClass('active');
    });
    $('.login a:nth-of-type(1)').click(function () {
       $('.loginBox').show();
        $('.loginBox .option').show();
        $('.loginBox .account').show();
        $('.loginBox .registerBox').hide();
        $('.loginBox .retrieve_password').hide();
        $a1.css('color','#3598dc');
        $a1.css('border-bottom','2px solid #3598dc');

    });
    $('.login a:nth-of-type(2)').click(function () {
        $('.loginBox').show();
        $('.loginBox .option').show();
        $('.loginBox .account').hide();
        $('.loginBox .registerBox').show();
        $('.loginBox .retrieve_password').hide();
        $a2.css('color','#3598dc');
        $a2.css('border-bottom','2px solid #3598dc');
    });
    var $a1 =  $('.loginBox .option a:nth-of-type(1)');
    var $a2 =  $('.loginBox .option a:nth-of-type(2)');
        $a1 .click(function () {
        $('.loginBox .registerBox').hide();
        $('.loginBox .account').show();
        $(this).css('color','#3598dc');
        $(this).css('border-bottom','2px solid #3598dc');
        $a2.css('color','#000');
        $a2.css('border-bottom','none')
    });
        $a2.click(function () {
        $('.loginBox .registerBox').show();
        $('.loginBox .account').hide();
        $(this).css('color','#3598dc');
        $(this).css('border-bottom','2px solid #3598dc');
        $a1.css('color','#000');
        $a1.css('border-bottom','none')
    });
    $('.loginBox .account .forget').click(function () {
        $('.loginBox .option').hide();
        $('.loginBox .account').hide();
        $('.loginBox .retrieve_password').show()
    });
    $('.ling-xuan').toggle(
        function (){
            $(this).removeClass('ling-xuan').addClass('ling-wei')
        }, function () {
            $(this).removeClass('ling-wei').addClass('ling-xuan')
        }
    );

   /* 娱信评分*/
    function grade1(){
    $('.line1').fadeIn(500, function () {
        $('.t1').slideDown(500, function () {
            $('.line2').fadeIn(500, function () {
                $('.t2').slideDown(500, function () {
                    $('.line3').fadeIn(500, function () {
                        $('.t3').slideDown(500, function () {
                            $('.line4').fadeIn(500, function () {
                                $('.t4').slideDown(500, function () {
                                    $('.line5').fadeIn(500, function () {
                                        $('.t5').slideDown(500, function () {
                                            $('.line6').fadeIn(500, function () {
                                                $('.t6').slideDown(500)
                                            });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
    }

   $(window).scroll(function () {
       var clientH = $(window).height();
       var scrollH = $(window).scrollTop();
       var scrollT = $('.spot').offset().top;
       if(clientH+scrollH>=scrollT){
           grade1()
       }
   });

var num = 1;
$('.next').click(function () {
   if(num == 1){
       $('.grade1').fadeOut(2000);
       $('.grade2').fadeIn(2000);
       num = 2;
   }else if(num ==2){
       $('.grade2').fadeOut(2000);
       $('.grade3').fadeIn(2000);
       num = 3;
   }else if(num ==3){
       $('.grade3').fadeOut(2000);
       $('.grade1').fadeIn(2000);
       num = 1;
   }

    if(a=3){
        a=1
    }

});
/*线条波浪*/
    var waves = new SineWaves({
        el: document.getElementById('waves'),

        speed: 3,

        width: function() {
            return $(window).width();
        },

        height: function() {
            return $(window).height();
        },

        ease: 'SineInOut',

        wavesWidth: '100%',

        waves: [
            {
                timeModifier: 4,
                lineWidth: 2,
                amplitude: -50,
                wavelength: 85
            },
            {
                timeModifier: 2,
                lineWidth: 1,
                amplitude: -80,
                wavelength: 80
            }
        ],

        // Resize
        resizeEvent: function() {
            var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
            gradient.addColorStop(0,"rgba(36,185,243,1)");

            var index = -1;
            var length = this.waves.length;
            while(++index < length){
                this.waves[index].strokeStyle = gradient;
            }

            // Clean Up
            index = void 0;
            length = void 0;
            gradient = void 0;
        }
    });
});