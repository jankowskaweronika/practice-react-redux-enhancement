import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername, setSearchTerm, fetchRepos } from "./github.actions";

const Github = () => {
  const dispatch = useDispatch();
  const { username, searchTerm, repos, loading, error } = useSelector(
    (state) => state.github
  );

  useEffect(() => {
    if (username) {
      dispatch(fetchRepos(username.toLowerCase()));
    }
  }, [username, dispatch]);

  const filteredRepos = repos.filter((repo) =>
    repo.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Github Repo Search</h2>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="username">Nazwa użytkownika GitHub: </label>
        <input
          id="username"
          value={username}
          onChange={(e) => dispatch(setUsername(e.target.value))}
          placeholder="Nazwa użytkownika"
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="searchTerm">Szukaj w repozytoriach: </label>
        <input
          id="searchTerm"
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
          placeholder="Szukaj w repozytoriach"
        />
      </div>

      {loading && <p>Ładowanie...</p>}
      {error && <p>{error.message}</p>}
      {!loading && !error && username && !repos.length && (
        <p>No repos found for this user.</p>
      )}
      {!loading && !error && searchTerm && !filteredRepos.length && (
        <p>No results found for this search term.</p>
      )}
      <ul>
        {filteredRepos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Github;