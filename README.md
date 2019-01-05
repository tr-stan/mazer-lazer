# MAZER-LAZER GAME
This game will comprise a maze filled with traps and hints, with a cipher located at the end of the maze that you must solve to break free.

## OVERVIEW
I would like to create a cryptic maze game where you can collect clues to answer quizzes/ciphers and find your way out/exit the maze. Eventually I want to have multiple levels. Lasers may be involved somehow later down the line.

## GOALS
Create maze environment of multiple that player can traverse to find clues. 


## SPECIFICATIONS
The player would have 9 lives and 3 attempts to crack a code before hitting a game over screen.

They could also take the wrong path and lose a life.
Maybe the player prototype could have functions for last-minute saves if done right (such as clicking a button to clear a timeout else the game over screen would appear).
Clues/keys could be hidden behind booby traps, and they would provide hints to solving the cipher at the last gate/chest. Maybe even,  they could get a special treasure if they get all clues. hasItemX===true, hasItemY===true etc.

## MILESTONES

### Make character and set any functions
Character object will have stats such as lives, guesses

### Make screen outline to use for all screens
I will make a screen outline that can list certain statistics and possibly some text, which I can use over and over again for each consecutive screen. Either the background or a window within this outline can display the unique characteristics of the current 'room'.

This screen outline will contain arrows with associated click functions to go left, right, or straight (and any combination of the three).

### Make map of all rooms, figure out possible pathways to goal or dead end.
This will require figuring out the logic of where a character can go relative to their current room.

### Make traps, clues/keys and final cipher 
Each room will have an image, with a few clickable objects. Some of the objects will trigger 'booby traps' that decrement the 'lives' count. Others will reveal 'clues/keys' and add them to your clues array, which will come in handy at the end of the game when you arrive at the cipher in the last room.

## Put a cipher on the last “door” or chest that must be broken to win the game.
The character will have 3 chances to solve the cipher before hitting a game over. If they've collected clues/keys, a list of key-value pairs will be displayed to help them more easily fill out the answer.

