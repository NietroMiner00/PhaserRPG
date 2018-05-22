var game = new Phaser.Game(1024, 600, Phaser.AUTO, 'test', { preload:preload, create: create, update: update, render: render});

function preload() {

    game.load.image('hoch','Assets/Wuerfeloben.png');
    game.load.image('runter','Assets/Wuerfelunten.png');
    game.load.image('links','Assets/Wuerfellinks.png');
    game.load.image('rechts','Assets/Wuerfelrechts.png');
    game.load.image("Boden", "Assets/Boden.png");

}

var char;

function create () {
    char = game.add.sprite(20,20,'hoch');
    char.scale.setTo(0.25);

    floor = game.add.sprite(50,50,'Boden');
    var sprite2 = game.add.sprite(0, 0, 'Boden').alignTo(floor, Phaser.RIGHT_CENTER, 16);
    var sprite3 = game.add.sprite(0, 0, 'Boden').alignTo(sprite2, Phaser.RIGHT_CENTER, 16);
    var sprite4 = game.add.sprite(0, 0, 'Boden').alignTo(sprite3, Phaser.RIGHT_CENTER, 16);
    var sprite5 = game.add.sprite(0, 0, 'Boden').alignTo(sprite4, Phaser.RIGHT_CENTER, 16);
    var sprite6 = game.add.sprite(0, 0, 'Boden').alignTo(sprite5, Phaser.RIGHT_CENTER, 16);
} 

function update() {
    
}

function render () {
    
}