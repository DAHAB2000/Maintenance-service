async function getData() {
    let data = await fetch("https://abdelkader-mohamed.github.io/my-data-/clean-work/clean-work.json");
    data = await data.json();
        data.offers.forEach(card => {
          document.getElementById("offerContent").innerHTML += `
        <div class="col-lg-6">
    <div class="mainCard mainCard--light">
      <div class="row align-items-center">
        <div class="col-md-5 col-lg-12 col-xl-5 mb-4 mb-lg-4 mb-md-0 mb-xl-0 ps-lg-0">
          <div class="position-relative rounded-4 overflow-hidden " >
            <a href="services-detail.html" class="position-relative">
              <img src="${card.firstImg}" class="img-fluid cardImg " alt="">
              <img src="${card.secondImg}" class="img-fluid cardImg cardImgHover" alt="">
            </a>
            <div class="second-bg d-flex justify-content-between position-absolute bottom-0 w-100" >
              <p class="text-white mb-0 p-2" ><i class="bi bi-cash me-2"></i> $${card.salary}</p>
              <p class="text-white mb-0 p-2" > <i class="bi bi-clock-fill me-2"></i> ${card.hours} hrs</p>
            </div>
          </div>
        </div>
        <div class="col-md-7 col-lg-12 col-xl-7">
          <h4><a href="services-detail.html">${card.cardTitle}</a></h4>
          <p>${card.cardContent}</p>
          <div class="mt-4 d-flex align-items-center justify-content-between">
            <ul class="list-stars custom-list gap-1">
              <li><i class="${card.star1}"></i></li>
              <li><i class="${card.star2}"></i></li>
              <li><i class="${card.star3}"></i></li>
              <li><i class="${card.star4}"></i></li>
              <li><i class="${card.star5}"></i></li>
              </ul>
            <a href="services-detail.html" class="btn main-btn main-btn--scroll">
              <span >Learn More</span>
              <div class="marquee" aria-hidden="true">
                <div class="marquee__inner" >
                  <span >Learn More</span>
                  <span >Learn More</span>
                  <span >Learn More</span>
                  <span >Learn More</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div>
        `;
        });
  }
  getData()