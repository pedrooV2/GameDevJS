let imgCenario;
let imgPersonagem;
let cenario;
let som;
let personagem;

function preload(){
  imgCenario = loadImage('imagens/cenario/floresta.png');
  imgPersonagem = loadImage('imagens/personagem/correndo.png');
  som = loadSound('sons/trilha_jogo.mp3');
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new Cenario(imgCenario, 3);
  personagem = new Personagem(imgPersonagem);
  frameRate(40);
  som.play();
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();
}
