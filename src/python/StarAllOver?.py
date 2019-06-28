import turtle
import random
t = turtle.Pen()
t.speed(0)
colors = ["red","orange","yellow","green","blue","purple"]
def star(s):
    for sd in range(8):
        t.forward(s)
        t.left(225)
for e in range(100):
    w = random.randint(0,5)
    x = int(random.randint(-200,200))
    y = int(random.randint(-200,200))
    print(colors[w])
    t.penup()
    t.goto(x,y)
    t.pendown()
    t.pencolor(colors[int(w)])
    star(int(random.randint(10,100)))
    
