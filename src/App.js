import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RepoCard from './component/RepoCard';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('stars');
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=${sortOption}`);
        setRepos(response?.data?.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchQuery, sortOption]);

  return (
    <div style={{padding:"25px 25px 25px 25px"}}>
      <div style={{display:"flex", justifyContent:"flex-start",gap:"2%"}}>
        <input type="text" placeholder="🔍 Search for repositories" style={{width:"20%",height:"20px",borderRadius:"1.525rem",borderColor:"black",paddingLeft:"10px" }}  onChange={(e) => setSearchQuery(e.target.value)} />

        <select style={{width:"10%",fontSize:"15px",borderRadius:"10px"}} value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="stars">Stars</option>
          <option value="watchers">Watchers</option>
          <option value="score">Score</option>
          <option value="name">Name</option>
          <option value="created">Created</option>
          <option value="updated">Updated</option>
        </select>
      </div>
      <div className="repo-cards">
        {repos.map((repo) => (
          
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default App;
