async function loadData(searchText, isShowAll) {
  const response = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchText}`
  );
    const { data } = await response.json();
    
    showData(data, isShowAll);
}
loadData('iphone')
function showData(data, isShowAll) {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = ''
    
    if (!isShowAll) {
        data = data.slice(0, 6);
    }
    
    if (data.length < 6 || isShowAll) {
        document.getElementById('show-all').classList.add('hidden')
    } else {
        document.getElementById('show-all').classList.remove('hidden')
    }
    if (!data.length) {
      document.getElementById('no-data-found').classList.remove('hidden');
      document.getElementById('loading').classList.add('hidden');
      return;
    } else {
      document.getElementById('no-data-found').classList.add('hidden');
    }
    console.log(data);
    data.forEach(phone => {
        const div = document.createElement('div');
        div.className = `card bg-white-100 shadow-xl`;
        div.innerHTML = `
            <figure class="p-10 pt-10 bg-gray-200">
                <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">${phone.phone_name}</h2>
                
                <div class="card-actions">
                    <button onclick="showDetails('${phone.slug}')" class="btn btn-primary btn-sm">Show Details</button>
                </div>
            </div>
        `;
        phoneContainer.appendChild(div)
        document.getElementById('loading').classList.add('hidden')
        phoneContainer.classList.remove('hidden')
    })
}

function searchHandler(isShowAll) {
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('phone-container').classList.add('hidden');
    const searchField = document.getElementById('search-field');
    const text = searchField.value || 'iphone';
    loadData(text, isShowAll);
}

function showAllHandler() {
    searchHandler(true)
}
async function showDetails(id) {
    const res = await fetch(
      `https://openapi.programming-hero.com/api/phone/${id}`
    )
    const { data } = await res.json()
    console.log(data);
    document.getElementById('details-image').setAttribute('src', data.image)
    document.getElementById('details-name').innerText = data.name
    const detailsList = document.getElementById('details-list')
    detailsList.innerHTML = `
        <li><span class="font-bold text-lg">Storage:</span> ${data.mainFeatures.storage}</li>
        <li><span class="font-bold text-lg">Display Size:</span> ${data.mainFeatures.displaySize}</li>
        <li><span class="font-bold text-lg">Chipset:</span> ${data.mainFeatures.chipSet}</li>
        <li><span class="font-bold text-lg">Memory:</span> ${data.mainFeatures.memory}</li>
        <li><span class="font-bold text-lg">Slug:</span> ${id}</li>
        <li><span class="font-bold text-lg">Brand:</span> ${data.brand}</li>
        <li><span class="font-bold text-lg">GPS:</span> ${data.others?.GPS || 'No Data here'}</li>
    `;
    document.getElementById('showDetailsModal').showModal();


}