export default async function PostsPage() {
  const res = await fetch("http://localhost:5000/posts", {
    next: {
      revalidate: 5,
    },
  });
  const data = await res.json();

  console.log(data);

  return (
    <div>
      <h1 className="text-3xl font-bold">Total Post {data.length}</h1>
      <div>
        {data.map((d) => (
          <div key={d.id} className="card w-96 bg-gray-500 text-black">
            <div className="card-body">
              <h2 className="card-title">{d.title}</h2>
              <p>{d.description}</p>
              <p>{d.like_count}</p>
              <div className="card-actions justify-end">
                <button className="btn">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
