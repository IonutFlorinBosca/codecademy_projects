import './App.css';
import { useState } from 'react';
import List from './List';

function App() {
  const [currentItem, setCurrentItem] = useState(null);
  const [itemList, setItemList] = useState([]);


  const onChangeHandler = (e) => {
    setCurrentItem(e.target.value);
  };

  const addItemToList = () => {
    setItemList([...itemList, { item: currentItem, key: Date.now() }]);
    setCurrentItem('');
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="Wrapper">
          <div className="Input-wrapper">
            <input value={currentItem} placeholder="Add item" onChange={onChangeHandler} />
            <button onClick={addItemToList}>+</button>
          </div>
          <List itemList={itemList} setItemList={setItemList} />
        </div>
      </header>
    </div>
  );
}

export default App;
