/**
 * 
 */
 $(function(){
 	$('.rollover').each(function(){
 		var a = $('this');
 		var img = a.find('img');
 		var src_off = img.attr('src'); //src의 속성을 찾는다.
 		var src_on = src.off.replace('_off', '_on'); //src.off를 on으로 바꿔준다.
 		
 		a.hover(function(){
 			img.attr('src', 'src_on');
 			}, function(){
 			img.attr('src','src_off');
 		});
 	});
 });