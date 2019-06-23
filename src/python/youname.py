
color = input("What color would you like\n")


import turtle
t = turtle.Pen()
t.pencolor(color)
for x in range(100):
    t.forward(x)
    t.left(90)
