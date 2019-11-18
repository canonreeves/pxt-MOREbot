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
    //% speed.min=0 speed.max= 100 x.defl=50
    export function forward(speed: number) {
        speed *= 10;
        
        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P2, speed)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }
}

