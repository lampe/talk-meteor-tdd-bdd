RoPaSc = new Restivus({prettyJson: true});
RoPaSc.allowedMoves = ['rock', 'paper', 'scissors', 'well'];
RoPaSc.winningMoves = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};
