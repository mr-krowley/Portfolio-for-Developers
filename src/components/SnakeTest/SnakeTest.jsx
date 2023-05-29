import React, { Component } from "react";
import { ButtonSnakeControl } from "../SnakeTest/ButtonSnakeControl/ButtonSnakeControl.jsx"
import Snake from "./Snake/Snake";
import { Food } from "./Food/Food";
import Menu from "./Menu/Menu";
import "./SnakeTest.css"
// наша еда и змея начинаются в случайном месте
const getRandomFood = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};


//initialState  хранятся переменные, связанные с состоянием.
const initialState = {
  food: getRandomFood(),
  direction: "RIGHT",
  speed: 100,
  route: "menu",
  snakeDots: [
    [0, 0],
    [0, 2],
  ],
};


export class SnakeTest extends Component {
  constructor() {
    super();
    this.state = initialState;
  }
  //компонент смонтировал
  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeyDown;
  }
  // компонент делает обновление
  componentDidUpdate() {
    this.onSnakeOutOfBounds();
    this.onSnakeCollapsed();
    this.onSnakeEats();
  }
  //обработчик клавиш сопаставление с кодом клавиш из React API
  onKeyDown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 37:
        this.setState({ direction: "LEFT" });
        break;
      case 38:
        this.setState({ direction: "UP" });
        break;
      case 39:
        this.setState({ direction: "RIGHT" });
        break;
      case 40:
        this.setState({ direction: "DOWN" });
        break;
      case 32:
        this.setState({ direction: "PAUSA" });
    }
  };
  //обработка и создание движения змеи
  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];
    if (this.state.route === "game") {
      switch (this.state.direction) {
        case "RIGHT":
          head = [head[0] + 2, head[1]];
          break;
        case "LEFT":
          head = [head[0] - 2, head[1]];
          break;
        case "DOWN":
          head = [head[0], head[1] + 2];
          break;
        case "UP":
          head = [head[0], head[1] - 2];
          break;
        case "PAUSA":
          head = [head[0], head[1]];
          break;
      }
      dots.push(head);
      dots.shift();
      this.setState({
        snakeDots: dots,
      });
    }
  };
  //на Змея за пределами границ
  onSnakeOutOfBounds() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    if (this.state.route === "game") 
    {
      if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
        
        this.gameOver();
      }
    }
  }

// const isOutOfBounds = (coords, board) => {
//   const {row, col} = coords;
//   if (row < 0 || col < 0) return true;
//   if (row >= board.length || col >= board[0].length) return true;
//   return false;
// };


  //на змее рухнул
  onSnakeCollapsed() {
    let snake = [...this.state.snakeDots];
    let head = snake[snake.length - 1];
    snake.pop();
    snake.forEach((dot) => {
      if (head[0] == dot[0] && head[1] == dot[1]) {
        this.gameOver();
      }
    });
  }
  // змейка кушает фрукт
  onSnakeEats() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] == food[0] && head[1] == food[1]) {
      this.setState({
        food: getRandomFood(),
      });
      this.increaseSnake();
      this.increaseSpeed();
    }
  }
  //  змейка растек кушая
  increaseSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake,
    });
  }
  //увеличить скорость
  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 20,
      });
    }
  }
  //при изменении маршрута
  onRouteChange = () => {
    this.setState({
      route: "game",
    });
  };

  //конец игры
  gameOver() {
    alert(`GAME OVER, your score is ${this.state.snakeDots.length -2}`);
    this.setState(initialState);
  }
  //вниз
  onDown = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    head = [head[0], head[1] + 2];
    dots.push(head);
    dots.shift();
    this.setState({
      direction: "DOWN",
      snakeDots: dots,
    });
  };
  //вверх
  onUp = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    head = [head[0], head[1] - 2];
    dots.push(head);
    dots.shift();
    this.setState({
      direction: "UP",
      snakeDots: dots,
    });
  };
//вправо
  onRight = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    head = [head[0] + 2, head[1]];
    dots.push(head);
    dots.shift();
    this.setState({
      direction: "RIGHT",
      snakeDots: dots,
    });
  };
//влево
  onLeft = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    head = [head[0] - 2, head[1]];
    dots.push(head);
    dots.shift();
    this.setState({
      direction: "LEFT",
      snakeDots: dots,
    });
  };
  onPause = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];
    head = [head[0] + head, head[1]];
    dots.push(head);
    dots.shift();
    this.setState({
      direction: "PAUSA",
      snakeDots: dots,
    });

  }

  render() {
    const { route, snakeDots, food } = this.state;
    return (
      <div>
        {route === "menu" ? (
          <div>
            <Menu onRouteChange={this.onRouteChange} />
          </div>
        ) : (
          <div>
            <div className="game-area">
              <Snake snakeDots={snakeDots} />
              <Food dot={food} />
            </div>
            <ButtonSnakeControl
              onDown={this.onDown}
              onLeft={this.onLeft}
              onRight={this.onRight}
              onUp={this.onUp}
              onPause={this.onPause}
            />
          </div>
        )}
      </div>
    );
  }
};

























// export class SnakeTest extends Component  {

//   render() {

//     return (
        


//       <div>
//         <ButtonSnakeControl
//           onDown={this.onDown}
//           onLeft={this.onLeft}
//           onRight={this.onRight}
//           onUp={this.onUp}
//           onPause={this.onPause}
//         />
//       </div>
//     );
//  }


  
    
// };
