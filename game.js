var game = new Phaser.Game(1024, 600, Phaser.AUTO, 'test', { preload:preload, create: create, update: update, render: render});

function preload() {

    game.load.image('hoch','Assets/Wuerfeloben.png');
    game.load.image('runter','Assets/Wuerfelunten.png');
    game.load.image('links','Assets/Wuerfellinks.png');
    game.load.image('rechts','Assets/Wuerfelrechts.png');
    game.load.audio("music", "Assets/Musik.mp3");
    game.load.image('Boden', 'Assets/Boden.png');
    game.load.image('himmel','Assets/background.png');

}

var char;

function create () {

    var audio = game.add.audio("music");
    audio.play();
    var background = game.add.sprite(game.world.centerX,game.world.centerY,'himmel');
    background.anchor.setTo(0.5);
    background.scale.setTo(1.5);
    game.stage.backgroundColor = "#c1ffe5";


    char = game.add.sprite(20,20,'hoch');
    char.scale.setTo(0.25);

    var floor = game.add.sprite(0,500,'Boden');
    floor.scale.setTo(0.5);
    floor.scale.x = 1;
} 

function update() {
    
}

function render () {
    
}