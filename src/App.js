import React, { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'

import './App.css';

function App() {
  const [monsters, setMonsters] = useState([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      .then(userList => setMonsters(userList))
      .catch(err => console.log(err))
  }, [])

  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder='search monsters' searchText={search} updateSearch={(e) => setSearch(e.target.value)} />
      <CardList monsters={filteredMonsters} />
    </div>
  );
}

export default App;
