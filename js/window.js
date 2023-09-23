$(document).ready( function() {
    pageHeight = $('html, body').css('height');
    let cnh = pageHeight.length;
    let xh = '';
    for (i=0;i<cnh-2;i++) {
        xh+=pageHeight[i];
    }
    pageHeight = parseFloat(xh);

    pageWidth = $('html, body').css('width');
    let cnw = pageWidth.length;
    let xw = '';
    for (i=0;i<cnw-2;i++) {
        xw+=pageWidth[i];
    }
    pageWidth = parseFloat(xw);

    ratio = (pageWidth/pageHeight);
    /*if (ratio < 0) {ratio*-1}
    if (ratio >= 0.6 && ratio < 1) {ratio=1}
    if (ratio >= 1.5 && ratio < 2) {ratio=2}*/
    

    if (pageWidth > parseInt(pageHeight)) {
        $('.window').css('height', (30/100)*pageWidth+'px');
        $('.window').css('width', (30/100)*pageWidth+'px');
        $('.window').css('backgroundSize', pageWidth+'px');
    } else {
        $('.window').css('width',  (100/100)*pageWidth+'px');
        $('.window').css('height', (100/100)*pageWidth+'px');
        $('.window').css('backgroundSize', pageHeight+100+'px');
    }

    var temp = 0;

    /*
    If diff btw 50% of height+height and width > 100 use formulae else use device width


    */
    $('#border').css('display', 'none');
    if (pageWidth <= 540) {
        $('#container').css('height', pageHeight+'px');
        $('.ls').css('display', 'none')
        $('.ss').css('bottom', '90dvh')
        $('.ss').css('width', (90/100)*pageWidth+'px');

        $('html, body, #tyu').scroll( function() {
            indicatorTop = $('#container').offset().top*-100;
            prod = parseFloat(indicatorTop/100);

            $('.window').css('width', prod+((100/100)*pageWidth)+'px');
            $('.window').css('height', prod+((100/100)*pageWidth)+'px');

            if (true){//prod+(80/100)*pageWidth >= pageWidth) {
                let y = (prod/2)*-1+'px';
                //let y = ((pageWidth-(prod+(80/100)*pageWidth))/2)*1+'px';
                document.getElementsByClassName('window')[0].style.transform = 'translateX('+y+')';
            }
            

            if (indicatorTop >= (pageHeight/2)*100 && temp == 0) {
                $('table.ss-ii').animate({
                    opacity: '1'
                }, 2000);
                $('.ss-ii').css('display', 'table');

                $('.window div#text').animate({
                    bottom: '40dvh',
                    opacity: '1'
                }, 2000);

                $('#author').animate({
                    top: '0',
                    opacity: '1'
                }, 2000);
    
                $('.line').animate({
                    width: '70dvw'
                }, 2000);
                temp = 1;
            } if (indicatorTop <= 20000 && temp == 1) {
                //$('.window table').css('opacity', '0');
                //$('.window table').css('display', 'none');

                $('.window div#text').animate({
                    bottom: '0dvh',
                    opacity: '0'
                }, 2000);

                $('#author').animate({
                    top: '-2em',
                    opacity: '0'
                }, 2000);
    
                $('.line').animate({
                    width: '0px'
                }, 2000);
                temp = 0;
            } if (indicatorTop <= (pageHeight/2)*100 && temp == 1) {
                $('table.ss-ii').css('opacity', '0');
                $('table.ss-ii').css('display', 'none');

                document.getElementById('navbar').style.transform = 'translateX(200%)';
                document.getElementById('navbar').style.transition = 'transform 1s';

                document.getElementsByClassName('ss-ii')[0].style.transform = 'translateX(0%)';
                document.getElementsByClassName('ss-ii')[0].style.transition = 'transform 1s';


                $('.fa-bars').css('display', 'inline-block');
                $('#b-close').css('display', 'none');
                //temp = 0;
            }     
        });
    } else {
        $('#container').css('height', pageWidth+'px');
        $('#tyu').css('marginTop', ((80/100)*pageWidth)*-1+'px');
        $('.ls').css('display', 'table');
        $('.ls').css('width', (90/100)*pageWidth);
        $('.ss').css('display', 'none')

        $('html, body, #tyu').scroll( function() {
            indicatorTop = $('#container').offset().top*-100;
            prod = parseFloat(indicatorTop/100);
            
            if (pageWidth > parseFloat(pageHeight)) {
                $('.window').animate({
                    width: prod+(30/100)*pageWidth+'px',
                    height: prod+(30/100)*pageWidth+'px'
                }, 0);

                if (prod+(30/100)*pageWidth >= pageWidth) {
                    let y = (((prod+(30/100)*pageWidth) - pageWidth)/2)*-1+'px';
                    document.getElementsByClassName('window')[0].style.transform = 'translateX('+y+')';
                }
            } else {
                $('.window').css('width', prod+pageWidth+'px');
                let y = (prod/2)*-1+'px';
                document.getElementsByClassName('window')[0].style.transform = 'translateX('+y+')';
                $('.window').css('height', prod+pageWidth+'px');
            }

    
            if (prod+(30/100)*pageWidth >= pageWidth && temp == 0) {
                $('.window').animate({
                    width: '100%',
                    height: '200%',
                }, 0);
                
                $('table.ls-ii').animate({
                    opacity: '1'
                }, 2000);
                $('.ls-ii').css('display', 'table');


                $('.window div#text').animate({
                    bottom: '40dvh',
                    opacity: '1'
                }, 2000);

                $('#author').animate({
                    top: '0',
                    opacity: '1'
                }, 2000);
    
                $('.line').animate({
                    width: '70dvw'
                }, 2000);
                temp = 1;
            } if (prod+(30/100)*pageWidth < pageWidth/1.1 && temp == 1) {
                $('table.ls-ii').css('opacity', '0');
                $('table.ls-ii').css('display', 'none');

                $('.window div#text').animate({
                    bottom: '0dvh',
                    opacity: '0'
                }, 2000);
                
                $('#author').animate({
                    top: '-2em',
                    opacity: '0'
                }, 0);
    
                $('.line').animate({
                    width: '0px'
                }, 0);
                temp = 0;
            }
        });
    }

    var txp = 0;
    primer('machina', false)
    $('html, body').scroll( function() {
        if (parseFloat($('#machina').offset().top) <= 412 && parseFloat($('#machina').offset().top) > -199 && txp == 0) {
            slider('machina')
            txp = 1;
        } if (parseFloat($('#machina').offset().top) <= -200 && txp == 1) {
            sliderReset('machina')
            txp = 0;
        } if (parseFloat($('#machina').offset().top) > 412 && txp == 1) {
            sliderReset('machina');
            txp = 0;
        }
    });

    $('.fa-bars').click(function() {
        document.getElementById('navbar').style.transform = 'translateX(100%)';
        document.getElementById('navbar').style.transition = 'transform 1s';

        document.getElementsByClassName('ss-ii')[0].style.transform = 'translateX(-55%)';
        document.getElementsByClassName('ss-ii')[0].style.transition = 'transform 1s';

        $('.fa-bars').css('display', 'none');
        $('#b-close').css('display', 'table-cell');

    });

    $('.fa-times').click(function() {
        document.getElementById('navbar').style.transform = 'translateX(200%)';
        document.getElementById('navbar').style.transition = 'transform 1s';

        document.getElementsByClassName('ss-ii')[0].style.transform = 'translateX(0%)';
        document.getElementsByClassName('ss-ii')[0].style.transition = 'transform 1s';

        
        $('.fa-bars').css('display', 'inline-block');
        $('#b-close').css('display', 'none');
    });

    $('.fa-plus').click(function() {
        cloakTop = $('#cloak').css('top');
        let cnct = cloakTop.length;
        let xct = '';
        for (i=0;i<cnct-2;i++) {
            xct+=cloakTop[i];
        }
        cloakTop = parseFloat(xct);
        if (cloakTop <= pageHeight*(10/100) ) {
            document.getElementsByClassName('fa-plus')[0].style.transform = 'rotateZ(45deg)';
            document.getElementsByClassName('fa-plus')[0].style.transition = 'all .5s';

            if (true) {
            $('#cloak').animate({
                top: '35%'
            }, 500);
            } else {

            }
        } else {
            document.getElementsByClassName('fa-plus')[0].style.transform = 'rotateZ(0deg)';
            document.getElementsByClassName('fa-plus')[0].style.transition = 'all .5s';

            $('#cloak').animate({
                top: '10%'
            }, 500);
        }
    });
});

function primer(parent, containDiv) {
    var ui = '<table class="ed5a4" id="gh" style="height: 25px;"><tr><td class="a"></td><td class="b"></td></tr></table>'
    var xr = '<table class="ed5a4"><tr><td class="a"></td><td class="b"></td></tr></table>'
    var dv = '<div style="position: absolute; width: 100%; height: fit-content; left; 0; right: 0; top: 50%;">';
    var xu = '';
    for (i=0;i<5;i++) {
        xu+=xr;
    }
    if (containDiv) {
        document.getElementById(parent).innerHTML = xu+ui+dv+document.getElementById(parent).innerHTML+'</div>';
    } else {
        document.getElementById(parent).innerHTML = xu+ui+document.getElementById(parent).innerHTML;
    }
    $('.ed5a4').css('position', 'relative')
    $('.ed5a4').css('zIndex', '1')
    $('.ed5a4').css('width', '100%')
    $('.ed5a4').css('height', '20%')
    $('.ed5a4#gh').css('height', '25px')
    $('.ed5a4').css('border', '0')
    $('.ed5a4, .ed5a4 td').css('margin', '0')
    $('.ed5a4').css('marginBottom', '-5px')
    $('.ed5a4, .ed5a4 td').css('padding', '0')

    $('.ed5a4 .a').css('backgroundColor', '#c6ac85')
    $('.ed5a4 .a').css('width', '100%')
    $('.ed5a4 .a').css('height', '100%')

    $('.ed5a4 .b').css('backgroundColor', 'transparent')
    $('.ed5a4 .b').css('width', '0%')
}

function slider(parent) {
    var i = 0;
    var x = setInterval(function() {
        document.getElementsByClassName('a')[i].style.width = '0px';
        document.getElementsByClassName('a')[i].style.transition = 'all 2s';
        document.getElementsByClassName('b')[i].style.width = '100%';
        document.getElementsByClassName('b')[i].style.transition = 'all 2s';
        i++;
        if (i>=6) {
            clearInterval(x);
        }
    }, 250)
    $('#'+parent+' h2').delay(1250).animate({
        fontSize: '24px',
        opacity: '1'
    }, 2000);
}

function sliderReset(parent) {
    var i = 0;
    var x = setInterval(function() {
        document.getElementsByClassName('a')[i].style.width = '100%';
        document.getElementsByClassName('a')[i].style.transition = 'all 2s';
        document.getElementsByClassName('b')[i].style.width = '0%';
        document.getElementsByClassName('b')[i].style.transition = 'all 2s';
        i++;
        if (i>=6) {
            clearInterval(x);
        }
    }, 250)
    $('#'+parent+' h2').animate({
        fontSize: '18px',
        opacity: '0'
    }, 0);
}