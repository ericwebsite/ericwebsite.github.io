

    var bgcolor = color(204, 199, 196);
    background(bgcolor);

    var turn = 1; // 1 = x, 2 = o
    var win = 0;
    var name1 = "1";
    var name2 = "2";
    int[] places = {0, 0, 0, 0, 0, 0, 0, 0, 0, }; // 1 = x, 2 = o, 0 = not occupied
    var XColor = color(255, 0, 0);
    var circleColor = color(0, 0, 255);

void setup() {
    var turn = 1; // 1 = x, 2 = o
    var win = 0;
    places = {0, 0, 0, 0, 0, 0, 0, 0, 0, }; // 1 = x, 2 = o, 0 = not occupied

    size(600, 600);
    var bgcolor = color(204, 199, 196);
    background(bgcolor);
    var r = 0;
    var g = 0;
    var b = 0;
    fill(0, 0, 0);
    rect(200-10, 0, 20, 600);
    rect(400-10, 0, 20, 600);
    rect(0, 200-10, 600, 20);
    rect(0, 400-10, 600, 20);
    var mouseClicked;
}

void drawName(p1, p2) {
    name1 = p1;
    name2 = p2;
    println(name1 + " is Xs");
    println(name2 + " is Os");
    var names = [name1, name2];
}

void draw(){
}

int squreClicked(mouseX, mouseY) {
    int square = int(mouseX / 200);
    square = square + int(mouseY / 200) * 3;
    return square;
}

void drawPiece(square) {
    x = (square % 3) * 200 + 10;
    y = int(square / 3) * 200 + 10;
    if (turn === 1) {
        stroke(XColor);
        line(x, y, x + 180, y + 180);
        line(x, y + 180, x + 180 , y);
    }

    if (turn === 2) {
        stroke(circleColor);
        fill(bgcolor);
        ellipse(x + 90, y + 90, 180, 180);
    }
}

// checks if valid square is clicked.
// Parameters
// mouse, for whose turn.
void civsic(mouseX, mouseY, theTurn){

    if (win != 0) {
        setup();
    }
    int square = squreClicked(mouseX, mouseY);
    if (places[square] === 0) {
        places[square] = theTurn;
        drawPiece(square, theTurn);
        checkwin();
          if(theTurn === 1){           //take turns
            turn = 2;
          }else if( theTurn === 2){
            turn = 1;
          }
    } else {
        println("Square " + square + " is taken");
    }
}

void winner(winner) {
    win= winner;
    if (win === 1) {
        println("Player " + name1 + " Win!");
    } else if (win === 2) {
        println("Player " + name2 + " Win!");
    } else if (win === 3) {
        println("Draw");
    }
}

void checkwin() {
    for (int i = 0; i < 3; i ++) {
        if (places[i] != 0 && places[i] === places[i+3] && places[i] === places[i+6]) {
            winner(places[i]);
            return;
        }
    }

    for (int i = 0; i < 9; i = i + 3) {
        if (places[i] != 0 && places[i] === places[i+1] && places[i] === places[i+2]) {
            winner(places[i]);
            return;
        }
    }

    if (places[0] != 0 && places[0] === places[4] && places[8] === places[0]) {
        winner(places[0]);
        return;
    }

    if (places[2] != 0 && places[2] === places[4] && places[6] === places[2]) {
        winner(places[2]);
        return;
    }

    for (int i = 0; i < 9; i++) {
        if (places[i] === 0) {
            win = 0;
            return;
        }
    }

    winner(3);
}


void mouseClicked() {
  fill(bgcolor);
  civsic(mouseX, mouseY, turn);
}

