

<!DOCTYPE html>
<html lang="en" >

<head>

  <meta charset="UTF-8">
  
<link rel="apple-touch-icon" type="image/png" href="https://cpwebassets.codepen.io/assets/favicon/apple-touch-icon-5ae1a0698dcc2402e9712f7d01ed509a57814f994c660df9f7a952f3060705ee.png" />
<meta name="apple-mobile-web-app-title" content="CodePen">

<link rel="shortcut icon" type="image/x-icon" href="https://cpwebassets.codepen.io/assets/favicon/favicon-aec34940fbc1a6e787974dcd360f2c6b63348d4b1f4e06c77743096d55480f33.ico" />

<link rel="mask-icon" type="" href="https://cpwebassets.codepen.io/assets/favicon/logo-pin-8f3771b1072e3c38bd662872f6b673a722f4b3ca2421637d5596661b4e2132cc.svg" color="#111" />


  <title>CodePen - section show/hide with link on Divi</title>
  
  
  
  
<style>
.secList {
  font-size:20px;
}

.et_pb_text_inner1 {
  background-color: #EAD9FF;
}

.et_pb_text_inner2 {
  background-color: #FFD5EC;
}

.et_pb_text_inner3 {
  background-color: #FFDBC9;
}
</style>

  
  
  
  <script>
  if (document.location.search.match(/type=embed/gi)) {
    window.parent.postMessage("resize", "*");
  }
</script>


</head>

<body translate="no" >

  <!-- List -->
<p>同じリンクを 2 回クリックしてみて</p>
<div class="et_pb_module">
  <a href="#fuu" class='secList'>Section1</a>
</div>

<div class="et_pb_module">
  <a href="#euu" class='secList'>Section2</a> 
</div>

<div class="et_pb_module">
  <a href="#guu" class='secList'>Section3</a> 
</div>

<!-- Sections -->
<div id="fuu" class="section">
  <div class="et_pb_text_inner1">
    <img src="alphaReactor.png">
  </div>  
</div>

<div id="euu" class="section">
  <div class="et_pb_text_inner2">
    <h2>Section2</h2>
    <p>hoge2</p>
  </div>
</div>

<div id="guu" class="section">
  <div class="et_pb_text_inner3">
    <h2>Section3</h2>
    <p>hoge3</p>
  </div>  
</div>

 <div class="main">
    <div id="x" class="alert alert-primary" role="alert">
      x座標 :
    </div>
    <div id="y" class="alert alert-secondary" role="alert">
      y座標 :
    </div>
     <img src="alphaReactor.png" width='48px' id="main">
   
    <script src="https://cpwebassets.codepen.io/assets/common/stopExecutionOnTimeout-1b93190375e9ccc259df3a57c1abc0e64599724ae30d7ea4c6877eb615f89387.js"></script>

  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js'></script>
      <script id="rendered-js" >
$(function () {
  $('.section').hide();

  $('.secList').on('click', function () {
    $('.section').not($($(this).attr('href'))).hide();
    // フェードイン・アウトのアニメーション付で、表示・非表示を交互に実行
    $($(this).attr('href')).fadeToggle(800);

    // show を使うと、表示するだけ （ 同じボタンを何回押しても変わらない ）
    // $($(this).attr('href')).show();
  });
  
  	$(document).click(function(event){
		/*var target = $(event.target);
		target.not(".block").css("color","#ff6300");
		
		if(target.parents("ul").length){
			alert("ulの中の要素です！");
		}
		*/
	  var x = event.pageX;
	  var y = event.pageY;
	  document.getElementById('x').textContent = "x座標 : " + x;
	  document.getElementById('y').textContent = "y座標 : " + y;
	  
	  $('#main').offset({ top: y, left: x });
		
		
	});
	
	
	
});
//# sourceURL=pen.js


$(function(){

});
    </script>

  

  <script src="https://cpwebassets.codepen.io/assets/editor/iframe/iframeRefreshCSS-4793b73c6332f7f14a9b6bba5d5e62748e9d1bd0b5c52d7af6376f3d1c625d7e.js"></script>
</body>

</html>
 
