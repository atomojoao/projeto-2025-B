let bolas = [];

function setup() {
  createCanvas(600, 400);
  bolas.push(novaBola(random(width), random(height))); // Bola inicial
}

function draw() {
  background(30);

  for (let bola of bolas) {
    // Movimento
    bola.x += bola.vx;
    bola.y += bola.vy;

    // Rebater nas bordas
    if (bola.x < bola.raio || bola.x > width - bola.raio) {
      bola.vx *= -1;
    }
    if (bola.y < bola.raio || bola.y > height - bola.raio) {
      bola.vy *= -1;
    }

    // Desenhar
    fill(bola.cor);
    noStroke();
    ellipse(bola.x, bola.y, bola.raio * 2);
  }
}

function mousePressed() {
  let novasBolas = [];

  for (let bola of bolas) {
    let d = dist(mouseX, mouseY, bola.x, bola.y);
    if (d < bola.raio) {
      // Muda a cor da bola clicada
      bola.cor = color(random(255), random(255), random(255));

      // Cria nova bola próxima
      let nova = novaBola(bola.x + random(-30, 30), bola.y + random(-30, 30));
      novasBolas.push(nova);
    }
  }

  bolas = bolas.concat(novasBolas);
}

function novaBola(x, y) {
  return {
    x: x,
    y: y,
    raio: 25,
    vx: random(-2, 2),
    vy: random(-2, 2),
    cor: color(random(255), random(255), random(255))
  };
}
