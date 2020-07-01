radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendNumber(0)
})
radio.setGroup(1)
