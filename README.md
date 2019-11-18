# pxt-morebot
This is an extension developed to drive the MOREbot Base Robot by MOREtech. It features basic driving commands and ultrasonic sensor readings.

## Wiring:

Left motor black wire   -> A1

Left motor red wire     -> A2

Right motor black wire  -> B1

Right motor red wire    -> B2

6-12V -> VM
0V    -> G

# Blocks:

## Forward(speed):
  Forward drives the robot forward at the speed specified. Speed is a percentage between 0 and 100. If you input a negative value, it will get converted to a postive one, rather than driving the robot backwards. To make the robot go forward for 1 second, you need to include a pause(1000); after this function.
  
## Backward(speed):
  Backward drives the robot Backward at the speed specified. Speed is a percentage between 0 and 100. If you input a negative value, it will get converted to a postive one, rather than driving the robot forwards. To make the robot go forward for 1 second, you need to include a pause(1000); after this function. 
  
## Left(speed):
  Left turns the robot to the left (counter clockwise) at the speed specified. Speed is a percentage between 0 and 100. If you input a negative value, it will get converted to a postive one, rather than turning the robot to the right. To make the robot turn left for 1 second, you need to include a pause(1000); after this function.
  
## Right(speed):
  Right turns the robot to the Right (clockwise) at the speed specified. Speed is a percentage between 0 and 100. If you input a negative value, it will get converted to a postive one, rather than turning the robot to the left. To make the robot turn right for 1 second, you need to include a pause(1000); after this function.

## Stop:
  Stops both motors. Motors will not stop on their own after a direction command, you have to follow them up with a stop command.

## TODO

- [-] Add a reference for your blocks here
- [-] Add "icon.png" image (300x200) in the root folder
- [-] Add "- beta" to the GitHub project description if you are still iterating it.
- [-] Turn on your automated build on https://travis-ci.org
- [-] Use "pxt bump" to create a tagged release on GitHub
- [-] On GitHub, create a new file named LICENSE. Select the MIT License template.
- [ ] Get your package reviewed and approved https://makecode.microbit.org/extensions/approval

Read more at https://makecode.microbit.org/extensions

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

