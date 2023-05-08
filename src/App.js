import './App.css';
import React,{useState} from 'react';

function App() {
  const [day, setDay] = useState([
    {id:1, d:'Monday', s:1},
    {id:2, d:'Tuesday', s:0},
    {id:3, d:'Wednesday', s:0},
    {id:4, d:'Thursday', s:0},
    {id:5, d:'Friday', s:0},
    {id:6, d:'Saturday', s:0},
    {id:7, d:'Sunday', s:0}
  ]);

  function shuffle(array) {
    // Create a new array to avoid modifying the original array
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      const j = Math.floor(Math.random() * (i + 1));
      // Swap elements at index i and j
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  }
  

  const handleClick = () => {
    const shuffledDay = shuffle(day);
    setDay(shuffledDay);
  };
  

  const handleDayClick = (clickedDay) => {
    const updatedDay = {...clickedDay, s: clickedDay.s === 0 ? 1 : 0};
    const updatedDayArray = day.map((d) => d.id === clickedDay.id ? updatedDay : d);
    setDay(updatedDayArray);
  }

  return (
    <div className="App">
      <h1 className='title'>What day is it?</h1>
      <div className='daycontainer'>
        {day.map((da) => (
          <div key={da.id} className='weekdaybtn' onClick={() => handleDayClick(da)}>
            {da.s === 0 ? da.id : da.d}
          </div>
        ))}
      </div>
      <button onClick={handleClick}>Randomise</button>
    </div>
  );
}

export default App;
