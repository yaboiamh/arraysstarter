controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (acceptInput) {
        list.push(choices[0])
        displayChoice()
    }
})
function clearChoices () {
    while (playerChoices.length != 0) {
        playerChoices.pop()
    }
    mySprite2 = sprites.create(img`
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        f f f f f f f f f f f f f f f f 
        `, SpriteKind.Player)
}
function displayPattern () {
    for (let value of pattern) {
        mySprite = sprites.create(value, SpriteKind.Player)
        mySprite.destroy()
        pause(500)
        mySprite.destroy()
        pause(200)
    }
}
function compare () {
    for (let value2 of pattern) {
        if (value2 != playerChoices[pattern.indexOf(value2)]) {
            game.splash("Incorrect!")
            game.over(false)
        }
    }
    game.splash("Correct!")
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (acceptInput) {
        list.push(choices[2])
        displayChoice()
    }
})
function createArrays () {
    choices = [
    img`
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . 2 2 2 2 2 2 2 2 . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        `,
    img`
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 . . . 
        . . . . 7 7 7 7 7 7 7 7 . . . . 
        . . . . . 7 7 7 7 7 7 . . . . . 
        . . . . . . 7 7 7 7 . . . . . . 
        `,
    img`
        . . . . . . 5 5 5 . . . . . . . 
        . . . . . 5 5 5 5 . . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . 5 5 5 5 5 5 . . . . . . . 
        . . 5 5 5 5 5 5 5 . . . . . . . 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
        . . 5 5 5 5 5 5 5 . . . . . . . 
        . . . 5 5 5 5 5 5 . . . . . . . 
        . . . . 5 5 5 5 5 . . . . . . . 
        . . . . . 5 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 . . . . . . . 
        `,
    img`
        . . . . . . . 8 8 8 . . . . . . 
        . . . . . . . 8 8 8 8 . . . . . 
        . . . . . . . 8 8 8 8 8 . . . . 
        . . . . . . . 8 8 8 8 8 8 . . . 
        . . . . . . . 8 8 8 8 8 8 8 . . 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
        8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 . 
        . . . . . . . 8 8 8 8 8 8 8 . . 
        . . . . . . . 8 8 8 8 8 8 . . . 
        . . . . . . . 8 8 8 8 8 . . . . 
        . . . . . . . 8 8 8 8 . . . . . 
        . . . . . . . 8 8 8 . . . . . . 
        `
    ]
    pattern = []
    playerChoices = []
    for (let index = 0; index < 3; index++) {
        pattern.push(choices._pickRandom())
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (acceptInput) {
        list.push(choices[3])
        displayChoice()
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (acceptInput) {
        list.push(choices[1])
        displayChoice()
    }
})
function displayChoice () {
    lastIndex = playerChoices.length - 1
    mySprite2 = sprites.create(playerChoices[lastIndex], SpriteKind.Player)
    pause(100)
    mySprite.destroy()
}
let lastIndex = 0
let mySprite: Sprite = null
let mySprite2: Sprite = null
let list: Image[] = []
let choices: Image[] = []
let playerChoices: Image[] = []
let pattern: Image[] = []
let acceptInput = false
createArrays()
let level = 1
game.splash("Level " + convertToText(level))
acceptInput = false
displayPattern()
acceptInput = true
while (pattern.length != playerChoices.length) {
    pause(500)
}
compare()
clearChoices()
pattern.push(choices.pop())
level += 1
