window.onload=function()
          {
      let req = new XMLHttpRequest();
      req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
          let articlesJSON=JSON.parse(req.responseText).udahgui;
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
          let best=JSON.parse(req.responseText).best;
          articles=document.getElementById("parall");
          for (const iterator of best) {
              let articleElement=document.createElement("article");
              articleElement.classList.add("parallax-window");
              articleElement.innerHTML=`
              <div class="mask" style="background-image: url('${iterator.photo_link}')">
                <a href=""><div class="front"></div></a>
                <p>${iterator.movie_name}</p><a href="">Дэлгэрэнгүй</a>
              </div>`
              articles.appendChild(articleElement);
          }
          let slide = JSON.parse(req.responseText).kino;
          articles=document.getElementById("slides");
          var dot = this.document.getElementById("dots")
          var i=0
          for (const iterator of slide) {
              let articleElement=document.createElement("article");
              articleElement.classList.add("parallax-window");
              articleElement.innerHTML=`
              <div class="mySlides fade">
                <img src="${iterator.photo_link}" style="width:100%">
                <div class="text">${iterator.movie_name}</div>
              </div>`
              articles.appendChild(articleElement);
              let dotNew = this.document.createElement("span")
              dotNew.classList.add("dot")
              dotNew.setAttribute("onclick", "currentSlide("+i+")")
              i++
              dot.appendChild(dotNew)
          }
        }
      };
    //setInterval(function(){
      req.open("GET", "https://api.jsonbin.io/b/5dce4ef8ee15a6060aa1cc94/latest", true);
      req.setRequestHeader("secret-key", "$2b$10$EDTE4unbaZ7OFINaGMpNueIAmldsqpuarOzElwfyLbtQqWC8lOXUW");
      req.send();
    //}, 5000);
      }