function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background("#FFFFFF"); // fondo blanco
  
    noStroke(); // sin borde
    fill("#FFFF00"); // color amarillo
    rect(100, 100, 200, 200); // rectángulo amarillo
    fill("#FF69B4"); // color rosa fucsia
   circle(200+sin(frameCount / 20), 200, 200 * sin(frameCount / 20));
    fill("#008000"); // color verde oscuro
    rect(300, 100, 200, 200); // rectángulo verde oscuro
    fill("#00BFFF"); // color azul claro
    ellipse(400, 200, 200 * sin(frameCount / 15), 200); // elipse azul claro
    fill("#FF69B4"); // color rosa fucsia
    rect(300, 100, 200 * sin(frameCount / 15), 200);// rectángulo rosa
    //verde
    fill("#008000"); // color verde oscuro
    ellipse(200, 400, 200, 200 * sin(frameCount / 15), 200);// elipse verde oscuro
    fill("#00BFFF"); // color azul claro
    rect(300, 300, 200, 200 * sin(frameCount / 15), 200);// rectángulo azul claro
    fill("#FFFF00"); // color amarillo
    ellipse(400, 400, 200, 200 * sin(frameCount / 15), 200); // elipse amarillo
  
    //dentro de circula fusia
    noFill();
    stroke(30);
    ellipse(mouseX, mouseY, 200, 200);
  
    noFill();
    stroke(30);
    ellipse(mouseX, mouseY, 150, 150);
    noFill();
    stroke(30);
    ellipse(mouseX, mouseY, 160, 160);
    fill(50)
   
    noFill();
    stroke(30);
    ellipse(mouseX, mouseY, 170, 200 * sin(frameCount / 15), 200);
  
    noFill();
    stroke(30);
    ellipse(mouseX, mouseY, 120, 120);
  
    noFill();
    stroke(30);
    ellipse(mouseX, mouseY, 100, 100);
  
    noFill();
    stroke(30);
    ellipse(mouseX, mouseY, 200, 200);
    {
  push();
      let x = 1
  while ( x<300 ) {
  
  x = x + 50
    noFill();
    stroke(x);
    ellipse(400, 200, x,)
    noFill();
    stroke(20);
    ellipse(400, 200, 190, x);
  
    noFill();
    stroke(30);
    ellipse(200, 200, 190, 200 * sin(frameCount / 15), 200);
  
    noFill();
    stroke(20);
    ellipse(200, 200, 200, 200 * sin(frameCount / 15), 200);
  
    noFill();
    stroke(20);
    ellipse(400, 400, 200, 200 * sin(frameCount / 15), 200);
  
    noFill();
    stroke(23);
    ellipse(x, 400, 190, 200 * sin(frameCount / 15), 200);
    pop();
    
    noFill();
    stroke(34);
    ellipse(201, 400, 200, x * sin(frameCount / 15), 200);
    pop();
    
  }
    /////////////////////////////
    //circulo verde
    //noFill()
      
    stroke(30);
    ellipse(mouseY, mouseX, 180, 180);
    noFill();
    stroke(30);
    ellipse(mouseY,mouseX, 290, 290);
    noFill();
    stroke(30);
    ellipse(mouseY, mouseX, 181, 181);
    noFill();
    stroke(30);
    ellipse(mouseY, mouseX, 182, 182);
    noFill();
    stroke(30);
    ellipse(mouseY, mouseX, 183, 183);
  
    noFill();
    stroke(30);
    ellipse(mouseY, mouseX, 184, 184);
  
    noFill();
    ellipse(mouseY, mouseX, 185, 185);
    stroke(30);
    ellipse(mouseY, mouseX, 186, 186);
    noFill();
    stroke(30);
    ellipse(mouseY, mouseX, 187, 187);
    noFill();
    stroke(30);
    ellipse(mouseY, mouseX, 188, 188);
    noFill();
    stroke(30);
    ellipse(mouseY, mouseX, 189, 189);
    ellipse(mouseY, mouseX, 190, 190);
    noFill();
    stroke(29);
    ellipse(mouseY, mouseX, 200, 200);
    noFill();
    stroke(28);
    ellipse(mouseY, mouseX, 200, 200);
  
    ellipse(mouseY, mouseX, 200, 200);
    noFill();
    stroke(28);
    ellipse(mouseY, mouseX, 200, 200);
    noFill();
    stroke(28);
    ellipse(mouseY, mouseX, 200, 200);
  
    ellipse(mouseY, mouseX, 200, 200);
    noFill();
    stroke(27);
    ellipse(mouseY, mouseX, 200, 200);
    noFill();
    stroke(26);
    ellipse(mouseY, mouseX, 200, 200);
    ////////////////////
    //redondo azul
    fill("green")
    noStroke()
    ellipse(mouseX,mouseY,25,25)
    fill(0,10,100)
    noStroke()
    ellipse(mouseY,mouseX,25,25)
      pop()
    }
    // Coordenadas (coors)
    coors(); // Muestra un texto con las coordenadas en el texto de color rosa
  }
  
  /**
   * Muestra un texto en la parte inferior derecha con la posición del cursor en el lienzo
   *como no sabia como era el log(mouse x y) comenze a buscar en internet como era la escritura correcta y me encontre con esto que me parecio muy bueno.
   * @author: Isaac Blanco <isaacblanco@uoc.edu>
  link:https://editor.p5js.org/isaacblanco/sketches/gkAlwDBo
   */
  function coors() {
    push(); // Nos quedamos con los estilos actuales( segun lo que entendi yo el push y el pop son el el corchete y botella y lo que esta adentro de esta es la informacion *etiquetas para que no se manche nada)
  
    // Medidas recuadro
    const ancho = 54;
    // ni se inmuta
    const alto = 218;
    //arriba y abajo
    const margen = 300;
    // derecha y izquierda
    // Establecemos las caraceristicas gráficas
    textSize(12);
    noStroke();
    textFont("courier new");
  
    // Pintamos el texto
    fill("#FF00FF"); // Fushia
    textAlign(RIGHT);
    text(
      mouseX + "," + mouseY,
      width - ancho - margen,
      height - alto - margen,
      ancho,
      alto
    ); // Pintamos las coordenadas
  
    // Reestablecemos las caracteristicas iniciales
    pop();
  
  }
  