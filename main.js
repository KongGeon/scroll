// 음악재생
let audio = new Audio('sound.mp3');

    /*종료되면 처음부터 다시 재생*/
    audio.addEventListener('ended', function() { 
        this.currentTime = 0;
        this.play();
    }, false);
    

    let fas = document.querySelector('.fas')
    let play = document.querySelector('.fa-play')
    let pause = document.querySelector('.fa-pause');
    
    fas.addEventListener('click', ()=> {
      fas.classList.toggle('fa-play')
      fas.classList.toggle('fa-pause')
      if(fas.classList.contains('fa-pause')){ //플레이 버튼을 눌렀으면
        audio.play();
      } else { //일시정지 버튼을 눌렀으면
        audio.pause();
      }

});




// 휠이벤트

 function wheel(){
   window.onmousewheel = (e) => {
     if(e.wheelDelta > 0){
      //  console.log('up');
       document.querySelector('.nav').classList.remove('blind');
     }
     else {
      //  console.log('down');
       document.querySelector('.nav').classList.add('blind');
       
     }
   }
 }
 wheel();




        // 컨트롤러 정의
        var controller = new ScrollMagic.Controller();
            
        // s0 배경 이미지

        // 이미지 정의
        var images = [];
        

        (function(){
            const frameCount = 99;
            const currentFrame = index => (
            `1/m${index.toString().padStart(4, '0')}.png`
            )
            for (let i = 1; i < frameCount; i++) {
            images.push(currentFrame(i));
            }
        }());
        
        


        // TweenMax는 모든 객체의 속성을 트위닝 할 수 있습니다. 이 객체를 사용하여 배열을 순환합니다. 
        var obj = {curImg: 0};
    
        // 트윈 생성 
        var tween = TweenMax.to(obj, 1,
            {
                curImg: images.length - 1,	// 이미지 수에 curImg 속성 애니메이션 
                roundProps: "curImg",				// 배열 인덱스로 사용할 수 있도록 정수만 
                repeat: 0,									// 0 회 반복
                immediateRender: true,			// 첫 번째 이미지 자동로드 
                ease: Linear.easeNone,			// 모든 이미지에 동일한 시간 표시 
                onUpdate: function () {
                  $(".myimg").attr("src", images[obj.curImg]); // 이미지 소스 설정
                }
            });

            var tween2 = TweenMax.to(".myimg", 1,
                {
                    opacity: 0
                })
            var tween3 = TweenMax.to(".myimg", 1,
                {
                    display: "none"
                })

        // 컨트롤러 초기화 
        var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            duration: 3500, //영상 재생할 스크롤 길이
            triggerHook: 0.8
            })
                        .setTween(tween)
                        // .addIndicators({
                        //     name: "1"
                        // }) // 인디케이터 추가 (플러그인 필요)
                        .addTo(controller);
        var scene = new ScrollMagic.Scene({
            triggerElement: "#trigger1",
            offset: 3300,
            duration: 500, //영상 재생할 스크롤 길이
            triggerHook: 0.8
            })
                        .setTween(tween2)
                        // .addIndicators({
                        //     name: "2"
                        // }) // 인디케이터 추가 (플러그인 필요)
                        .addTo(controller);               
        var scene = new ScrollMagic.Scene({
          triggerElement: "#trigger1",
          offset: 3800,
          duration: 0, //영상 재생할 스크롤 길이
          triggerHook: 0.8
          })
                      .setTween(tween3)
                      // .addIndicators({
                      //     name: "2"
                      // }) // 인디케이터 추가 (플러그인 필요)
                      .addTo(controller);               






        // s0 텍스트

        var text1 = document.getElementsByClassName("text1");
        for (var i=0; i<text1.length; i++) {

        //텍스트 애니메이션 정의    
        var tween1 = TweenMax.to(text1[i], 1, {
                opacity: 1,
                y : -20,
              });//올라오면서 보여준다
        var tween2 = TweenMax.to(text1[i], 1, {
                y : -40, 
              })
              ;//올라오면서 보여준다      
        var tween3 = TweenMax.to(text1[i], 1, {
                opacity: 0,
                y : -60,
                }); //올라가면서 사라진다
                


        var scene1 = new ScrollMagic.Scene({
            triggerElement: text1[i], //각 요소가 트리거가 됨
            offset: 0,
            duration: 150,
            triggerHook: 0.5
          })
        .setTween(tween1)  
        .addTo(controller)
        .setPin('.pin'+i)
        // .addIndicators({name: "(box) " + (i+1) + "-1", colorStart:"#F6B352", colorTrigger:"#F6B352"});
        
        var scene2 = new ScrollMagic.Scene({
            triggerElement: text1[i], //각 요소가 트리거가 됨
            offset: 150,
            duration: 400,
            triggerHook: 0.5
          })
          .setTween(tween2) 
          .addTo(controller)
          .setPin('.pin'+i)
          // .addIndicators({name: "(box) " + (i+1) + "-2", colorStart:"#F6B352", colorTrigger:"#F6B352"});

          var scene3 = new ScrollMagic.Scene({
            triggerElement: text1[i], //각 요소가 트리거가 됨
            offset: 550,
            duration: 150,
            triggerHook: 0.5
          })
          .setTween(tween3)  
          .addTo(controller)
          .setPin('.pin'+i)
          // .addIndicators({name: "(box) " + (i+1) + "-3", colorStart:"#F6B352", colorTrigger:"#F6B352"});
        }




        
        //s2
        
        var images2 = [];
        

        (function(){
            const frameCount = 100;
            const currentFrame = index => (
            `2/b${index.toString().padStart(4, '0')}.png`
            )
            for (let i = 1; i < frameCount; i++) {
            images2.push(currentFrame(i));
            }
        }());
        
        


        // TweenMax는 모든 객체의 속성을 트위닝 할 수 있습니다. 이 객체를 사용하여 배열을 순환합니다. 
        var obj2 = {curImg: 0};
    
        // 트윈 생성 
        var tween = TweenMax.to(".myimg2", 0,
          {
            scale: 0.5,
            ease: Back.easeOut
          });
          var tween2 = TweenMax.to(".myimg2", 1,
          {
            borderRadius: 0,
            scale: 1
          ,ease: Back.easeOut
          });
          var tween3 = TweenMax.to(obj2, 1, //s2 이미지 애니메이션
            {
                curImg: images2.length - 1,	// 이미지 수에 curImg 속성 애니메이션 
                roundProps: "curImg",				// 배열 인덱스로 사용할 수 있도록 정수만 
                repeat: 0,									// 0 회 반복
                immediateRender: true,			// 첫 번째 이미지 자동로드 
                ease: Linear.easeNone,			// 모든 이미지에 동일한 시간 표시 
                onUpdate: function () {
                  $(".myimg2").attr("src", images2[obj2.curImg]); // 이미지 소스 설정
                }
            });
            var tween4 = TweenMax.to(".myimg2", 1,
                {
                    opacity: 0,
                    scale: 0.5
                })
            
        // 컨트롤러 초기화 
        

        var scene = new ScrollMagic.Scene({ //스케일을 줄여서 올라온다
          triggerElement: "#trigger2",
          offset: 0,
          duration: 100,
          triggerHook: 0
        })
      .setPin('.pin222')
      .setTween(tween)  
      .addTo(controller)
      // .addIndicators({name: "2"});



      var scene2 = new ScrollMagic.Scene({ // 다시 원래의 스케일을 되찾는다.
        triggerElement: "#trigger2",
        offset: 100,
        duration: 500,
        triggerHook: 0
      })
    .setPin('.pin222')
    .setTween(tween2)  
    .addTo(controller)
    // .addIndicators({name: "3"});



    var scene3= new ScrollMagic.Scene({ // 영상이 재생된다.
      triggerElement: "#trigger2",
      offset: 600,
      duration: 3500, //영상 재생할 스크롤 길이
      triggerHook: 0
      })
      .setTween(tween3)
      // .addIndicators({
      //     name: "4"
      // }) // 인디케이터 추가 (플러그인 필요)
      .setClassToggle('.myimg2', 'fixed')
      .addTo(controller);
     
      var scene4 = new ScrollMagic.Scene({ // 점점 사라진다.
        triggerElement: "#trigger2",
        offset: 4100,
        duration: 500,
        triggerHook: 0
      })
    .setTween(tween4)  
    .addTo(controller)
    .setClassToggle('.myimg2', 'fixed')
    // .addIndicators({name: "5"});

      

        // s2 텍스트

        var text2 = document.getElementsByClassName("text2");
        for (var i=0; i<text2.length; i++) {

        //텍스트 애니메이션 정의    
        var tween1 = TweenMax.to(text2[i], 1, {
                opacity: 1,
                y : -20,
              });//올라오면서 보여준다
        var tween2 = TweenMax.to(text2[i], 1, {
                y : -30
              })
              ;      
        var tween3 = TweenMax.to(text2[i], 1, {
                opacity: 0,
                y : -60,
                }); //올라가면서 사라진다
                


        var scene1 = new ScrollMagic.Scene({
            triggerElement: text2[i], //각 요소가 트리거가 됨
            offset: 0,
            duration: 150,
            triggerHook: 0.275
          })
        .setTween(tween1)  
        .addTo(controller)
        .setPin('.pin2-'+i)
        // .addIndicators({name: "(box) " + (i+1) + "-1", colorStart:"#F6B352", colorTrigger:"#F6B352"});
        
        var scene2 = new ScrollMagic.Scene({
            triggerElement: text2[i], //각 요소가 트리거가 됨
            offset: 150,
            duration: 300,
            triggerHook: 0.275
          })
          .setTween(tween2) 
          .addTo(controller)
          .setPin('.pin2-'+i)
          // .addIndicators({name: "(box) " + (i+1) + "-2", colorStart:"#F6B352", colorTrigger:"#F6B352"});

          var scene3 = new ScrollMagic.Scene({
            triggerElement: text2[i], //각 요소가 트리거가 됨
            offset: 450,
            duration: 150,
            triggerHook: 0.275
          })
          .setTween(tween3)  
          .addTo(controller)
          .setPin('.pin2-'+i)
          // .addIndicators({name: "(box) " + (i+1) + "-3", colorStart:"#F6B352", colorTrigger:"#F6B352"});
        }

{
  // svg

  function pathPrepare(el) {
    var lineLength = el.getTotalLength();
    el.style.strokeDasharray = lineLength;
    el.style.strokeDashoffset = lineLength;
  }
   
	var word = document.getElementsByClassName('word');
  
	// var $dot = $("path.dot");

	// prepare SVG
  for (let i = 0; i < word.length; i++) {
    const words = word[i];
    pathPrepare(words);
    // pathPrepare($dot);
    
  }
	


	// build tween
	// var tween = new TimelineMax()
  // .add(TweenMax.to(word, 1,
  //   {
  //     opacity:1
  //   }))
	// 	.add(TweenMax.to(word,1, {})) // draw word for 0.9
	// 	// .add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
	// 	.add(TweenMax.to("path", 1, {ease:Linear.easeNone}), 0)			// change color during the whole thing
  //   .add(TweenMax.to(word, 1,
  //     {
  //       fill:1
  //     }))

      var tween = TweenMax.staggerFromTo('.word', 0.4,
        {
          fill:"#fff",
          
        },
        {
          opacity:1,
          strokeDashoffset: 0,
          ease:Linear.easeNone,
          x:20
        },
        
        0.3
    )

	var tween2 = new TimelineMax()
  .add(TweenMax.to(word, 1,
    {
      fill:"#000"
    }))

	// build scene
	var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger3",
     duration: 1500,
      tweenChanges: true,
       triggerHook: 0.3})
					.setTween(tween)
          .setPin('.pin-svg')
					// .addIndicators({name:'svg', colorStart: "#000000",
          // colorEnd: "#000000"}) // add indicators (requires plugin)
					.addTo(controller);


  var scene = new ScrollMagic.Scene({
    triggerElement: "#trigger3",
      offset: 1500,
      duration: 100,
      
        triggerHook: 0.3})
          .setTween(tween2)
          // .addIndicators({name:'svg2', colorStart: "#000000",
          // colorEnd: "#000000"}) // add indicators (requires plugin)
          .addTo(controller);


          
  }
  









      // s3 박스 이미지

        var img3 = document.getElementsByClassName("myimg3");
        var text3 = document.getElementsByClassName("text3");
        
        for (var i=0; i<img3.length; i++) {

        //텍스트 애니메이션 정의    
        var tween1 = TweenMax.to(img3[i], 1, {
                opacity: 1,
                y : 30,
                ease: Back.easeOut
              });//올라오면서 보여준다
        var tween2 = TweenMax.to(text3[i], 1, {
                opacity: 1,
                y : 30,
                ease: Back.easeOut
              });//올라오면서 보여준다
                


        var scene1 = new ScrollMagic.Scene({
            triggerElement: img3[i], //각 요소가 트리거가 됨
            offset: 0,
            duration: 400,
            triggerHook: 0.9
          })
        .setTween(tween1)  
        .addTo(controller)
        .setPin('.pin3-'+i)
        // .addIndicators({name: "(box) " + (i+1) + "-1", colorStart:"#F6B352", colorTrigger:"#F6B352"});
        
        var scene2 = new ScrollMagic.Scene({
          triggerElement: text3[i], //각 요소가 트리거가 됨
          offset: 50,
          duration: 400,
          triggerHook: 0.9
        })
      .setTween(tween2)  
      .addTo(controller)
      .setPin('.pin3-'+i)
      // .addIndicators({name: "(box) " + (i+1) + "-1", colorStart:"#F6B352", colorTrigger:"#F6B352"});
      

        }



        $(function () { // wait for document ready

        
          var horizontalSlide = new TimelineMax()
          // animate panels
          .to("#js-slideContainer", 1,   {x: "-20%"}) 
          .to("#js-slideContainer", 1,   {x: "-40%"})
          .to("#js-slideContainer", 1,   {x: "-60%"})
          // .to("#js-slideContainer", 1,   {x: "-80%"})
        
        
          // create scene to pin and link animation
          new ScrollMagic.Scene({
            triggerElement: "#js-wrapper",
            triggerHook: "onLeave",
            duration: "300%"
          })
            .setPin("#js-wrapper")
            .setTween(horizontalSlide)
            //.addIndicators() // add indicators (requires plugin)
            .addTo(controller);
          
          
          
        });
        