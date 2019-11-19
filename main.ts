/**
 * Controls MOREbot Base Robot
 */
//% color= #69C4C2   weight=100 icon="\uf1ec" block="MOREbot"

namespace MOREbot {
    /**
     * Controls for the MOREbot Base Robot
     */


    //% block="Go forward at $speed \\% speed"
    //% speed.shadow="speedPicker"
    //% speed.min=0 speed.max= 100 x.defl=50
    export function forward(speed: number) {
        speed = Math.abs(speed);
        speed *= 10;

        pins.digitalWritePin(DigitalPin.P14, 1)

        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P2, speed)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }

    //% block="Go backward at $speed \\% speed"
    //% speed.shadow="speedPicker"
    //% speed.min=0 speed.max= 100 x.defl=50
    export function Backward(speed: number) {
        speed = Math.abs(speed);
        speed *= 10;

        pins.digitalWritePin(DigitalPin.P14, 1)

        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.analogWritePin(AnalogPin.P2, speed)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }


    //% block="Turn left at $speed \\% speed"
    //% speed.shadow="speedPicker"
    //% speed.min=0 speed.max= 100 x.defl=50
    export function left(speed: number) {
        speed = Math.abs(speed);
        speed *= 10;

        pins.digitalWritePin(DigitalPin.P14, 1)

        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P12, 1)
        pins.analogWritePin(AnalogPin.P2, speed)
        pins.digitalWritePin(DigitalPin.P15, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }


    //% block="Turn right at $speed \\% speed"
    //% speed.shadow="speedPicker"
    //% speed.min=0 speed.max= 100 x.defl=50
    export function right(speed: number) {
        speed = Math.abs(speed);
        speed *= 10;

        pins.digitalWritePin(DigitalPin.P14, 1)

        pins.analogWritePin(AnalogPin.P1, speed)
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.analogWritePin(AnalogPin.P2, speed)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }


    //%block 
    export function stop() {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        pins.digitalWritePin(DigitalPin.P16, 0)
    }

    //Trig -> pin 2   pins.digitalWritePin(DigitalPin.P2, 0)
    //Echo -> pin 3	pins.digitalWritePin(DigitalPin.P3, 0)

    //%block
    export function readDistance(): number {
        //Allocate space for 5 results
        let distance: Array<number>;

        //Create an int to recieve the response time
        let duration = 0;

        //Loops 0-5 (5 times) and saves the result in the allocated space above
        for (let i = 0; i < 5; i++) {
            //Ensure that nothing is being sent to the Ultrasonic at start
            pins.digitalWritePin(DigitalPin.P2, 0);
            control.waitMicros(2);
            basic.pause(100);

            //Send a HIGH(1) signal to the Ultrasonic for 10 microseconds
            pins.digitalWritePin(DigitalPin.P2, 1);
            control.waitMicros(10);

            //Send a LOW(0) signal to the Ultrasonic after those 10 microseconds
            pins.digitalWritePin(DigitalPin.P2, 0)

            //Record the time it takes from sending LOW(0) to recieve a HIGH(1) from the Ultrasonic
            duration = pins.pulseIn(DigitalPin.P3, PulseValue.High)

            //Convert time (microseconds) to distance (centimeters) using the speed of sound
            distance[i] = duration * 0.0343 / 2;

            //Wait some time to ensure all data is finished being processed
            control.waitMicros(5)
        }

        //Take the average of the 5 measurements and return that result
        return (distance[0] + distance[1] + distance[2] + distance[3] + distance[4]) / 5.0;
    }





}
