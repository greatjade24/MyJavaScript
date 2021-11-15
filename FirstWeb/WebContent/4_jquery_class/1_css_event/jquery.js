/*$(function(){
	$('#celebs tbody tr:even').css('backround-color' , '#dddddd');
}); //tbody가 지정되어 있기 때문에 tbody값부터 지정된다.


$(document).ready(function(){
  $('#celebs tbody tr:even').css( {
      'background-color': '#dddddd',
      'color' : '#666666',
      'font-size' : '11pt'
  });
});*/

$(function(){ // tr값 짝수로 색을 칠함
	$('#celebs tr:even').addClass('table_striping');
});

// 테이블 행에 마우스가 올려지면 엘리먼트를 강조
$(function(){
	$('#celebs tr').mouseover(function(){
		$(this).addClass('td_mouseover');
	});
	$('#celebs tr').mouseout(function(){
		$(this).removeClass('td_mouseover');
	});
});


// 버튼 클릭시 엘리먼트 감추고 보이기
/*$(function(){ //감추기
	$('#hideButton').click(function(){
		$('#intro').hide(); //fadeOut - 천천히 숨기기, slideUP('slow') - 천천히 슬라이드로 사라지기
	});
});
$(function(){ //보여주기
	$('#showButton').click(function(){
		$('#intro').show(); //fadeIn - 천천히 나타내기, slideDown('slow') - 천천히 슬라이드로 보여주기
	});
});*/
$(function(){
	$('#toggleButton').click(function(){
		$('#intro').toggle();
	});
});