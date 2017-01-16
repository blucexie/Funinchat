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

});