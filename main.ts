scene.onOverlapTile(SpriteKind.Enemy, sprites.builtin.field1, function (sprite, location) {
    game.gameOver(false)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.followPath(mySprite2, res, 100)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.field1, function (sprite, location) {
    game.gameOver(true)
})
let res: tiles.Location[] = []
let mySprite2: Sprite = null
let mySprite = sprites.create(img`
    . . . e e c c e e . . . 
    . . e 2 2 2 2 2 2 e . . 
    . 2 c 2 2 2 2 2 2 c 2 . 
    e 2 c 4 2 2 2 2 2 c 2 e 
    f 2 2 4 2 2 2 2 2 c 2 f 
    f 2 2 4 2 2 2 2 2 2 2 f 
    f 2 2 4 2 2 2 2 2 2 2 f 
    f 2 c 2 4 4 2 2 2 c 2 f 
    e 2 c e c c c c e c 2 e 
    e 2 e c b b b b c e 2 e 
    e 2 e b b b b b b e 2 e 
    e e e e e e e e e e e e 
    f e d e e e e e e d e f 
    f e 2 d e e e e d 2 e f 
    f f e e e e e e e e f f 
    . f f . . . . . . f f . 
    `, SpriteKind.Player)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
tiles.setCurrentTilemap(tilemap`level2`)
mySprite2 = sprites.create(img`
    . . . 8 8 c c 8 8 . . . 
    . . 8 6 6 6 6 6 6 8 . . 
    . 6 c 6 6 6 6 6 6 c 6 . 
    8 6 c 9 6 6 6 6 6 c 6 8 
    f 6 6 9 6 6 6 6 6 c 6 f 
    f 6 6 9 6 6 6 6 6 6 6 f 
    f 6 6 9 6 6 6 6 6 6 6 f 
    f 6 c 6 9 9 6 6 6 c 6 f 
    8 6 c 8 c c c c 8 c 6 8 
    8 6 8 c b b b b c 8 6 8 
    8 6 8 b b b b b b 8 6 8 
    8 8 8 8 8 8 8 8 8 8 8 8 
    f 8 d 8 8 8 8 8 8 d 8 f 
    f 8 6 d 8 8 8 8 d 6 8 f 
    f f 8 8 8 8 8 8 8 8 f f 
    . f f . . . . . . f f . 
    `, SpriteKind.Enemy)
tiles.placeOnTile(mySprite2, tiles.getTileLocation(17, 8))
tiles.placeOnTile(mySprite, tiles.getTileLocation(19, 8))
res = scene.aStar(tiles.getTileLocation(17, 8), tiles.getTileLocation(19, 10))
let statusbar = statusbars.create(20, 4, StatusBarKind.Energy)
statusbar.attachToSprite(mySprite, 0, 0)
forever(function () {
    pause(100)
    mySprite.startEffect(effects.trail)
})
forever(function () {
    if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.MovingUp)) || characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingUp))) {
        mySprite.setImage(img`
            . . . e e c c e e . . . 
            . . e 2 2 2 2 2 2 e . . 
            . 2 c 2 2 2 2 2 2 c 2 . 
            e 2 c 4 2 2 2 2 2 c 2 e 
            f 2 2 4 2 2 2 2 2 c 2 f 
            f 2 2 4 2 2 2 2 2 2 2 f 
            f 2 2 4 2 2 2 2 2 2 2 f 
            f 2 c 2 4 4 2 2 2 c 2 f 
            e 2 c e c c c c e c 2 e 
            e 2 e c b b b b c e 2 e 
            e 2 e b b b b b b e 2 e 
            e e e e e e e e e e e e 
            f e d e e e e e e d e f 
            f e 2 d e e e e d 2 e f 
            f f e e e e e e e e f f 
            . f f . . . . . . f f . 
            `)
    } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.MovingRight)) || characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingRight))) {
        mySprite.setImage(img`
            . . . 2 2 2 2 2 2 2 2 . . . . 
            . . 2 4 2 2 2 2 2 2 c 2 . . . 
            . 2 c 4 2 2 2 2 2 2 c c 2 . . 
            2 c c 4 4 4 4 4 4 2 c c 4 2 d 
            2 c 2 e e e e e e e b c 4 2 2 
            2 2 e b b e b b b e e b 4 2 2 
            2 e b b b e b b b b e 2 2 2 2 
            e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
            e e e e e e f e e e f e 2 d d 
            e e e e e e f e e f e e e 2 d 
            e e e e e e f f f e e e e e e 
            e f f f f e e e e f f f e e e 
            . f f f f f e e f f f f f e . 
            . . f f f . . . . f f f f . . 
            `)
    } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.MovingLeft)) || characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingLeft))) {
        mySprite.setImage(img`
            . . . . . 2 2 2 2 2 2 2 2 . . 
            . . . . 2 c 2 2 2 2 2 2 4 2 . 
            . . . 2 c c 2 2 2 2 2 2 4 c 2 
            . d 2 4 c c 2 4 4 4 4 4 4 c c 
            d 2 2 4 c b e e e e e e e 2 c 
            2 2 2 4 b e e b b b e b b e 2 
            2 2 2 2 2 e b b b b e b b b e 
            2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
            2 d d 2 e f e e e f e e e e e 
            d d 2 e e e f e e f e e e e e 
            e e e e e e e f f f e e e e e 
            e e e e f f f e e e e f f f f 
            . . e f f f f f e e f f f f f 
            . . . f f f f . . . . f f f . 
            `)
    } else if (characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.MovingDown)) || characterAnimations.matchesRule(mySprite, characterAnimations.rule(Predicate.FacingDown))) {
        mySprite.setImage(img`
            . . . 2 2 2 2 2 2 . . . 
            . . 2 2 4 4 2 2 2 2 . . 
            . . c 4 2 2 2 2 2 c . . 
            . 2 c 4 2 2 2 2 2 c 2 . 
            e 2 c 4 2 2 2 2 2 c 2 e 
            f 2 c 4 2 2 2 2 2 c 2 f 
            f e c 2 2 2 2 2 2 c e f 
            f 2 c 2 b b b b 2 c 2 f 
            e 2 2 b c c c c b 2 2 e 
            e e b c c c c c c b e e 
            f e 4 4 4 4 4 4 4 4 e f 
            f e d 2 2 2 2 2 2 d e f 
            . 2 d d 2 2 2 2 d d 2 f 
            . f 2 d 2 2 2 2 d 2 f . 
            . . e 2 2 2 2 2 2 e . . 
            `)
    }
})
forever(function () {
    if (characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.MovingUp)) || characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.FacingUp))) {
        mySprite2.setImage(img`
            . . . 8 8 c c 8 8 . . . 
            . . 8 6 6 6 6 6 6 8 . . 
            . 6 c 6 6 6 6 6 6 c 6 . 
            8 6 c 9 6 6 6 6 6 c 6 8 
            f 6 6 9 6 6 6 6 6 c 6 f 
            f 6 6 9 6 6 6 6 6 6 6 f 
            f 6 6 9 6 6 6 6 6 6 6 f 
            f 6 c 6 9 9 6 6 6 c 6 f 
            8 6 c 8 c c c c 8 c 6 8 
            8 6 8 c b b b b c 8 6 8 
            8 6 8 b b b b b b 8 6 8 
            8 8 8 8 8 8 8 8 8 8 8 8 
            f 8 d 8 8 8 8 8 8 d 8 f 
            f 8 6 d 8 8 8 8 d 6 8 f 
            f f 8 8 8 8 8 8 8 8 f f 
            . f f . . . . . . f f . 
            `)
    } else if (characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.MovingRight)) || characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.FacingRight))) {
        mySprite2.setImage(img`
            . . . 6 6 6 6 6 6 6 6 . . . . 
            . . 6 9 6 6 6 6 6 6 c 6 . . . 
            . 6 c 9 6 6 6 6 6 6 c c 6 . . 
            6 c c 9 9 9 9 9 9 6 c c 9 6 d 
            6 c 6 8 8 8 8 8 8 8 b c 9 6 6 
            6 6 8 b b 8 b b b 8 8 b 9 6 6 
            6 8 b b b 8 b b b b 8 6 6 6 6 
            8 8 6 6 6 8 6 6 6 6 6 8 6 6 6 
            8 8 8 8 8 8 f 8 8 8 f 8 6 d d 
            8 8 8 8 8 8 f 8 8 f 8 8 8 6 d 
            8 8 8 8 8 8 f f f 8 8 8 8 8 8 
            8 f f f f 8 8 8 8 f f f 8 8 8 
            . f f f f f 8 8 f f f f f 8 . 
            . . f f f . . . . f f f f . . 
            `)
    } else if (characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.MovingLeft)) || characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.FacingLeft))) {
        mySprite2.setImage(img`
            . . . . . 6 6 6 6 6 6 6 6 . . 
            . . . . 6 c 6 6 6 6 6 6 9 6 . 
            . . . 6 c c 6 6 6 6 6 6 9 c 6 
            . d 6 9 c c 6 9 9 9 9 9 9 c c 
            d 6 6 9 c b 8 8 8 8 8 8 8 6 c 
            6 6 6 9 b 8 8 b b b 8 b b 8 6 
            6 6 6 6 6 8 b b b b 8 b b b 8 
            6 6 6 6 8 6 6 6 6 6 8 6 6 6 8 
            6 d d 6 8 f 8 8 8 f 8 8 8 8 8 
            d d 6 8 8 8 f 8 8 f 8 8 8 8 8 
            8 8 8 8 8 8 8 f f f 8 8 8 8 8 
            8 8 8 8 f f f 8 8 8 8 f f f f 
            . . 8 f f f f f 8 8 f f f f f 
            . . . f f f f . . . . f f f . 
            `)
    } else if (characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.MovingDown)) || characterAnimations.matchesRule(mySprite2, characterAnimations.rule(Predicate.FacingDown))) {
        mySprite2.setImage(img`
            . . . 6 6 6 6 6 6 . . . 
            . . 6 6 9 9 6 6 6 6 . . 
            . . c 9 6 6 6 6 6 c . . 
            . 6 c 9 6 6 6 6 6 c 6 . 
            8 6 c 9 6 6 6 6 6 c 6 8 
            f 6 c 9 6 6 6 6 6 c 6 f 
            f 8 c 6 6 6 6 6 6 c 8 f 
            f 6 c 6 b b b b 6 c 6 f 
            8 6 6 b c c c c b 6 6 8 
            8 8 b c c c c c c b 8 8 
            f 8 9 9 9 9 9 9 9 9 8 f 
            f 8 d 6 6 6 6 6 6 d 8 f 
            . 6 d d 6 6 6 6 d d 6 f 
            . f 6 d 6 6 6 6 d 6 f . 
            `)
    }
})
