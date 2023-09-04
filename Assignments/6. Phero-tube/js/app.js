const loading = document.getElementById('loading');
async function handleCategory() {
   loading.innerHTML = `
  <div class="flex justify-center h-[60vh] items-center text-center w-full">
    <span class=" loading loading-spinner loading-lg"></span>
  </div>
  `;
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );
  const { data } = await response.json();
  // console.log(data);
  const tabContainer = document.getElementById('tab_container');
  data.forEach((category) => {
    // console.log(category);
    const div = document.createElement('div');
    div.innerHTML = `
            <a id="${
              category.category_id
            }" onclick="handleCategoryClick(this, false)" class="tab bg-gray-200 text-[#252525] btn-sm sm:btn-md capitalize m-2 rounded ${
      category.category === 'All' ? 'active' : ''
    }"> ${category.category} </a>
        `;

    tabContainer.appendChild(div);
  });

  showAllData(data[0].category_id);
}

handleCategory();

async function showAllData(id) {
 
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const { data } = await response.json();
  // console.log(data);
  videos_card_container.innerHTML = '';
  data.forEach((dataObj) => {
    const { thumbnail, title, authors, others } = dataObj;
    const [{ profile_name, profile_picture, verified }] = authors;
    const { views, posted_date } = others;
    createAndShowCard(
      thumbnail,
      title,
      profile_name,
      profile_picture,
      verified,
      views,
      posted_date
    );
  });
  loading.innerHTML = ''
}

async function handleCategoryClick(element, isSortedClicked) {
  // active tab style control
  document.querySelector('.active').classList.remove('active');
  element.classList.add('active');
  // remove prev card and inject new card with new Data
  const no_data_container = document.getElementById('no_data_container');
  videos_card_container.innerHTML = '';
  no_data_container.classList.add('hidden');

  loading.innerHTML = `
  <div class="flex justify-center h-[60vh] items-center text-center w-full">
    <span class=" loading loading-spinner loading-lg"></span>
  </div>
  `;
  const id = element.getAttribute('id');
  const response = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${id}`
  );
  const { data } = await response.json();

  if (data.length > 0) {
    if (isSortedClicked) {
      data.sort((a, b) => {
        const viewsStringA = a.others.views;
        const viewsNumA = viewsStringA.slice(0, viewsStringA.length - 1);
        const viewsStringB = b.others.views;
        const viewsNumB = viewsStringB.slice(0, viewsStringB.length - 1);
        return viewsNumB - viewsNumA;
      });
    }
    data.forEach((dataObj) => {
      console.log(dataObj);
      const { thumbnail, title, authors, others } = dataObj;
      const [{ profile_name, profile_picture, verified }] = authors;
      const { views, posted_date } = others;
      createAndShowCard(
        thumbnail,
        title,
        profile_name,
        profile_picture,
        verified,
        views,
        posted_date
      );
    });
    loading.innerHTML = '';
  } else {
    loading.innerHTML = '';
    no_data_container.classList.remove('hidden');
  }
}
