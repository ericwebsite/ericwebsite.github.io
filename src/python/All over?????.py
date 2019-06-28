import turtle
import random
no = 1
print("Shapes all over??????")
t = turtle.Pen()
def square(size):
    for loop in range(4):
        t.forward(size)
        t.left(90)
def circle(size):
    t.circle(size)
def star(size):
    for b in range(8):
        t.forward(size)
        t.left(225)
def tri(size):
    for c in range(3):
        t.forward(size)
        t.left(120)
colors = ["red","orange","yellow","green","blue","purple"]
t.speed(0)
while True:
    for e in range(100):
        co = int(random.randint(0,5))
        s = int(random.randint(0,3))
        x = int(random.randint(-200,200))
        y = int(random.randint(-200,200))
        size2 = int(random.randint(10,100))
        t.penup()
        t.goto(x,y)
        t.pendown()
        t.pencolor(colors[co%6])
        if s == 0:
            circle(size2)
        elif s == 1:
            square(size2)
        elif s == 2:
            star(size2)
        else:
            tri(size2)
    d = input("go to keep going, or other to quit:")
    if not d == "go":
        break
