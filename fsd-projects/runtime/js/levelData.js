var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY -125, damage: 10},
          { type: "sawblade", x: 600, y: groundY -125, damage: 10},
          { type: "sawblade", x: 800, y: groundY -125, damage: 10},
          { type: "enemy", x: 400, y: groundY -50, damage: 10, speed: -3, image: "img/enemygoomba.png", offsetX: -40, offsetY: -45, scale: 0.5},
          { type: "enemy", x: 600, y: groundY -50, damage: 10, speed: -3, image: "img/enemygoomba.png", offsetX: -40, offsetY: -45, scale: 0.5},
          { type: "enemy", x: 800, y: groundY -50, damage: 10, speed: -3, image: "img/enemygoomba.png", offsetX: -40, offsetY: -45, scale: 0.5},
          { type: "reward", x: 1000, y: groundY -75, speed: -3, image: "img/Medkit.png", offsetX: -57, offsetY: -43, scale: 0.3},
          { type: "marker", x: 1500, y: groundY -75, speed: -3, image: "img/Finish-line.png", offsetX: -75, offsetY: -45, scale: 0.8},



        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY, damage: 10},
          { type: "sawblade", x: 600, y: groundY, damage: 10},
          { type: "sawblade", x: 800, y: groundY, damage: 10},
          { type: "enemy", x: 400, y: groundY -50, damage: 10, speed: -4, image: "img/enemygoomba.png", offsetX: -40, offsetY: -45, scale: 0.5},
          { type: "enemy", x: 600, y: groundY -50, damage: 10, speed: -4, image: "img/enemygoomba.png", offsetX: -40, offsetY: -45, scale: 0.5},
          { type: "enemy", x: 800, y: groundY -50, damage: 10, speed: -4, image: "img/enemygoomba.png", offsetX: -40, offsetY: -45, scale: 0.5},
          { type: "reward", x: 1000, y: groundY -75, speed: -3, image: "img/Medkit.png", offsetX: -57, offsetY: -43, scale: 0.3},
          { type: "marker", x: 1500, y: groundY -75, speed: -3, image: "img/Finish-line.png", offsetX: -75, offsetY: -45, scale: 0.8},
        
        ],
      },
      {
        name: "Robot Jigsaw",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 410, y: groundY, damage: 10},
          { type: "sawblade", x: 610, y: groundY, damage: 10},
          { type: "sawblade", x: 810, y: groundY, damage: 10},

          { type: "sawblade", x: 550, y: groundY -145, damage: 10},
          { type: "sawblade", x: 750, y: groundY -145, damage: 10},
          { type: "sawblade", x: 950, y: groundY -145, damage: 10},

          { type: "enemy", x: 400, y: groundY -50, damage: 13, speed: -4, image: "img/enemygoomba.png", offsetX: -40, offsetY: -45, scale: 0.5},
          { type: "enemy", x: 600, y: groundY -50, damage: 13, speed: -4, image: "img/enemygoomba.png", offsetX: -40, offsetY: -45, scale: 0.5},
          { type: "enemy", x: 800, y: groundY -50, damage: 13, speed: -4, image: "img/enemygoomba.png", offsetX: -40, offsetY: -45, scale: 0.5},
          { type: "reward", x: 1000, y: groundY -75, speed: -3, image: "img/Medkit.png", offsetX: -57, offsetY: -43, scale: 0.3},
          { type: "marker", x: 1500, y: groundY -75, speed: -3, image: "img/Finish-line.png", offsetX: -75, offsetY: -45, scale: 0.8},
        
        ],
      },
      {
        name: "Mirror Hallebot",
        number: 4,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 410, y: groundY, damage: 10},
          { type: "sawblade", x: 610, y: groundY, damage: 10},
          { type: "sawblade", x: 810, y: groundY, damage: 10},
          { type: "sawblade", x: 550, y: groundY -145, damage: 10},
          { type: "sawblade", x: 750, y: groundY -145, damage: 10},
          { type: "sawblade", x: 950, y: groundY -145, damage: 10},
          { type: "enemy", x: 400, y: groundY -50, damage: 10, speed: -7, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 600, y: groundY -50, damage: 10, speed: -7, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 800, y: groundY -50, damage: 10, speed: -7, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "reward", x: 1000, y: groundY -75, speed: -3, image: "img/Medkit.png", offsetX: -57, offsetY: -43, scale: 0.3},
          { type: "marker", x: 1500, y: groundY -75, speed: -3, image: "img/Finish-line.png", offsetX: -75, offsetY: -45, scale: 0.8},
        
        ],
      },
      {
        name: "Mirror Hallebot 2",
        number: 5,
        speed: -2,
        gameItems: [
          { type: "enemy", x: 3500, y: groundY -50, damage: 10, speed: -8, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY -50, damage: 10, speed: -6, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY -50, damage: 10, speed: -7, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY -50, damage: 10, speed: -5, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},

          { type: "enemy", x: 3500, y: groundY -50, damage: 10, speed: -8, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY -50, damage: 10, speed: -6, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY -50, damage: 10, speed: -7, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY -50, damage: 10, speed: -5, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},

          { type: "enemy", x: 3300, y: groundY -50, damage: 10, speed: -7, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3300, y: groundY -50, damage: 10, speed: -8, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3300, y: groundY -50, damage: 10, speed: -5, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3300, y: groundY -50, damage: 10, speed: -6, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},

          { type: "enemy", x: 3400, y: groundY -50, damage: 10, speed: -8, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3400, y: groundY -50, damage: 10, speed: -6, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3400, y: groundY -50, damage: 10, speed: -7, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3400, y: groundY -50, damage: 10, speed: -5, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},

          { type: "enemy", x: 3500, y: groundY -50, damage: 10, speed: -8, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY -50, damage: 10, speed: -6, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY -50, damage: 10, speed: -7, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3500, y: groundY -50, damage: 10, speed: -5, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},

          { type: "enemy", x: 3400, y: groundY -50, damage: 10, speed: -8, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3400, y: groundY -50, damage: 10, speed: -6, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3400, y: groundY -50, damage: 10, speed: -7, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3400, y: groundY -50, damage: 10, speed: -5, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},

          { type: "enemy", x: 3400, y: groundY -50, damage: 10, speed: -8, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3400, y: groundY -50, damage: 10, speed: -6, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3400, y: groundY -50, damage: 10, speed: -7, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3400, y: groundY -50, damage: 10, speed: -5, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},

          { type: "enemy", x: 3400, y: groundY -50, damage: 10, speed: -8, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3400, y: groundY -50, damage: 10, speed: -6, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3400, y: groundY -50, damage: 10, speed: -8, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3450, y: groundY -50, damage: 10, speed: -6, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3450, y: groundY -50, damage: 10, speed: -7, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3450, y: groundY -50, damage: 10, speed: -5, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3450, y: groundY -50, damage: 10, speed: -7, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},
          { type: "enemy", x: 3450, y: groundY -50, damage: 10, speed: -5, image: "img/halle.png", offsetX: -60, offsetY: -42, scale: 0.8},

          { type: "reward", x: 1000, y: groundY -75, speed: -3, image: "img/Medkit.png", offsetX: -57, offsetY: -43, scale: 0.3},
          { type: "marker", x: 3500, y: groundY -75, speed: -3, image: "img/Finish-line.png", offsetX: -75, offsetY: -45, scale: 0.8},
        
        ],
      },
      {
        name: "Saw Battle",
        number: 6,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY, damage: 10},
          { type: "sawblade", x: 600, y: groundY, damage: 10},
          { type: "sawblade", x: 800, y: groundY, damage: 10},

          { type: "sawblade", x: 520, y: groundY -145, damage: 10},
          { type: "sawblade", x: 720, y: groundY -145, damage: 10},
          { type: "sawblade", x: 920, y: groundY -145, damage: 10},

          { type: "sawblade", x: 1000, y: groundY, damage: 10},
          { type: "sawblade", x: 1180, y: groundY, damage: 10},
          { type: "sawblade", x: 1280, y: groundY, damage: 10},
          
          
          { type: "reward", x: 1000, y: groundY -75, speed: -3, image: "img/Medkit.png", offsetX: -57, offsetY: -43, scale: 0.3},
          { type: "marker", x: 1500, y: groundY -75, speed: -3, image: "img/Completed Level.png", offsetX: -48, offsetY: -50, scale: 0.6},
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
