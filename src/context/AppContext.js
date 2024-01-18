
import { createContext, useState } from "react";
import { baseUrl } from '../baseUrl';

export const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]); 
  const [totalPages, setTotalPages] = useState(null);

  const value1 = {
    loading,setLoading,
    posts,setPosts,
    page,setPage,
    totalPages,setTotalPages,
    fetchBlogsPosts,
    handlePageChange
  };

  async function fetchBlogsPosts(page) {
    setLoading(true);
    let url = `${baseUrl}?page=${page}`;

    try {
      const result = await fetch(url);
      const output = await result.json();
    
      setPage(output.page);
      setPosts(output.posts);
      setTotalPages(output.totalPages);
    } catch (error) {
      console.log("Error in fetching the data ");
      setPage(1);
      setPosts([]);  
      setTotalPages(null);
    }
    setLoading(false);
  }

  function handlePageChange(page) {
    setPage(page);
    fetchBlogsPosts(page);
  }

  return (
    <AppContext.Provider value={value1}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
