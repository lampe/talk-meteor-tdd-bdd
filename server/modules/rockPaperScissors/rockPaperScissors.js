RoPaSc = new Restivus({prettyJson: true});
RoPaSc.allowedMoves = ['rock', 'paper', 'scissors', 'well'];
RoPaSc.winningMoves = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper'
};
RoPaSc.getRandomMove = () => RoPaSc.allowedMoves[Math.floor(Math.random() * RoPaSc.allowedMoves.length)];
RoPaSc.isValidMove = move => RoPaSc.allowedMoves.includes(move); // es7 polyfill
