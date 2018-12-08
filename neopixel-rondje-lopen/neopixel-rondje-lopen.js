let range: neopixel.Strip = null
let startLED1 = 0
let strip: neopixel.Strip = null
let aantalLEDs = 0
let regenBoogteller1 = 0
function knopAuitnodigen() {
    for (let i = 0; i < 3; i++) {
        basic.clearScreen()
        basic.pause(100)
        basic.showArrow(ArrowNames.West)
    }
}
function doenRondje() {
    strip.clear()
    startLED1 = 0
    for (let i = 0; i < aantalLEDs; i++) {
        range = strip.range(startLED1, 1)
        strip.setPixelColor(startLED1, neopixel.rgb(255, Math.randomRange(50, 200), Math.randomRange(0, 255)))
        strip.show()
        basic.pause(100)
        basic.pause(5)
        strip.clear()
        startLED1 += 1
    }
}
input.onButtonPressed(Button.A, function () {
    doenRondje()
})
function knopBuitnodigen() {
    for (let i = 0; i < 3; i++) {
        basic.clearScreen()
        basic.pause(100)
        basic.showArrow(ArrowNames.East)
    }
}
input.onButtonPressed(Button.B, function () {
    doenRegenboogje1()
})
function doenRegenboogje1() {
    strip.clear()
    regenBoogteller1 = 0
    for (let regenBoogteller1 = 0; regenBoogteller1 <= aantalLEDs; regenBoogteller1++) {
        basic.pause(500)
        range = strip.range(regenBoogteller1, 2)
        strip.setPixelColor(regenBoogteller1, neopixel.rgb(Math.randomRange(0, 255), Math.randomRange(0, 255), Math.randomRange(0, 255)))
        strip.show()
    }
    for (let i = 0; i < 2; i++) {
        basic.pause(500)
        strip.clear()
        strip.setPixelColor(regenBoogteller1, neopixel.rgb(Math.randomRange(0, 255), Math.randomRange(0, 255), Math.randomRange(0, 255)))
        strip.show()
    }
    basic.pause(100)
}
// Aantal LEDs op neopixel
//
aantalLEDs = 8
strip = neopixel.create(DigitalPin.P0, aantalLEDs, NeoPixelMode.RGB)
strip.clear()
strip.setBrightness(50)
knopAuitnodigen()
basic.forever(function () {
    knopAuitnodigen()
    knopBuitnodigen()
})
