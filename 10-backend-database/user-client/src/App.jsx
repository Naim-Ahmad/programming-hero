import './App.css';

function App() {

  const handleSubmit = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email }

    form.reset()
    
    fetch('http://localhost:5000/users', {
      method: 'post', 
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data=> console.log(data))
  }

  return (
    <>
      <h1>User Management System</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </>
  )
}

export default App
