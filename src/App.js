import React, {useEffect, useState} from "react";


import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://rickandmortyapi.com/api/character");


  useEffect(() => {
    const fetchData = async () => {
      fetch(url)
          .then(res => res.json())
          .then(data => setData(data.results))
          .catch(err => console.log(err))
    }
    fetchData()
  }, [url]);

  const handleClick_first = () => {
    setUrl("https://rickandmortyapi.com/api/character/?gender=Male")
  }
  const handleClick_sec = () => {
    setUrl("https://rickandmortyapi.com/api/character/?gender=Female")
  }
  const handleClick_third = () => {
    setUrl("https://rickandmortyapi.com/api/character/?status=Alive")
  }
  const handleClick_fourth = () => {
    setUrl("https://rickandmortyapi.com/api/character/?status=Dead")
  }
  const handleClick_fifth = () => {
    setUrl("https://rickandmortyapi.com/api/character/?gender=Female&status=Dead")
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1 className="myTitle">Characters</h1>
        <div>
          <button onClick={handleClick_first} className="btn">Only Male</button>
          <button onClick={handleClick_sec} className="btn">Only Female</button>
          <button onClick={handleClick_third} className="btn">Only Alive</button>
          <button onClick={handleClick_fourth} className="btn">Only Dead</button>
          <button onClick={handleClick_fifth} className="btn">Only Dead Females</button>
        </div>

        <div className="myList">

          {data.map(el => <div key={el.id} className="myListElement">
            <div className="myListElement_img"><img src={`${el.image}`} alt={`${el.name}`} /></div>
            <div className="myListElement_content">
              <div className="el_name">{el.id}. {el.name}</div>
              <div className="el_status">{el.status}</div>
              <div className="el_species">{el.species}</div>
              <div className="el_type">{el.type}</div>
              <div className="el_gender">{el.gender}</div>
              <div className="el_created">{el.created}</div>
            </div>

          </div>)}
        </div>
      </header>
    </div>
  );
}

export default App;
