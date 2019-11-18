/**
 * Controls MOREbot Base Robot
 */
//% color= #69C4C2   weight=100 icon="\uf1ec" block="MOREbot"

namespace MOREbot {
    /**
     * Controls for the MOREbot Base Robot
     */


    //% block="Go forward at $speed speed\\%"
    //% speed.shadow="speedPicker"
    //% speed.min=0 speed.max= 100 x.defl=50
    export function forward(speed: number) {
        speed = Math.abs(speed);
        speed *= 10;

        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P2, speed)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }

    //% block="Go backward at $speed speed\\%"
    //% speed.shadow="speedPicker"
    //% speed.min=0 speed.max= 100 x.defl=50
    export function Backward(speed: number) {
        speed = Math.abs(speed);
        speed *= 10;

        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.analogWritePin(AnalogPin.P2, speed)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }


}

