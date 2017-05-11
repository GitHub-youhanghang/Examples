    $(document).ready(function() {
        var styleCon = $('style').html();
        var bodyCon = $('body').html();
        $('body').append('<textarea id="styleSrc"></textarea>');
        $('body').append('<textarea id="bodySrc"></textarea>');
        $('<button id="srcBtn" type="button" class="btn btn-primary btn-lg">关闭源代码</button>').insertBefore($('body'));  
        $('textarea').css({
            position: 'fixed',
            right: 0,
            width: '50%',
            height: '50%'
        })   
        $('#bodySrc').css({
            top: 0
        });        
        $('#styleSrc').css({
            top: '50%'
        }); 

        $('#bodySrc').val(bodyCon);
        $('#styleSrc').val(styleCon);

        var srcIsOpen=true;
        $('#srcBtn').on('click',function(){
            if (srcIsOpen) {
                $(this).text('打开源代码');

                $('textarea').hide();
                srcIsOpen=false;
            }else{
                $(this).text('关闭源代码');
                 $('textarea').show();
                srcIsOpen=true;            
            }
        })

    });