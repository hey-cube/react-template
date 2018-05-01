import * as React from 'react';
import './App.css';

class HandSelector extends React.Component<{}, { hand: number }> {
  constructor() {
    super({});

    this.state = {
      hand: 0,
    };
  }

  // グー: 1, チョキ: 2, パー: 3
  render() {
    return (
      // TODO: 各ボタンを1つのコンポーネントにまとめる
      // TODO: this.state.hand != 0の時はボタンが押せないようにする
      // TODO: stateをGameに渡す
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

class Game extends React.Component<{}, { player: number, computer: number }> {
  constructor() {
    super({});

    this.state = {
      player: 0,
      computer: 0,
    };
  }

  // TODO: stateをHandSelectorに渡す
  renderHandSelector() {
    return <HandSelector hand={this.state.player} />;
  }

  // TODO: this.state.player != 0になったらコンピューターの手を計算する
  // TODO: this.state.player != 0になったらcomputerの手を表示する
  // TODO: this.state.computer != 0になったら勝敗判定をする
  // TODO: this.state.computer != 0になったらrestartボタンを追加する
  render() {
    return (
      <div className="Game">
        <HandSelector />
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

// TODO: 勝敗を判定する関数を完成させる
// function determineWinner(player: number, computer: number) {
//   return "computer";
// }

export default App;
