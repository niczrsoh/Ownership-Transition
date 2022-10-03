import React from 'react';

const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GuessNumber = class extends React.Component {
  render() {
    const {parent, playable, hand} = this.props;
    return (
      <div>
        {hand ? 'It was a draw! Guess again.' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <h3>What is the number you are guessing ?</h3><div></div>
        <h3>You can guess any number from 0 to 10 </h3>
        <button
          disabled={!playable}
          onClick={() => parent.playMorra(0)}
        >0</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMorra(1)}
        >1</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMorra(2)}
        >2</button>
            <button
          disabled={!playable}
          onClick={() => parent.playMorra(3)}
        >3</button>
            <button
          disabled={!playable}
          onClick={() => parent.playMorra(4)}
        >4</button>
          <button
          disabled={!playable}
          onClick={() => parent.playMorra(5)}
        >5</button>
            <button
          disabled={!playable}
          onClick={() => parent.playMorra(6)}
        >6</button>
            <button
          disabled={!playable}
          onClick={() => parent.playMorra(7)}
        >7</button>
            <button
          disabled={!playable}
          onClick={() => parent.playMorra(8)}
        >8</button>
            <button
          disabled={!playable}
          onClick={() => parent.playMorra(9)}
        >9</button>
            <button
          disabled={!playable}
          onClick={() => parent.playMorra(10)}
        >10</button>
      </div>
    );
  }
}

exports.GiveNumber = class extends React.Component {
  render() {
    const {parent, playable, hand} = this.props;
    return (
      <div>
        {hand}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <h3>What is the number you want to give ?</h3>
        <h3>You can give any number from 0 to 5 </h3>
        <button
          disabled={!playable}
          onClick={() => parent.playMorra(0)}
        >0</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMorra(1)}
        >1</button>
        <button
          disabled={!playable}
          onClick={() => parent.playMorra(2)}
        >2</button>
         <button
          disabled={!playable}
          onClick={() => parent.playMorra(3)}
        >3</button>
           <button
          disabled={!playable}
          onClick={() => parent.playMorra(4)}
        >4</button>
           <button
          disabled={!playable}
          onClick={() => parent.playMorra(5)}
        >5</button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    return (
      <div>
        Thank you for playing. The outcome of this game was:
        <br />{outcome || 'Unknown'}
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout. (Someone took too long.)
      </div>
    );
  }
}

export default exports;