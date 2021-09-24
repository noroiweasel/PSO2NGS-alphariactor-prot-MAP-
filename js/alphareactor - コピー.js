document.addEventListener('DOMContentLoaded',function(){

	/*var btns = document.querySelectorAll('.prot-btn');*/
	const btns = document.getElementsByTagName('button');
	/*var alphas = [...document.querySelectorAll('.alpha')];*/
	const alphas = document.images;


	console.log(btns);
	console.log(alphas);
	
	for(let i = 0; i < btns.length; i++){
		
		btns[i].addEventListener('click',function(btns){
			
			this.style.color = 'blue';
			/*console.log(i + ': ' + $(this).text());*/
			console.log(`押されたのは、ボタン${btns.target.className}です。`);
			
			
			
			/*$(".alpha").each(function(i) {*/						
			//赤のBOX内のクリック位置の座標を取得
			$(".map").click(function(e) {
			
			/*$(".map").text("offset : X" + e.offsetX + " : Y" + e.offsetY);
			$(".map").images(src="images/image0.png");
			*/		
			var x = e.pageX;
			var y = e.pageY;
						
			/*
			document.getElementById('x').textContent = "x座標 : " + x;
			document.getElementById('y').textContent = "y座標 : " + y;
			*/

					//リアクターの設置
					/*var alphas = document.querySelectorAll('.alpha');
					console.log($(this).text());*/
										
					
					console.log(i);
					/*let GetChild_Class = document.querySelector('#alpha'+1).querySelectorAll('.alpha');
					GetChild_Class.forEach(function (Class_Element,j) {
					Class_Element.addEventListener('click', function() {

						console.log(GetChild_Class,j);
					});
					});*/
					/*console.log(`押されたのは、ボタン${alphas.target.className}です。`);*/
					/*$(alphas.target.id).offset({ top: y, left: x});*/
					/*console.log(alphas.target.id);*/
					switch(i){
						case 0:
							var alphas = document.getElementById('alpha1');
							console.log(alphas.src);
							$(alphas).offset({ top: y, left: x});
							console.log(x,y);
							i=null;
							return false;
						
						case 1:
							var alphas = document.getElementById('alpha2');
							console.log(alphas.src);
							$(alphas).offset({ top: y, left: x});
							i=null;
							return false;

						case 2:
							var alphas = document.getElementById('alpha3');
							console.log(alphas.src);
							$(alphas).offset({ top: y, left: x});
							i=null;
							return false;

						case 3:
							var alphas = document.getElementById('alpha4');
							console.log(alphas.src);
							$(alphas).offset({ top: y, left: x});
							i=null;
							return false;

						case 4:
							var alphas = document.getElementById('alpha5');
							console.log(alphas.src);
							$(alphas).offset({ top: y, left: x});
							i=null;
							return false;

						case 5:
							var alphas = document.getElementById('alpha6');
							console.log(alphas.src);
							$(alphas).offset({ top: y, left: x});
							i=null;
							return false;

						case 6:
							var alphas = document.getElementById('alpha7');
							console.log(alphas.src);
							$(alphas).offset({ top: y, left: x});
							i=null;
							return false;
							
						case 7:
							var alphas = document.getElementById('alpha8');
							console.log(alphas.src);
							$(alphas).offset({ top: y, left: x});
							i=null;
							return false;

						case 8:
							var alphas = document.getElementById('alpha9');
							console.log(alphas.src);
							$(alphas).offset({ top: y, left: x});
							i=null;
							return false;

						case 9:
							var alphas = document.getElementById('alpha10');
							console.log(alphas.src);
							$(alphas).offset({ top: y, left: x});
							i=null;
							return false;
							
						case 10:
							var alphas = document.getElementById('alpha11');
							console.log(alphas.src);
							$(alphas).offset({ top: y, left: x});
							i=null;
							return false;

						case 11:
							var alphas = document.getElementById('alpha12');
							console.log(alphas.src);
							$(alphas).offset({ top: y, left: x});
							i=null;
							return false;

						case 12:
							var alphas = document.getElementById('alpha13');
							console.log(alphas.src);
							$(alphas).offset({ top: y, left: x});
							i=null;
							return false;
							
						case 13:
							var alphas = document.getElementById('alpha14');
							console.log(alphas.src);
							$(alphas).offset({ top: y, left: x});
							i=null;
							return false;
					}
					
					
					/*var alphas = document.querySelectorAll('.alpha');
					for(let i in alphas){
						if (alphas.hasOwnProperty(i)) {
							console.log(alphas[i]);//配列の中身、HTML要素
							console.log(alphas[i].id);//要素に付与されているid
							console.log(alphas[i].className);//要素に付与されているclass名
							$('#'+alphas[i].id).offset({ top: y, left: x});
						}
					}
					
/*
					Array.from(document.querySelectorAll('.alpha'), item => {
						console.log(item.className,i);
						
						$('#'+item.className + (i-1)).offset({ top: y, left: x});
						
						
					});
*/					
							
					/*for(var j = 0; j < alphas.length; j++){
						/*alphas[j].addEventListener('click',function(){*/
					/*	$(".zahyou1").click(function(e) {	
							alert('ok2')
							console.log(j + ': ' + $(this).text());

						console.log(alphas[j].DOMTokenList);
						/*$(alphas[j]).text(offset({ top: e.offsetY, left: e.offsetX}));*/
					/*	$(alphas[j].className).offset({ top: y, left: x});
				
					});
				}*/	
				
				});
			

				$('.secList').on('click', function () {
					$('.section').not($($(this).attr('href'))).hide();
					// フェードイン・アウトのアニメーション付で、表示・非表示を交互に実行
					$($(this).attr('href')).fadeToggle(800);
				
					// show を使うと、表示するだけ （ 同じボタンを何回押しても変わらない ）
					// $($(this).attr('href')).show();
				  });

		},false);


	}
},false);
