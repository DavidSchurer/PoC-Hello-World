import React, {useState} from 'react';
import './App.css';
import canadaPic from './canada.png';

function App() {
  const [items, setItems] = useState([
    'Watching Movies/Playing Video Games',
    'Artificial Intelligence',
    'Going to the Gym',
    'Learning New Tech Skills',
  ]);

  const [ascending, setAscending] = useState(true);

  const reorderList = () => {
    let reorderedItems;

    if (ascending == true) {
      // If the list is already in ascending order, reorder the list in descending order
      reorderedItems = [...items].sort().reverse(); 
      // If the list is in descending order, reorder the list in ascending order
    } else if (ascending == false) {
      reorderedItems = [...items].sort();
    }
    
    setItems(reorderedItems);
    setAscending(!ascending);
  }

  return (
    <div className="App">
    <div className="WelcomeMessage">
      <h1><strong>Welcome to David Schurer's CSS 480 Website!</strong></h1>
      </div>
    <br/>
    <br/>
    <div className="ShortNarrative">
      <p>My name is David Schurer and I am a fourth year student at UW Bothell studying Computer Science and Software Engineering.<br/>
         One interesting fact about me is that I grew up and lived in Canada until 2014, which was when I moved to Washington.
      </p>
    </div>
    <br/>
    <br/>
    <div className="Picture">
      <img src={canadaPic} alt="Random Canada Pic" style={{ width: '400px', height: '200px'}}></img>
    </div>
    <br/>
    <br/>
      <div className="List">
      <p><strong>List of things that interest me:</strong></p>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={reorderList}>Re-order List</button>
      </div>

    </div>
  );
}

export default App;
