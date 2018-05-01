import * as React from 'react';
import './App.css';

class App extends React.Component<{}, { player: number, computer: number, updated: boolean, winner: string }> {
  constructor() {
    super({});

    this.state = {
      player: 0,
      computer: 0,
      updated: false,
      winner: '',
    };
  }

  setPlayer(hand: number) {
    if (!this.state.updated) {
      this.setState({player: hand});
    }
  }

  render() {
    if (this.state.player !== 0 && !this.state.updated) {
      this.setState({computer: getRandomHand()});
      this.setState({winner: determineWinner(this.state.player, this.state.computer)});
      this.setState({updated: true});
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Reactじゃんけん</h1>
        </header>

        <p className="App-intro">
          好きな手を選んでください。
        </p>

        <div className="Hand-selector">
          <button className="グー" onClick={() => this.setPlayer(1)}>
            グー
          </button>
          <button className="チョキ" onClick={() => this.setPlayer(2)}>
            チョキ
          </button>
          <button className="パー" onClick={() => this.setPlayer(3)}>
            パー
          </button>
        </div>

        <div className="Result">
          <p className="Player-hand">あなたの手：{resolveHandName(this.state.player)}</p>
          <p className="Computer-hand">わたしの手：{resolveHandName(this.state.computer)}</p>
          <p className="Winner">勝者：{this.state.winner}</p>
        </div>
      </div>
    );
  }
}

function getRandomHand() {
  const max = 3;
  const min = 1;
  const rand = Math.random();

  return Math.floor(rand * max + min);
}

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

function determineWinner(player: number, computer: number) {
  if (player - computer === 0) {
    return '引き分け';

  } else if (player === computer) {
    return 'hoge';
  }
  return '';
}

export default App;
