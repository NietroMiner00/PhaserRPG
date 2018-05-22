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
var floor;
var upKey;
var downKey;
var leftKey;
var rightKey;

function create () {

    game.world.setBounds(0,0,2048,600);

    var audio = game.add.audio("music");
    audio.play();
    var background = game.add.tileSprite(game.world.centerX,game.world.centerY,2048,600,'himmel');
    background.anchor.setTo(0.5);
    background.scale.setTo(1.5);
    game.stage.backgroundColor = "#c1ffe5";
    
    upKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
    leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
    rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);


    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 500;


    char = game.add.sprite(20,20,'hoch');
    char.scale.setTo(0.25);
    char.enableBody = true;
    game.physics.enable(char,Phaser.Physics.ARCADE);
    char.body.collideWorldBounds = true;
    game.camera.follow(char,Phaser.Camera.FOLLOW_LOCKON);

    floor = game.add.tileSprite(0,500,2048,100,'Boden');
    game.physics.enable(floor,Phaser.Physics.ARCADE);
    floor.enableBody = true;
    floor.body.immovable = true;
    floor.body.allowGravity = false;
} 

function update() {

    game.physics.arcade.collide(char,floor);

    char.body.velocity.x = 0;
    if(upKey.isDown&&char.body.touching.down){
        char.body.velocity.y = -500;
    }
    if(leftKey.isDown){
        char.body.velocity.x = -300;
        char.loadTexture('links');
    } 
    if(rightKey.isDown){
        char.body.velocity.x = 300;
        char.loadTexture('rechts');
    }
}

function render () {
    //game.debug.body(char);
    //game.debug.body(floor);
}
