import * as React from 'react';
import './App.css';

class Player extends React.Component<{}, { hand: number }> {
  constructor() {
    super({});

    this.state = {
      hand: 0,
    };
  }

  // グー: 1, チョキ: 2, パー: 3
  render() {
    return (
      <div className="Player">
        <button className="グー" onClick={() => this.setState({hand: 1})}>
          グー
        </button>
        <button className="チョキ" onClick={() => this.setState({hand: 2})}>
          チョキ
        </button>
        <button className="パー" onClick={() => this.setState({hand: 3})}>
          パー
        </button>
      </div>
    );
  }
}

class Computer extends React.Component <{}, { hand: number }> {
  constructor() {
    super({});

    this.state = {
      hand: 0,
    };
  }
}

class Game extends React.Component<{}, { player: number, computer: number }> {
  constructor() {
    super({});

    this.state = {
      player: 0,
      computer: 0,
    };
  }

    render() {
    return (
      <div className="Game">
        <Player />
        <Computer />
        <p className="Selected-hand">あなたの手：{resolveHandName(this.state.player)}</p>
        <p className="Selected-hand">わたしの手：{resolveHandName(this.state.computer)}</p>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Reactじゃんけん</h1>
        </header>
        <p className="App-intro">
          好きな手を選んでください。
        </p>
        <Game />
      </div>
    );
  }
}

// function getRandomNum(seed: number) {
//   let s = Math.abs(seed);

//   s = s ^ (s << 13);
//   s = s ^ (s >> 17);
//   s = s ^ (s << 15);

//   return s;
// }

// function getRandomHand() {
//   const seed = Date.now();
//   const max = 3;
//   const min = 1;
//   const rand = getRandomNum(seed);

//   return min + (rand % (max - min + 1));
// }

// グー: 1, チョキ: 2, パー: 3
function resolveHandName(handNum: number) {
  switch (handNum) {
    case 1:
      return 'グー';

    case 2:
      return 'チョキ';

    case 3:
      return 'パー';

    default:
      return '';
  }
}

// function determineWinner(player: number, computer: number) {
//   return "computer";
// }

export default App;
