$(function(){
  
	var embed = $('#player'); //동영상 코드
  
	$('#open').on('click', function(){ //레이어 열때
		var path = $(this).attr('href');
		$('#cont').append(embed);
		$(path).show();
		$('.dim').show();
	})
  
	$('#close').on("click", function(){
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    });
  
  $('.dim').on('click', function(){
    $(this).hide();
    $('#layer').hide();
    $('#cont').empty();
  })
  
});
$(function(){
  
	var embed = $('#player'); //동영상 코드
  
	$('#open').on('click', function(){ //레이어 열때
		var path = $(this).attr('href');
		$('#cont').append(embed);
		$(path).show();
		$('.dim').show();
	})
  
	$('#closed').on("click", function(){
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    });
  
  $('.dim').on('click', function(){
    $(this).hide();
    $('#layer').hide();
    $('#cont').empty();
  })
  
});
$(function(){
  
	var embed = $('#player'); //동영상 코드
  
	$('#open').on('click', function(){ //레이어 열때
		var path = $(this).attr('href');
		$('#cont').append(embed);
		$(path).show();
		$('.dim').show();
	})
  
	$('#closed1').on("click", function(){
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    });
  
  $('.dim').on('click', function(){
    $(this).hide();
    $('#layer').hide();
    $('#cont').empty();
  })
  
});
$(function(){
  
	var embed = $('#player'); //동영상 코드
  
	$('#open').on('click', function(){ //레이어 열때
		var path = $(this).attr('href');
		$('#cont').append(embed);
		$(path).show();
		$('.dim').show();
	})
  
	$('#closed2').on("click", function(){
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    });
  
  $('.dim').on('click', function(){
    $(this).hide();
    $('#layer').hide();
    $('#cont').empty();
  })
  
});
$(function(){
  
	var embed = $('#player'); //동영상 코드
  
	$('#open').on('click', function(){ //레이어 열때
		var path = $(this).attr('href');
		$('#cont').append(embed);
		$(path).show();
		$('.dim').show();
	})
  
	$('#closed3').on("click", function(){
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    });
  
  $('.dim').on('click', function(){
    $(this).hide();
    $('#layer').hide();
    $('#cont').empty();
  })
  
});
$(function(){
  
	var embed = $('#player'); //동영상 코드
  
	$('#open').on('click', function(){ //레이어 열때
		var path = $(this).attr('href');
		$('#cont').append(embed);
		$(path).show();
		$('.dim').show();
	})
  
	$('#closed4').on("click", function(){
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
    });
  
  $('.dim').on('click', function(){
    $(this).hide();
    $('#layer').hide();
    $('#cont').empty();
  })
  
});
$(function(){
  
	var embed = $('#player'); //동영상 코드
  
	$('#open').on('click', function(){ //레이어 열때
		var path = $(this).attr('href');
		$('#cont').append(embed);
		$(path).show();
		$('.dim').show();
	})
  
	$('#play').on("click", function(){
        $("iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
    });
  
  $('.dim').on('click', function(){
    $(this).hide();
    $('#layer').hide();
    $('#cont').empty();
  })
  
});