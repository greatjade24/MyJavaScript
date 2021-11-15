/**
 * 
 */
 
 //2초 동안 페이지의 모든 문단(p)의 초기상태에서 20픽셀만큼 패딩을 작용하고 폰트 크기를 30픽셀로 변경한다.
 $('p').animate({
 	padding : '20px',
 	fontSize : '30px'
 }, 2000);
 
 
 //네비게이션 메뉴 위에 마우스를 올리면 옆으로 움직인다
$(function(){ 
	$('#navigation li').hover(function() {
		$(this).animate({ paddingLeft : '+=15px' }, 200 );
	}, function() {
		$(this).animate({ paddingLeft : '-=15px' }, 200 );
		});
	});

//고정 퀵메뉴
   $(window).scroll(function () {
      $('#navigation').css('top', $(document).scrollTop() );
   });