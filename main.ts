/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Michael Batiuk
 * Created on: Nov 2025
 * This program plays rock, paper, scissors
*/

// variables
let randomNumber: number = 0

randomNumber = -1

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// shake
input.onGesture(Gesture.Shake, function() {

    randomNumber = randint(0, 2)
// rock
    if (randomNumber == 0) {
        
        basic.showIcon(IconNames.SmallSquare)
    }

// paper
    if (randomNumber == 1) {

        basic.showIcon(IconNames.Square)
    }

// scissors
    if (randomNumber == 2) {

        basic.showIcon(IconNames.Scissors)
    }
})
