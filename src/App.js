import { useState, useEffect } from "react";
import axios from "./axios_instance"
import Header from "./components/Header";
import Search from "./components/Search";
import CharacterList from "./components/CharacterList";

function App() {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect (() => {
    const getList = async () => {
      const response = await axios.get(`/characters?name=${query}`)
      setList(response.data)
      setIsLoading(false)
    }
    getList()
  }, [query])
  
const handleQuery = (item) => {
  setQuery(item)
}
console.log(list);
  return (
    <div className="App">
      <Header />
      <Search query={query} handleQuery={handleQuery}/>
      <CharacterList list={list} isLoading={isLoading}/>
    </div>
  );
}

export default App;
