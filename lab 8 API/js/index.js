window.onload=function()
          {
      let req = new XMLHttpRequest();
      req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
          let articlesJSON=JSON.parse(req.responseText).resource;
          console.log(articlesJSON)
          let articles=document.getElementById("demo");
          for (const iterator of articlesJSON) {
              let articleElement=document.createElement("article");
              articleElement.classList.add("coming");
              articleElement.innerHTML=`
                                          <img src="${iterator.photo_link}"" alt="${iterator.movie_name}"/>
                                        <div>
                                            <span class="left">${iterator.showing}</span><span class="right">5 хоног
                                            үлдлээ...</span>
                                        </div>`
              articles.appendChild(articleElement);
          }
          // let best=JSON.parse(req.responseText).best;
          // articles=document.getElementById("parall");
          // for (const iterator of best) {
          //     let articleElement=document.createElement("article");
          //     articleElement.classList.add("parallax-window");
          //     articleElement.innerHTML=`
          //     <div class="mask" style="background-image: url('${iterator.photo_link}')">
          //       <a href=""><div class="front"></div></a>
          //       <p>${iterator.movie_name}</p><a href="">Дэлгэрэнгүй</a>
          //     </div>`
          //     articles.appendChild(articleElement);
          // }
          let slide = JSON.parse(req.responseText).kino;
          var dot = this.document.getElementById("dots")
          var slideshow = document.getElementById("slide-show")
          var i=0
          for (const iterator of slide) {
              let div = document.createElement("div")
              div.innerHTML = `<img data-u="image" src="${iterator.photo_link}"/>`
              slideshow.appendChild(div)
          }
          $(".fade").mouseenter(function(){
            $(this).children('img').animate({
              opacity: "0.8"
            },100);
          }).mouseleave(function(e){
            $(this).children('img').animate({
              opacity: "1"
            },100)
          });
          jssor_1_slider_init();
        }
      };
    //setInterval(function(){
      //req.open("GET", "https://api.jsonbin.io/b/5dce4ef8ee15a6060aa1cc94/latest", true);
      //req.setRequestHeader("secret-key", "$2b$10$EDTE4unbaZ7OFINaGMpNueIAmldsqpuarOzElwfyLbtQqWC8lOXUW");
      req.open("GET", "http://localhost/api/v2/db/_table/todo?session_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJjNjZkZjYxNTFmZjFhYjAxNDU0YmM0YjlkZmM4ZmY4OCIsImlzcyI6Imh0dHA6Ly9sb2NhbGhvc3QvYXBpL3YyL3N5c3RlbS9hZG1pbi9zZXNzaW9uIiwiaWF0IjoxNTc1ODc4ODk0LCJleHAiOjE1NzU4ODI0OTQsIm5iZiI6MTU3NTg3ODg5NCwianRpIjoiTUlvbDRWUXY5SHM2ZGJldiIsInVzZXJfaWQiOjEsImZvcmV2ZXIiOmZhbHNlfQ.-BSjynqVgAO0Xwvx9JeYiMDms7mTghtScKl6pUIOO6Q");
      req.send();
    //}, 5000);
      }
      window.jssor_1_slider_init = function() {

        var jssor_1_options = {
          $AutoPlay: 1,
          $SlideWidth: 720,
          $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
          },
          $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
          }
        };

        var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

        /*#region responsive code begin*/

        var MAX_WIDTH = 980;

        function ScaleSlider() {
            var containerElement = jssor_1_slider.$Elmt.parentNode;
            var containerWidth = containerElement.clientWidth;

            if (containerWidth) {

                var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

                jssor_1_slider.$ScaleWidth(expectedWidth);
            }
            else {
                window.setTimeout(ScaleSlider, 30);
            }
        }

        ScaleSlider();

        $Jssor$.$AddEvent(window, "load", ScaleSlider);
        $Jssor$.$AddEvent(window, "resize", ScaleSlider);
        $Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
        /*#endregion responsive code end*/
    };