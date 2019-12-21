       window.onload=function()
          {
      let req = new XMLHttpRequest();

      req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
          let october = JSON.parse(req.responseText).kino1;
          let articles = document.getElementById("movie1");
          for (const iterator of october) {
              let articleElement = document.createElement("article");
              articleElement.classList.add("coming");
              articleElement.innerHTML = `<div class="movie">
            <div class="poster">
              <div class="link-main">
                <div class="link">
                  <a href="#" class="btn btn-block">Трайлер үзэх</a>
                  <a href="#" class="btn btn-block">Дэлгэрэнгүй</a>
                </div>
              </div>
              <span class="age">${iterator.age_rating}</span>
              <img
                src="${iterator.photo_link}"
                alt="poster"
              />
            </div>
            <div class="chart">
              <h3>${iterator.movie_name}</h3>
              <div class="table">
                <div class="table-main">
                  <p class="left">Төрөл:</p>
                  <p class="right">${iterator.genre}</p>
                </div>
                <div class="table-main">
                  <p class="left">Үргэлжлэх хугацаа:</p>
                  <p class="right">${iterator.runtime} мин</p>
                </div>
                <div class="table-main">
                  <p class="left">Насны ангилал:</p>
                  <p class="right">${iterator.age_rating}</p>
                </div>
                <div class="table-main">
                  <p class="left">Нээлт хийх хугацаа:</p>
                  <p class="right">${iterator.showing}</p>
                </div>
                <div class="progress">
                  <p class="progress-value">Нийт санал өгсөн ${iterator.all_reply} хэрэглэгч</p>
                  <progress value="${iterator.positive_reply}" max="100"></progress>
                </div>
                <div class="button-group">
                  <div class="button-left">
                    <button type="button" class="btn-left btn-size">
                      Үзмээр байна
                    </button>
                  </div>
                  <div class="button-right">
                    <button type="button" class="btn-right btn-size">
                      Сонирхолгүй
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
                                          `;
                                          console.log(iterator.runtime);
              articles.appendChild(articleElement);
          }
          let november =JSON.parse(req.responseText).kino2;
          let sections = document.getElementById("movie2");
          for (const iterator of november) {
              let articleElement = document.createElement("article");
              articleElement.classList.add("coming");
              articleElement.innerHTML = `<div class="movie">
            <div class="poster">
              <div class="link-main">
                <div class="link">
                  <a href="#" class="btn btn-block">Трайлер үзэх</a>
                  <a href="#" class="btn btn-block">Дэлгэрэнгүй</a>
                </div>
              </div>
              <span class="age">${iterator.age_rating}</span>
              <img
                src="${iterator.photo_link}"
                alt="poster"
              />
            </div>
            <div class="chart">
              <h3>${iterator.movie_name}</h3>
              <div class="table">
                <div class="table-main">
                  <p class="left">Төрөл:</p>
                  <p class="right">${iterator.genre}</p>
                </div>
                <div class="table-main">
                  <p class="left">Үргэлжлэх хугацаа:</p>
                  <p class="right">${iterator.runtime} мин</p>
                </div>
                <div class="table-main">
                  <p class="left">Насны ангилал:</p>
                  <p class="right">${iterator.age_rating}</p>
                </div>
                <div class="table-main">
                  <p class="left">Нээлт хийх хугацаа:</p>
                  <p class="right">${iterator.showing}</p>
                </div>
                <div class="progress">
                  <p class="progress-value">Нийт санал өгсөн ${iterator.all_reply} хэрэглэгч</p>
                  <progress value="${iterator.positive_reply}" max="100"></progress>
                </div>
                <div class="button-group">
                  <div class="button-left">
                    <button type="button" class="btn-left btn-size">
                      Үзмээр байна
                    </button>
                  </div>
                  <div class="button-right">
                    <button type="button" class="btn-right btn-size">
                      Сонирхолгүй
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
                                          `;
                                          console.log(iterator.runtime);
              sections.appendChild(articleElement);
          }
        }
      };

      req.open("GET", "https://api.jsonbin.io/b/5dd28fe5ad952a6f46ce2489/4", true);
      req.setRequestHeader("secret-key", "$2b$10$Ulnjd5m5tCODQIRQcrOpWOdghNKFPvjspp.OHAlKwX/T7E5YXwl62");
      req.send();

      }