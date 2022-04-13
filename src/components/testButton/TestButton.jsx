import React from 'react';

const colors = [
  '5d7b0cc1-27a4-4735-9858-cd1857d20e83',
  '3de08965-018e-4887-9ab5-72b7ba9b4895',
  '3b8f6ce6-d08a-4157-afbc-c86134b45a0d',
];

const TestButton = () => {
  function getRandomColor() {
    const color = colors[Math.floor(Math.random() * colors.length)];
    return color;
  }

  const changeColor = async () => {
    const k = await window.threekit.player.getConfigurator();
    k.setConfiguration({
      exteriorColor: {
        assetId: getRandomColor(),
        configuration: null,
        type: 'material',
      },
    });
  };

  return (
    <>
      <button onClick={changeColor}>Change color</button>
    </>
  );
};

export default TestButton;
