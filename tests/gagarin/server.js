/*eslint-disable*/
/*
  more info why not to use es6 right now with gagarin
  https://github.com/anticoders/gagarin/issues/163
*/

describe('Rock Paper Scissors Rest Api - Server', function () {
  var server = meteor({
    flavor: 'fiber'
  });
  var client = browser(server, {
    flavor: 'promise'
  });

  describe('- Initalize', function () {
    it('RoPaSc should be present on Server', function () {
      return server.execute(function () {
        expect(RoPaSc).to.be.an('object');
      });
    });
    it('RoPaSc should not be a empty object on the Server', function () {
      return server.execute(function () {
        expect(RoPaSc).not.to.be.empty;
      });
    });

    describe('- RoPaSc properties', function () {
      it('the allowed moves should be a Array', function () {
        return server.execute(function () {
          expect(RoPaSc.allowedMoves).to.be.instanceof(Array);
        });
      });
      it('should have allowed moves', function () {
        return server.execute(function () {
          expect(RoPaSc.allowedMoves).not.to.be.empty;
        });
      });
      it('the winning moves should be a Object', function () {
        return server.execute(function () {
          expect(RoPaSc.winningMoves).to.be.instanceof(Object);
        });
      });
      it('should have winning moves', function () {
        return server.execute(function () {
          expect(RoPaSc.winningMoves).not.to.be.empty;
        });
      });
    });
    describe('- RoPaSc functions', function () {
      it('randoMmove should have be function', function () {
        return server.execute(function () {
          var randomMove = RoPaSc.getRandomMove();
          expect(randomMove).to.be.a.function;
        });
      });
      it('randoMmove should return a random move', function () {
        return server.execute(function () {
          var randomMove = RoPaSc.getRandomMove();
          assert.include(RoPaSc.allowedMoves, randomMove);
        });
      });
      it('wrongApiCall should be a function', function () {
        return server.execute(function () {
          var wrongApiCall = RoPaSc.wrongApiCall();
          expect(wrongApiCall).to.be.a.function;
        });
      });
      it('wrongApiCall should return a object', function () {
        return server.execute(function () {
          var wrongApiCall = RoPaSc.wrongApiCall();
          expect(wrongApiCall).to.be.a.object;
        });
      });
      it('wrongApiCall should have a 400 statusCode', function () {
        return server.execute(function () {
          var wrongApiCall = RoPaSc.wrongApiCall();
          expect(wrongApiCall.statusCode).to.equal(400);
        });
      });
      it('isValidMove with paper should be a valid move', function () {
        return server.execute(function () {
          expect(RoPaSc.isValidMove("paper")).to.be.true;
        });
      });
      it('isValidMove with rock should be a valid move', function () {
        return server.execute(function () {
          expect(RoPaSc.isValidMove("rock")).to.be.true;
        });
      });
      it('isValidMove with scissors should be a valid move', function () {
        return server.execute(function () {
          expect(RoPaSc.isValidMove("scissors")).to.be.true;
        });
      });
      describe('- winning function', function () {
        it('Player has rock and Computer has paper - Computer Should win.', function () {
          return server.execute(function () {
            var move = {
              player: 'rock',
              computer: 'paper'
            };
            var winner = RoPaSc.getWinner(move);
            expect(winner).to.be.equal("computer");
          });
        });
        it('Player has something and Computer has rock - should return a error.', function () {
          return server.execute(function () {
            var move = {
              player: 'something',
              computer: 'rock'
            };
            var winner = RoPaSc.getWinner(move);
            expect(winner.statusCode).to.be.equal(400);
          });
        });
        it('Player has rock and Computer has something - should return a error.', function () {
          return server.execute(function () {
            var move = {
              player: 'rock',
              computer: 'something'
            };
            var winner = RoPaSc.getWinner(move);
            expect(winner.statusCode).to.be.equal(400);
          });
        });
        it('Player has rock and Computer has scissors - Player Should win.', function () {
          return server.execute(function () {
            var move = {
              player: 'rock',
              computer: 'scissors'
            };
            var winner = RoPaSc.getWinner(move);
            expect(winner).to.be.equal("player");
          });
        });
        it('Player has rock and Computer has rock - should be a drawn.', function () {
          return server.execute(function () {
            var move = {
              player: 'rock',
              computer: 'rock'
            };
            var winner = RoPaSc.getWinner(move);
            expect(winner).to.be.equal("drawn");
          });
        });
        it('Player has scissors and Computer has rock - Computer Should win.', function () {
          return server.execute(function () {
            var move = {
              player: 'scissors',
              computer: 'rock'
            };
            var winner = RoPaSc.getWinner(move);
            expect(winner).to.be.equal("computer");
          });
        });
        it('Player has scissors and Computer has paper - Player Should win.', function () {
          return server.execute(function () {
            var move = {
              player: 'scissors',
              computer: 'paper'
            };
            var winner = RoPaSc.getWinner(move);
            expect(winner).to.be.equal("player");
          });
        });
        it('Player has scissors and Computer has sciccor - should be a drawn.', function () {
          return server.execute(function () {
            var move = {
              player: 'scissors',
              computer: 'scissors'
            };
            var winner = RoPaSc.getWinner(move);
            expect(winner).to.be.equal("drawn");
          });
        });
        it('Player has paper and Computer has scissors - Computer Should win.', function () {
          return server.execute(function () {
            var move = {
              player: 'paper',
              computer: 'scissors'
            };
            var winner = RoPaSc.getWinner(move);
            expect(winner).to.be.equal("computer");
          });
        });
        it('Player has paper and Computer has rock - Player Should win.', function () {
          return server.execute(function () {
            var move = {
              player: 'paper',
              computer: 'rock'
            };
            var winner = RoPaSc.getWinner(move);
            expect(winner).to.be.equal("player");
          });
        });
        it('Player has paper and Computer has paper - should be a drawn.', function () {
          return server.execute(function () {
            var move = {
              player: 'paper',
              computer: 'paper'
            };
            var winner = RoPaSc.getWinner(move);
            expect(winner).to.be.equal("drawn");
          });
        });
      });
    });
  });
});
