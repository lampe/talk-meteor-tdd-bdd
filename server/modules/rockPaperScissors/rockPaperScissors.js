RoPaSc = new Restivus({
  prettyJson: true
});
RoPaSc.allowedMoves = ['rock', 'paper', 'scissors'];
RoPaSc.winningMoves = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};
RoPaSc.getRandomMove = () => RoPaSc.allowedMoves[Math.floor(Math.random() * RoPaSc.allowedMoves.length)];
RoPaSc.isValidMove = move => RoPaSc.allowedMoves.includes(move); // es7 polyfill
RoPaSc.wrongApiCall = () => {
  const error = {
    statusCode: 400,
    body: {
      error: 'Please us the api as follows: /api/move/ and attach a json object to the body like {move:rock}'
    }
  };
  return error;
};
RoPaSc.getWinner = (move) => {
  if (RoPaSc.isValidMove(move.player) && RoPaSc.isValidMove(move.computer)) {
    if (move.player === move.computer) {
      return 'drawn';
    }
    if (move.computer === RoPaSc.winningMoves[move.player]) {
      return 'player';
    }
    return 'computer';
  }
  return RoPaSc.wrongApiCall();
};
RoPaSc.addRoute('', {
  post() {
    return RoPaSc.wrongApiCall();
  }
});
RoPaSc.addRoute('*', {
  post() {
    return RoPaSc.wrongApiCall();
  }
});
RoPaSc.addRoute('move', {
  post() {
    if (this.request.headers['content-type'] === 'application/json') {
      if (this.bodyParams.move) {
        const move = {};
        move.player = this.bodyParams.move.toString().toLowerCase();
        if (RoPaSc.isValidMove(move.player)) {
          move.computer = RoPaSc.getRandomMove();
          const winner = RoPaSc.getWinner(move);
          return {
            statusCode: 200,
            body: {
              move,
              winner
            }
          };
        }
      }
    }
    return RoPaSc.wrongApiCall();
  }
});
