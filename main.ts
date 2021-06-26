input.onButtonPressed(Button.A, function () {
    basic.showNumber(number)
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    number += 1
})
let number = 0
number = 1
