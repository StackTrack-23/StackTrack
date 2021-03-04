import React from 'react';

const ProgressBar = (props) => {
  const { bgcolor, barCat, completed } = props;
  // styling will move to style.css when feature finish mockup

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    opacity: 1,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  return (
    <div className="barContainer">
      <div style={fillerStyles}>
        <span className="labelStyles">{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;

