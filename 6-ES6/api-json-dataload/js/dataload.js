function loadData(url) {
    fetch(url)
      .then((response) => response.json())
      .then((data) => showData(data));
}

function showData(data) {
    const postContainer = document.getElementById('post-container');
    
    const result = data.map(obj => {
        if (obj.name) {
            const data = setData(obj.name, obj.email)
            return data
        } else if (obj.title) {
            const data = setData(obj.title, obj.body);
            return data;
        }
    })
    while (postContainer.firstChild) {
        postContainer.removeChild(postContainer.lastChild)
    }
    result.forEach(v=>postContainer.appendChild(v))
}

function setData(param1, param2) {
    const div = document.createElement('div');
    div.innerHTML = `
            <h1>${param1}</h1>
            <p>${param2}</p>
        `;
    return div;
}