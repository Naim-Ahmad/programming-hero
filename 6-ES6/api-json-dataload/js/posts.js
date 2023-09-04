function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
    .then(data=> showPosts(data))
}
function showPosts(data) {
    console.log(data);
    const ul = document.getElementById('posts')
    for (const post of data) {
        const li = document.createElement('li')
        li.className = "list-group-item"
        li.innerHTML = `
        <h5> post No: ${post.id}</h5>
        <h2> post title: ${post.title}</h2>
        <h4> post description: ${post.body}</h4>
        `
        ul.appendChild(li)
    }
}