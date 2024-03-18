import React, { useState } from 'react'

import './App.css';

const App = () => {
  const [heightInput, setHeightInput] = useState('0');
  const [lengthInput, setLengthInput] = useState('0');
  const [weightInput, setWeightInput] = useState('0');
  const [widthInput, setWidthInput] = useState('0');
  const [notificationMessage, setNotificationMessage] = useState(null);
  const bulkyVolumeLimit = 1000000;
  const dimensionLimit = 150;
  const heavyWeightLimit = 20;

  const handleClick = () => {
    // Reset notification
    setNotificationMessage(null)

    const hasLargeDimensions = heightInput >= dimensionLimit || lengthInput >= dimensionLimit || widthInput >= dimensionLimit;
    const hasLargeVolume = heightInput * lengthInput * widthInput >= bulkyVolumeLimit;

    const isBulky = hasLargeDimensions || hasLargeVolume;
    const isHeavy = weightInput >= heavyWeightLimit;

    // Check for empty fields
    if (heightInput === '0' || lengthInput === '0' || weightInput === '0' || widthInput === '0') {
      setNotificationMessage('Please complete all fields');
      return;
    }

    // Determine package status
    if (isBulky && isHeavy) {
      setNotificationMessage('Package is too big or heavy and is REJECTED');
    } else if (isBulky || isHeavy) {
      setNotificationMessage('Package will be dispatched as SPECIAL');
    } else {
      setNotificationMessage('Package will be dispatched as STANDARD');
    }
  }

  const handleWidthChange = (e) => {
    setWidthInput(e.target.value);
  }

  const handleHeightChange = (e) => {
    setHeightInput(e.target.value);
  }
  const handleLengthChange = (e) => {
    setLengthInput(e.target.value);
  }
  const handleWeightChange = (e) => {
    setWeightInput(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Enter Package Weight & Dimensions
        </h3>
      </header>
      <div>
        <div className="form">
          <div className="input-wrapper">
            <label className="input-label">Width (cm):</label>
            <input onChange={handleWidthChange} className="input-number" data-testid="input-width" type="number" aria-labelledby="Width" />
          </div>
          <div className="input-wrapper">
            <label className="input-label">Height (cm):</label>
            <input onChange={handleHeightChange} className="input-number" data-testid="input-height" type="number" label="Height" />
          </div>
          <div className="input-wrapper">
            <label className="input-label">Length (cm):</label>
            <input onChange={handleLengthChange} data-testid="input-length" type="number" label="Length" />
          </div>
          <div className="input-wrapper">
            <label className="input-label">Weight (kg):</label>
            <input onChange={handleWeightChange} data-testid="input-weight" type="number" label="Length" />
          </div>
          <div className="input-wrapper">
            <button data-testid="button" onClick={handleClick}>Calculate</button>
          </div>
        </div>

        <p>{notificationMessage}</p>
      </div>
    </div>
  );
}

export default App;