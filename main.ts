input.onButtonPressed(Button.A, function () {
    shift += 50
})
input.onButtonPressed(Button.B, function () {
    shift += -50
})
basic.showIcon(IconNames.Heart)
let strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
strip.clear()
strip.showBarGraph(0, 68)
strip.showRainbow(1, 360)
let shift = 200
basic.forever(function () {
    strip.show()
    basic.pause(shift)
    strip.rotate(1)
    basic.pause(shift)
})
