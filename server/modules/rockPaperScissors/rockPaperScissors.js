RoPaSc = new Restivus({prettyJson: true});
RoPaSc.allowedMoves = ['rock', 'paper', 'scissors'];
RoPaSc.winningMoves = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};
