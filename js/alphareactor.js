document.addEventListener('DOMContentLoaded',function(){

	const btns = document.getElementsByTagName('button');
	const alphas = document.images;


	console.log(btns);
	console.log(alphas);
	
	for(let i = 0; i < btns.length; i++){
		
		btns[i].addEventListener('click',function(btns){
			
			this.style.color = 'blue';
			console.log(`押されたのは、ボタン${btns.target.className}です。`);
			
								
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
					console.log(i);

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
					
				
				});
			
		},false);


	}
},false);
