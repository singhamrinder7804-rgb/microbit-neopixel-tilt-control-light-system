let strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB_RGB)

let bright = 255
let dim = 40

basic.forever(function () {

    let x = input.acceleration(Dimension.X)
    let y = input.acceleration(Dimension.Y)
    let z = input.acceleration(Dimension.Z)

    strip.setPixelColor(0, neopixel.rgb(dim, 0, 0))   
    strip.setPixelColor(1, neopixel.rgb(0, dim, 0))  
    strip.setPixelColor(2, neopixel.rgb(0, 0, dim))  

    if (Math.abs(x) > 300) {
        strip.setPixelColor(0, neopixel.rgb(bright, 0, 0))
    }

    if (Math.abs(y) > 300) {
        strip.setPixelColor(1, neopixel.rgb(0, bright, 0))
    }

    if (Math.abs(z) > 700) {
        strip.setPixelColor(2, neopixel.rgb(0, 0, bright))
    }

    strip.show()
    basic.pause(100)
})