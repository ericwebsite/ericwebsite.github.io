import turtle
Fred = turtle.Pen()
turtle.bgcolor("black")
sides = 11
colors = ["red","purple","blue","green","yellow","orange","brown","white","gray","salmon","lemon chiffon"]
for x in range(100):
    Fred.pencolor(colors[x%sides])
    Fred.forward(x * 3 / sides + x)
    Fred.left(360/sides + 1)
    Fred.width(x*sides/200)
