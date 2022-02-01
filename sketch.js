//variáveis
var pessoa, pessoaImg;
var edges;
var chao, chaoImg;

function preload() {
  //imagens pré-carregadas
  pessoaImg = loadAnimation("runner-2.png", "runner-1.png");
  chaoImg = loadImage("path.png");
}

function setup() {
  //crie sprite aqui 
  createCanvas(400, 400);

  edges = createSprite(0,0,100,800);
 edges.visible = false;

  edges = createSprite(410,0,100,800);
  edges.visible = false;

  //criando o pessoa
  pessoa = createSprite(180, 340, 30, 30);
  pessoa.addAnimation("correndo", pessoaImg);
  pessoa.scale = 0.08;

  chao = createSprite(200,200,390,390);
  chao.addImage("solo", chaoImg);

  //definindo limites
  edges = createEdgeSprites();
}
function draw() {
  background('black');

  chao.velocityY = 7;

  if(chao.y>400){
     chao.y = pessoa.width / 2;

   }
  drawSprites();

  chao.depth = pessoa.depth;
pessoa.depth = pessoa.depth +1;

pessoa.x = World.mouseX;
}


