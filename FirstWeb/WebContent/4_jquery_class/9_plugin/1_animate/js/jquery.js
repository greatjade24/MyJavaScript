/**
 * 제목을 클릭하면 컨텐트 영역을 열리고 닫히게 한다. 
 */
   // '>'는 자식선택자 선택하는 것이다.
   //   만일 '>'가 없으면 id가 bio인 엘리먼트 중에서 중첩된 모든 div를 선택하지만,
   //   '#bio > div'는 bio 밑의 자식 엘리먼트만 선택한다.
$(function(){
/*
   $('#bio > div').hide();   // 모든 내용을 숨긴다 
   $('#bio > div:first').show(); // 첫번째 내용만 보인다.
   $('#bio h3').click(function() {
      $(this).next().animate({'height':'toggle'}, 'slow');
   });

*/
	$('#bio h3').click(function(){
		$(this).next().animate({'height' : 'toggle'}, 'slow', 'easeOutBounce')
	})
});