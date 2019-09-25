



void setup() {
    size(800, 600);
    var x = 400;
    var y = 300;
    background(100, 100, 200);
}

void draw(){





      if (mouseX < 550 && mouseX > 400 && mouseY < 250 && mouseY > 200 && mousePressed){

        fill(50, 50, 255/2);
      }else{
        fill(100, 100, 255);
      }
      rect(x, y, 150, 50);
      quad(x, y, x, y + 50, x - 30, y + 80, x - 30, y + 30);
      quad(x+150, y+50, x, y + 50, x - 30, y + 80, x+120, y + 80);
      fill(0, 0, 0);
      text("play!", x+50, y+25);
}


