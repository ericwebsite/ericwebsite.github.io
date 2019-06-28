import turtle
colors = ['red','purple','blue','green','yellow','orange']
t = turtle.Turtle(turtle)
for d in range(36):
    for v in range(6):
        t.color(colors[i%6])
        t.forward(100)
        t.left(60)
    t.right(10)
