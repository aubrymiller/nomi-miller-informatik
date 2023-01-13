input.onGesture(Gesture.Shake, function () {
    basic.showNumber(Number2)
    basic.pause(2000)
    basic.pause(2000)
    if (input.buttonIsPressed(Button.A)) {
        Number2 += -3
        basic.showNumber(Number2)
        basic.pause(2000)
        basic.pause(2000)
        if (input.buttonIsPressed(Button.A)) {
            Number2 += -1
            basic.showNumber(Number2)
            basic.pause(2000)
            basic.pause(2000)
            if (input.buttonIsPressed(Button.A)) {
                Number2 += -1
                basic.showNumber(Number2)
                music.playMelody("F E G A B C5 - C5 ", 160)
            } else if (input.buttonIsPressed(Button.AB)) {
                music.playMelody("F E G A B C5 - C5 ", 160)
            }
        } else if (input.buttonIsPressed(Button.B)) {
            Number2 += 1
            basic.showNumber(Number2)
            basic.pause(2000)
            basic.pause(2000)
            if (input.buttonIsPressed(Button.B)) {
                Number2 += 1
                basic.showNumber(Number2)
                music.playMelody("F E G A B C5 - C5 ", 160)
            } else if (input.buttonIsPressed(Button.AB)) {
                music.playMelody("F E G A B C5 - C5 ", 160)
            }
        } else if (input.buttonIsPressed(Button.AB)) {
            music.playMelody("F E G A B C5 - C5 ", 160)
        }
    } else if (input.buttonIsPressed(Button.B)) {
        Number2 += 3
        basic.showNumber(Number2)
        basic.pause(2000)
        basic.pause(2000)
        if (input.buttonIsPressed(Button.A)) {
            Number2 += -1
            basic.showNumber(Number2)
            basic.pause(2000)
            basic.pause(2000)
            if (input.buttonIsPressed(Button.A)) {
                Number2 += -1
                basic.showNumber(Number2)
                music.playMelody("F E G A B C5 - C5 ", 160)
            } else if (input.buttonIsPressed(Button.AB)) {
                music.playMelody("F E G A B C5 - C5 ", 160)
            }
        } else if (input.buttonIsPressed(Button.B)) {
            Number2 += 1
            basic.showNumber(Number2)
            basic.pause(2000)
            basic.pause(2000)
            if (input.buttonIsPressed(Button.B)) {
                Number2 += 1
                basic.showNumber(Number2)
                music.playMelody("F E G A B C5 - C5 ", 160)
            } else if (input.buttonIsPressed(Button.AB)) {
                music.playMelody("F E G A B C5 - C5 ", 160)
            }
        } else if (input.buttonIsPressed(Button.AB)) {
            music.playMelody("F E G A B C5 - C5 ", 160)
        }
    } else if (input.buttonIsPressed(Button.AB)) {
        music.playMelody("F E G A B C5 - C5 ", 160)
    }
})
let Number2 = 0
basic.showString("wähle 0-10")
Number2 = 5
