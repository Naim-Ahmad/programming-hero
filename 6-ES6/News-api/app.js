async function fetchCategory() {
    const response = await fetch(
      'https://openapi.programming-hero.com/api/news/categories'
    );
    const { data } = await response.json()
    const categories = data.news_category;
    const categoryContainer = document.getElementById('category-list');
    categories.slice(0, 4).forEach(category => {
        const li = document.createElement('li')
        li.innerHTML = `
        <a onclick="handleSpecificCategory('${category.category_id}')">${category.category_name}</a>
        `;
        categoryContainer.appendChild(li)
    })
}

fetchCategory()
handleSpecificCategory('01')
async function handleSpecificCategory(category_id){
    const response = await fetch(
      `https://openapi.programming-hero.com/api/news/category/${category_id}`
    );
  const {data} = await response.json()
  const newsContainer = document.getElementById('newsContainer')
  newsContainer.innerHTML = ''
  data.forEach(news => {
    const div = document.createElement('div');
    div.className = `card bg-base-100 shadow-xl`;
    div.innerHTML = `
                    <figure>
                      <img src="${news.image_url}" alt="Shoes" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            ${news.title}
                        </h2>

                        <p class="">Published: ${
                          news.author.published_date.split(' ')[0] ||
                          'No Date Available'
                        }</p>

                        <div class="card-actions justify-start">
                            <div class="badge badge-outline">Views: ${
                              news.total_view || 'No view'
                            }</div>
                            <div class="badge badge-outline">Rating: ${
                              news.rating.number || 'No Rating'
                            }</div>
                            <div class="badge badge-secondary">${
                              news.rating.badge || 'Good'
                            }</div>
                        </div>
                        <button onclick="handleModal('${news._id}')" class="btn btn-secondary btn-sm">Read More</button>
                    </div>
    `;
    newsContainer.appendChild(div);
  })
}

async function handleModal(news_id) {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/${news_id}`
  );
  const { data } = await response.json()
  const detailsObject = data[0]
  const newsDetailsContainer = document.getElementById('news-details');
  console.log(detailsObject);
  newsDetailsContainer.innerHTML = `
               <dialog id="news-details-modal" class="modal">
                  <form method="dialog" class="modal-box w-11/12 max-w-5xl">
                      <h3 class="font-bold text-4xl mb-6">${detailsObject.title}</h3>
                      <figure>
                        <img src="${detailsObject.image_url}"  width="100%" />
                      </figure>
                    <!--author-->
                    <div class="my-6">
                      <div class="flex"> 
                        <figure class="rounded-full	me-2 w-14"> 
                          <img class="rounded-full	" src="${
                            detailsObject.author.img
                          }" />
                        </figure>
                        <div> 
                          <h3> ${detailsObject.author.name}</h3>
                          <p>Published: ${
                            detailsObject.author.published_date.split(' ')[0]
                          }</p>
                        </div>
                      </div>
                    </div>
            
                    <p>${detailsObject.details}</p>
                      <div class="modal-action">
                        <button class="btn">Close</button>
                      </div>
                  </form>
                </dialog>
  `;

  const modal = document.getElementById('news-details-modal');
  modal.showModal()

}