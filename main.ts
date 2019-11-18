/**
 * Controls MOREbot Base Robot
 */
//% color= #69C4C2   weight=100 icon="\uf1ec" block="MOREbot"

namespace MOREbot {
    /**
     * Controls the MOREbot Base Robot
     */
    //% block="Go forward at $speed \\%"
    //% speed.shadow="speedPicker"
    //% block
    export function forward(speed: number) {

        pins.analogWritePin(AnalogPin.P1, 611)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P2, 611)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
}

