// Enemies our player must avoid
var Enemy = function(a,b,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = a;
    this.y = b;
    this.speed = Math.random() * (250 - 10) + 10;
    this.width = 75;
    this.height = 50;
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x < ctx.canvas.width) {
        this.x += (this.speed * dt);
    }
    else
    this.x = 0;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(play) {
  this.x = 201;
  this.y = 401;
  this.width = 50;
  this.height = 70;
  this.sprite = 'images/char-boy.png';
};


// reset player position
// var reset = function(x,y) {
//  Player.x = 201;
//  Player.y = 401;
//
//
// };

Player.prototype.update= function () {
  //collision detection
  if(Player.x > Enemy.x && Player.x < Enemy.x + 50 && Player.y > Enemy.y && Player.y < Enemy.y + 40 ){
   Player.x = 201;
   Player.y = 401;
  }
};



Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

Player.prototype.handleInput = function(key) {
  switch(key) {
    case 'left' :
    if(key === 'left' && this.x >= 100){
           this.x -= 100;  // how much area of the canvas the player moves
           }
           else {
             this.x = 0; //so that the player doesnt go off canvas
           }
           break;
      case 'up' :
      if(key === 'up' && this.y >= 30){
      this.y -= 82.5;
      }
      else {
        this.y = 0;
      }
      break;

      case 'right' :
        if(key === 'right' && this.x <= 305){
        this.x += 100;
        }
        else {
          this.x = 404;
        }
        break;

      case 'down' :
        if(key === 'down' && this.y <= 350){
        this.y += 82.5;
        }
        else {
          this.y = 403;
        }
        break;
}




};
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

var allEnemies = [new Enemy(0,60), new Enemy(100,120), new Enemy(140,200) ,new Enemy (1,180), new Enemy (0,70) ];
for(var i = 0; i < 4; i++) {
  allEnemies.push(new Enemy());
}
// Place the player object in a variable called player

var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
