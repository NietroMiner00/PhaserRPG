var game = new Phaser.Game(1024, 600, Phaser.AUTO, 'test', { preload:preload, create: create, update: update, render: render});

function preload() {

    game.load.image('hoch','Assets/Wuerfeloben.png');
    game.load.image('runter','Assets/Wuerfelunten.png');
    game.load.image('links','Assets/Wuerfellinks.png');
    game.load.image('rechts','Assets/Wuerfelrechts.png');
    game.load.image('background','Assets/Hintergrund.png');
    game.load.image('house','Assets/housetest.png');

}



function create () {
    game.add.sprite(20,20,'hoch');
} 

function update() {
    
}

function render () {
    
}