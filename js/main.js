jQuery(document).ready(function($) {
    var init;
    var ls_init;
    var a = 288.4;
    var b = 123.6;
    var kraTally = 0;
    var tally = 0;
    var feedbackCompanies = ['fendi', 'mercedes', 'santafarer'];

    var falseHeight = $('#flex1')[0].scrollHeight + 70/100*($('html, body').width()) + ($('#flex2')[0].scrollHeight - $('#flex2').height());
    $('#falseScroll').css('height', falseHeight+'px');
    //$('#hero').css('top', parseInt((($('body').height() - $('#hero').height())-$('#hero').position().top))+'px')

    $('#container2').css('display', 'block');
    $('#ec2 h2').css('paddingTop', ($('#ec2').height() - parseFloat($('#ec2 h2').height()))/2+'px');

    $('#ec1').css('top', ($('#ec').width() - $('#ec2').width())/2+'px')

    $('#psBox').css('top', ($('#ps').height() - $('#psBox').height())/2 +'px');//- 
    /*Testimony Initializations*/

    $('#feedbackContainer').css('width', parseInt(80/100*($('html, body').width()))+'px');
    $('#feedbackContainer').css('height', parseInt($('#fendi').height()+80)+'px');
    $('#fbc1').css('height', parseInt($('#fendi').height()+50)+'px');
    $('#fbc2').css('height', parseInt($('#fendi').height()+50)+'px');

    $('#fbc1').css('width', parseInt(80/100*($('html, body').width())-30)+'px')
    $('#fbc2').css('width', parseInt(80/100*($('html, body').width())-30)+'px')
    
    /*If width <= 375
    //$('#fbc1').css('height', parseInt($('#fbcCheck').height()+40)+'px');
    //$('#fbc2').css('height', parseInt($('#fbcCheck').height()+40)+'px');
    fbccheck, position: absolute, bottom: 0;
    */   
    /*.........*/
    
    $('#cmBox').css('top', parseFloat(($('#ctaMain').height() - $('#cmBox').height())/2)+'px');
    $('#container2').css('display', 'none');

    /*setInterval(function() {
        $('#watch').animate({
            top: '70px'
        }, 1000);
        $('#watch').animate({
            top: '79.254px'
        },1000);
    }, 2000);*/

    $('#kraTally').click(function() {
        if (kraTally == 0) {
            document.getElementById("kra2").style.transform = "translateX(0%)";
            document.getElementById("kra2").style.transition = "all .5s";
            kraTally = 1;
        } else {
            document.getElementById("kra2").style.transform = "translateX(100%)";
            document.getElementById("kra2").style.transition = "all .5s";
            kraTally = 0;
        }
    });

    $('#feedbackTally').click(function() {
        $('#fbc2').animate({
            height: '0px'
        }, '500');
        $('#tly'+tally).animate({width: '8px'}, '500');

        $('#'+feedbackCompanies[tally]).animate({opacity: '0'}, '500');
        $('#'+feedbackCompanies[tally]).delay(500).css('display', 'none')
        if (tally < 2) {
            tally+=1;
        } else {
            tally = 0;
        }

        $('#tly'+tally).delay(500).animate({width: '24px'}, '500');

        $('#'+feedbackCompanies[tally]).animate({opacity: '1'}, '500');
        $('#'+feedbackCompanies[tally]).delay(500).css('display', 'block')

        //$('#fbc1').css('height', parseInt($('#mercedes').height()+50)+'px');
        $('#fbc2').animate({
            height: '305px'//parseInt($('#mercedes').height()+50)+'px'
        }, '500');
    })

    $('#menu').click(function() {
    })

    $('html, body').scroll(function() {
        console.log($('#whyUs').position().top, 70/100*($('#whyUs').height()))
        var ls = $('#html, body').scrollTop();
        if (parseInt($('#container1').position().top) <= 0 && $('#container2').css('display') == 'none') {
            $('html, body').css('overflow-y', 'hidden');
            $('#falseScreen').css('display', 'block');
            $('#kra2').css('display', 'none');
        } if ($('#container2').css('display') == 'block' && parseInt($('#container1').position().top) >= 0) {
            $('#container2').css('display', 'none');
            $('#container1').get(0).scrollIntoView();
            //$('html, body').css('overflow-y', 'hidden');
            $('#falseScreen').css('display', 'block');
            $('#kra2').css('display', 'none');
        }

        if ($('#gallery').position().top < 100/100*($('#gallery').height()) && $('#gallery').css('opacity') == 0 && $('#container2').css('display') == 'block') {
            $('#gallery').animate({
                opacity: '1',
                top: '0',
            }, 1000);
        }

        if ($('#faq').position().top < 180/100*($('#faq').height()) && $('#faq').css('opacity') == 0 && $('#container2').css('display') == 'block') {
            $('#faq').animate({
                opacity: '1',
                top: '0',
            }, 1000);
        }

        if ($('#whyUs').position().top < 50/100*($('#whyUs').height()) && $('#tai').css('opacity') == 0 && $('#container2').css('display') == 'block') {
            $('.whyUsContainer, #wcuHeader').animate({
                opacity: '1',
                top: '0',
            }, 1000);
        }
        //console.log($('#faq').position().top, $('#gallery').height())
        //If Container1 in view and downscroll init, html, body: overflowY => hidden


        
    });

    $('#falseScreen').scroll(function() {
        $('#gallery').css({'top': '25dvh', 'opacity': '0'})
        $('#faq').css({'top': '25dvh', 'opacity': '0'})
        //console.log($('#falseScroll').position().top)
        let diff = $('#flex1')[0].scrollHeight - $('html, body').height();
        if (diff >= $('#falseScroll').position().top*-1) {
            $('#flex1').scrollTop($('#falseScroll').position().top*-1);
            init = $('#flex1').scrollTop();
            if (init < ls_init) {
                $('#container1').css('transform', 'translateX(0px)')
            }
        }
        
        if (diff <= $('#falseScroll').position().top*-1) {
            var flexGrow = ($('#falseScroll').position().top*-1) - init;
            console.log($('#falseScroll').height() - $('html, body').height(), parseInt(1+$('#falseScroll').position().top*-1));
            if (flexGrow <= 70/100*($('html, body').width())) {
                $('#container1').css('transform', 'translateX('+flexGrow*-1+'px)')
                ls_init = $('#flex1').scrollTop();
                f2_init = $('#falseScroll').position().top;
            } else {
                $('#container1').css('transform', 'translateX(-'+70/100*($('html, body').width())+'px)');
                $('#kra2').css('display', 'none');
                $('#container2').css('display', 'block');

                if ($('#flex2')[0].scrollHeight > $('#flex2').height()) {
                    $('#flex2').scrollTop(f2_init - $('#falseScroll').position().top);
                }
                if ($('#falseScroll').height() - $('html, body').height() <= parseInt(1+$('#falseScroll').position().top*-1) ) {
                    $('#falseScreen').css('display', 'none');
                    $('html, body').css('overflow-y', 'auto');
                    //$('#kra2').css('display', 'block');
                }
            }
        }

        if (parseInt($('#flex1').scrollTop()) <= 0) {
            $('html, body').css('overflow-y', 'auto');
            $('#kra2').css('display', 'block');
            $('#falseScreen').css('display', 'none');
            $('#flex1').scrollTop(0)
        }

        //console.log($('#falseScroll').position().top, falseHeight)
    });

    $('.morefaq').click(function() {
        let tema = $(this).attr('class').split(' ')[2];
        let temq = $(this).attr('class').split(' ')[3];
        console.log('red', temq)

        if ($('div.'+tema).height() <= 0) {
            $('div.'+tema).animate({
                height: $('div.'+tema)[0].scrollHeight+'px',
            }, "fast")
            $('#'+temq+' span').text('remove')
            document.getElementById(tema).style.visibility = 'visible';
            document.getElementById(temq).style.borderRadius = '4px 4px 0px 0px';
            document.getElementById(temq).style.backgroundColor = '#264653';
            document.getElementById(temq).style.color = '#fff';
            document.getElementById(temq).style.transition = 'all .5s';
        } else {
            $('div.'+tema).animate({
                height: '0px',
            }, "fast")
            $('#'+temq+' span').text('add')
            document.getElementById(tema).style.visibility = 'hidden';
            document.getElementById(temq).style.borderRadius = '4px';
            document.getElementById(temq).style.backgroundColor = '#fff';
            document.getElementById(temq).style.color = '#000';
            document.getElementById(temq).style.transition = 'all .5s';
        }
        
    })


    /*Responsive JS*/
    if ($('html, body').width() < 512) {
        $('#companyName').css('top', 120/100*($('#watch').position().top) - $('#companyName').position().top+$('#companyName').height() + 'px');
        $('#watch').css('top', ($('html, body').height() - $('#watch').height())/2 - $('#watch').position().top + 'px');
        //$('#kraFooter').css('top', (($('html, body').height() - ($('#watch').position().top + $('#watch').height())) - $('#kraFooter').height())/2+'px');
    } else {
        //alert(';;')
        $('#kraFooter').css('top', (($('html, body').height() - ($('#watch').position().top + $('#watch').height()*.8)) - $('#kraFooter').height())/2+'px');
        $('#watch').css('top', ($('html, body').height() - $('#watch').height()*.8)/2 - $('#watch').position().top + 'px')
    }
});