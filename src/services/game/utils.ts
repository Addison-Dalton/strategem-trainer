import strategems from 'data/strategems';

const getAllStrategems = () => {
  return [...strategems];
};

const getStrategemsForRound = (count = 5) => {
  const strategems = getAllStrategems();

  const activeStrategems = [];
  for (let i = 0; i < count; i++) {
    if (strategems.length === 0) {
      break; // break if there are no more strategems to select
    }
    const randomIndex = Math.floor(Math.random() * strategems.length);
    const selectedStrategem = strategems[randomIndex];
    activeStrategems.push(selectedStrategem);
    strategems.splice(randomIndex, 1); // remove the selected strategem from the array
  }

  return activeStrategems;
};

export { getAllStrategems, getStrategemsForRound };
