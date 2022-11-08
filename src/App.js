import React from 'react';
import './App.css';
import IdCard from './components/IdCard/IdCard.jsx';
const IdCards = [
  {
    lastName: 'Doe',
    firstName: 'John',
    gender: 'male',
    height: 178,
    birth: new Date('1992-07-14').toDateString(),
    picture: 'https://randomuser.me/api/portraits/men/55.jpg',
  },
  {
    lastName: 'Delores',
    firstName: 'Obrien',
    gender: 'female',
    height: 172,
    birth: new Date('1988-05-11').toDateString(),
    picture: 'https://randomuser.me/api/portraits/women/55.jpg',
  },
];
function App() {
  
 
  return (
    
    <div className="App">
        {/* ITERATION 1 */}
       <div className="Cards-container">
        <h2>IdCards</h2>
        {IdCards.map(
          ({ lastName, firstName, gender, height, birth, picture }) => {
            return (
              <IdCard
                lastName={lastName}
                firstName={firstName}
                gender={gender}
                height={height}
                birth={birth}
                picture={picture}
                key={picture}
              />
            );
          }
        )}
       </div>
     
  </div>
  );
}

export default App;
