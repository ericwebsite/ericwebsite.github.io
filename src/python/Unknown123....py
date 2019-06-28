import random
import turtle
pen = turtle.Pen()
colors = ["red","yellow","orange","purple","green","blue"]
ran = int(random.randint(0,5))
a = "4"
while a != "quit":
    pen.pencolor(colors[ran])
    x = int(random.randint(-200,200))
    y = int(random.randint(-200,200))
    pen.goto(x,y)
    ran = int(random.randint(0,5))
    a = input("exit by quit or other key to continue")
