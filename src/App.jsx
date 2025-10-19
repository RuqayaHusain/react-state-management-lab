import { useState } from "react";

const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [errorMessage, setErrorMessage] = useState('');
  const [zombieFighters, setZombieFighters] = useState([
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },
  ]);
  // use reduce method to calculate the total strength, agility, and if array is empty total should be 0
  const totalStrength = team.reduce((accumulator, currentMember) => accumulator + currentMember.strength, 0);
  const totalAgility = team.reduce((accumulator, currentMember) => accumulator + currentMember.agility, 0);

  
  const handleAddFighter = (selectedFighter) => {
    const newTotal = money - selectedFighter.price;
    if (newTotal >= 0) {
      // add new fighter to Team array
      const newTeamArray = [...team, selectedFighter];
      setTeam(newTeamArray);
      // remove the selected fighter from the zombieFighters Array
      const newZombieFightersArray = zombieFighters.filter((iteratorFighter) => iteratorFighter.id !== selectedFighter.id);
      setZombieFighters(newZombieFightersArray);
      // updating money value
      setMoney(money - selectedFighter.price);
    } else {
      console.log('Not enough money');
      setErrorMessage(`You don't have enough money to add ${selectedFighter.name}`);
    }
  };

  const handleRemoveFighter = (selectedFighter) => {
    // remove selected fighter from Team array
    const newTeamArray = team.filter((iteratorFighter) => iteratorFighter.id !== selectedFighter.id);
    setTeam(newTeamArray);
    // add the selected fighter to zombieFighters array
    const newZombieFightersArray = [...zombieFighters, selectedFighter];
    setZombieFighters(newZombieFightersArray);
    // increase money by the price of the removed character
    const newTotal = money + selectedFighter.price;
    setMoney(newTotal);
  };

  return (
    <>
      <h1>Zombie Fighters</h1>
      <h2>Money: {money} <span>{errorMessage}</span></h2>
      <h2>Team Strength: {totalStrength}</h2>
      <h2>Team Agility: {totalAgility}</h2>
      <h2>Team</h2>
      {
        team.length === 0 ?
          (
            <p>Pick some team members!</p>
          ) :
          (
            <ul>
              {
                team.map((teamFighter, index) => (
                  <li key={index}>
                    <img src={teamFighter.img} />
                    <h4>{teamFighter.name}</h4>
                    <p>Price: {teamFighter.price}</p>
                    <p>Strength: {teamFighter.strength}</p>
                    <p>Agility: {teamFighter.agility}</p>
                    <button onClick={() => handleRemoveFighter(teamFighter)}>Remove</button>
                  </li>
                ))}
            </ul>
          )
      }
      <h2>Fighters</h2>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <img src={fighter.img} />
            <h4>{fighter.name}</h4>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App