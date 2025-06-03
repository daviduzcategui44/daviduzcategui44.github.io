$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid(); 


    // TODO 2 - Create Platforms
    createPlatform(300, 700, 200, 20);
    createPlatform(600, 606, 200, 20);
    createPlatform(900, 500, 1200, 20);
    createPlatform(550, 400, 270, 20);
    createPlatform(900, 300, 270, 20);

    // TODO 3 - Create Collectables
    createCollectable("diamond", 300, 170, 0.5, 0.7)
    createCollectable("steve", 1350, 450);
    createCollectable("diamond", 600, 170, 0.5, 0.7);
    createCollectable("steve", 1350, 450);
    
    // TODO 4 - Create Cannons
    createCannon("top", 645, 3000)
    createCannon("right", 250, 2000)
    createCannon("top", 1250, 2000)
    createCannon("top", 1150, 2000)
    createCannon("top", 1350, 2000)
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
