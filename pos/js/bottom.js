
window.onresize = function () {
        var  windowHeight= $(window).height();//获取窗口的可见高度,不是整个文档的高度
        var screenHeight = window.screen.availHeight;//获取浏览器的屏幕的可用高度
//        alert(windowHeight+','+window.screen.availHeight);
        var u = navigator.userAgent;

        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {
            if (windowHeight <= screenHeight / 1.3) {
            	
            	$('.scro_bottom').css({'position': 'absoult', 'display': 'none'});
                $('.bottom_flex').css({'position': 'absoult', 'display': 'none'});
            } else {
                $('.scro_bottom').css({'position': 'fixed', 'display': 'flex'});
                $('.bottom_flex').css({'position': 'fixed', 'display': 'flex'});
            }
        }
    }
//$(".form input[type='text']").on('focus', function () {
//	$('.scro_bottom').hide();
//  $('.bottom_flex').hide();
//})
//$(".form  input[type='text']").on('blur', function () {
//  $('.scro_bottom').show();
//  $('.bottom_flex').show();
//})