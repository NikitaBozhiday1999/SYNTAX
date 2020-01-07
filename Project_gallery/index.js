function buildGallery(image) {
  console.log(image);
  let bodyEl = document.querySelector(".row");
  for(let i = 0; i < image.length; i++) {
      let rand = Math.round(200 + Math.random() * 50);
      image[i].height = rand;
      image[i].width = rand;
      rand = Math.round(1 + Math.random() * 1000);
      image[i].id = rand;
      image[i].download_url = `https://picsum.photos/id/${image[i].id}/${image[i].height}/${image[i].width}`;
      let cardImg = `<div class="col s1 m2 l3">
                      <img class="materialboxed" src="${image[i].download_url}">
                  </div>`;

      bodyEl.insertAdjacentHTML('beforeend', cardImg);
  }
}

async function readImage () {
    try {
        let img = await fetch(`https://picsum.photos/v2/list?page=2&limit=10`);
        let images = await img.json();
        console.log(images);
         buildGallery(images);
    }
    catch {
        alert("So sorry, it's error...")
    }
}

readImage();

let vm = new Vue({
    el: '#app',
    data: {
        isLoading: true
    },
    methods: {
        hideLoader() {
            setTimeout(() => this.isLoading = false, 3000);
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.materialboxed');
    let instances = M.Materialbox.init(elems, options);
  });



M.AutoInit();