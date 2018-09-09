var paddle1;
var paddle2;

var GameState = {
  //load the game assets before the game starts
  preload: function(){
  //game.load.image(name, path);
    game.load.image('paddle', 'assets/images/paddle.png');
  },
  //executed after everything is loaded
  create: function(){
    paddle1 = create_paddle(0, game.world.centerY);
    paddle2 = create_paddle(game.world.width - 16, game.world.centerY)
  },
  //this is executed multiple times per second
  update: function(){
    control_paddle(paddle1, game.input.y);
  }
};


function create_paddle(x,y){
  var paddle = game.add.sprite(x, y, 'paddle');
  paddle.anchor.setTo(0.5, 0.5);
  game.physics.arcade.enable(paddle);
  paddle.body.collideWorldBounds = true;

  return paddle;
};

function control_paddle(paddle, y) {
  paddle.y = y;

  if (paddle.y < paddle.height / 2){
    paddle.y = paddle.height / 2;
  } else if (paddle.y > game.world.height - paddle.height / 2){
    paddle.y = game.word.height - paddle.height / 2;
  };
};

//initiate the Phaser framework
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', GameState);
