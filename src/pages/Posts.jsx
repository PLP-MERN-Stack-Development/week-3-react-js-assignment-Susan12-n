import { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const postsPerPage = 6;

  // Fetch posts from API
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setAllPosts(res.data);
      } catch (err) {
        setError("Failed to fetch posts");
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  // Filter + paginate posts
  useEffect(() => {
    const filtered = allPosts.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    const start = (page - 1) * postsPerPage;
    const end = start + postsPerPage;
    setDisplayedPosts(filtered.slice(start, end));
  }, [search, allPosts, page]);

  const totalPages = Math.ceil(
    allPosts.filter(post =>
      post.title.toLowerCase().includes(search.toLowerCase())
    ).length / postsPerPage
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>

      <input
        type="text"
        value={search}
        onChange={e => {
          setSearch(e.target.value);
          setPage(1);
        }}
        placeholder="Search by title..."
        className="mb-6 w-full p-2 border rounded"
      />

      {loading && <p>Loading posts...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && displayedPosts.length === 0 && (
        <p>No posts found for your search.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {!loading && displayedPosts.map(post => (
          <div key={post.id} className="bg-white shadow-md p-4 rounded">
            <h3 className="font-semibold text-lg">{post.title}</h3>
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-4">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Prev
          </button>
          <span className="px-4 py-2">{page} / {totalPages}</span>
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Posts;
