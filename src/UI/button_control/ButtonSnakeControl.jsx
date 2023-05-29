import React from "react";
import "./ButtonSnakeControl.css"



//компанент кнопок для управления змейкой
export const ButtonSnakeControl = ({ onUp, onDown, onLeft, onRight, onPause }) => {
  return (
    <div className="buttons">
      <div className="upwards">
        <input className="up"
          onClick={onUp}
          type="button"
          value="UP" />
      </div>
      <div className="sideways">
        <input className="left"
          onClick={onLeft}
          type="button"
          value="LEFT" />
        <input
          className="right"
          onClick={onRight}
          type="button"
          value="RIGHT"
        />
      </div>
      <div className="downwards">
        <input className="down"
          onClick={onDown}
          type="button"
          value="DOWN" />
      </div>
      <div>
        <input className="stop"
          onClick={onPause}
          type="button"
          value="PAUSE" />
      </div>
    </div>
  );
};

