var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeGame = function() {
        
        window.opspark.game = {};
        var game = window.opspark.game;
        
        ///////////////////
        // PROGRAM SETUP //
        ///////////////////
        
        // TODO 1 : Declare and initialize our variables
        var circle // variable to hold a single circle when creating circles / iterating
        var circles = []; // variable to store all circles in an array

        // TODO 2 : Create a function that draws a circle 
        function drawCircle(){
            // Code to Draw a Circle
            circle = draw.randomCircleInArea(canvas, true, true, "#999", 2); // It draws a random circle
            physikz.addRandomVelocity(circle, canvas, 5, 5); // adds the speed to the circles 
            view.addChild(circle); // adds the circle as a child of view so that the circle appears on screen 
            circles.push(circle); // saves the circle to an array of circles by pushing it to the end of the array
        }

        // TODO 3 : Call the drawCircle() function
        drawCircle(); // Draws the circles
        
        // TODO 7 : Use a loop to create multiple circles
        for (var i = 0; i < 100; i++){ // This code makes a for loop which repeats the code
             drawCircle() // Draws the circles
        }



        ///////////////////
        // PROGRAM LOGIC //
        ///////////////////
        
        /* 
        This Function is called 60 times/second, producing 60 frames/second.
        In each frame, for every circle, it should redraw that circle
        and check to see if it has drifted off the screen.         
        */
        function update(){
            // TODO 4 : Update the position of each circle using physikz.updatePosition()
            
            
            
            // TODO 5 : Call game.checkCirclePosition() on your circles
           

            // TODO 8 / TODO 9 : Iterate over the array
            for (var i = 0; i < circles.length; i++){ // This code makes a for loop which repeats the code
                physikz.updatePosition(circles[i]); // Updates the position of the circles
                game.checkCirclePosition(circles[i]); // This code checks the position of the circles
            }
            
        }
    
        /* 
        This Function should check the position of a circle that is passed to the 
        Function. If that circle drifts off the screen, this Function should move
        it to the opposite side of the screen.
        */
        game.checkCirclePosition = function(circle) {

            // if the circle has gone past the RIGHT side of the screen then place it on the LEFT
            if ( circle.x > canvas.width ) {
                circle.x = 0;
            }
            
            // TODO 6 : YOUR CODE STARTS HERE //////////////////////
            if ( circle.x < 0 ){ // Makes the circles disappear or appear from the left side of the screen
                circle.x = canvas.width; // Makes the circles disappear or appear from the right side of the screen
            } 
             if ( circle.y < 0 ){ // Makes the circles disappear or appear from the top side of the screen
                 circle.y = canvas.height; // Makes the circles disappear or appear from the bottom side of the screen
             }
             if ( circle.y > canvas.height){  // same line of code like the second if statement but swapped
                 circle.y = 0 // Also same line of code like the second if statement but circle.y = 0 is on the bottom
             }

            // YOUR TODO 6 CODE ENDS HERE //////////////////////////
        }
        
        /////////////////////////////////////////////////////////////
        // --- NO CODE BELOW HERE  --- DO NOT REMOVE THIS CODE --- //
        /////////////////////////////////////////////////////////////
        
        view.addChild(fps);
        app.addUpdateable(fps);
        
        game.circle = circle;
        game.circles = circles;
        game.drawCircle = drawCircle;
        game.update = update;
        
        app.addUpdateable(window.opspark.game);
    }
};

// DO NOT REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
