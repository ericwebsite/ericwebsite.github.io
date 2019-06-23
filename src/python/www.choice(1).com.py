#who's choice
c1 =input("What is the background color?red,orange,yellow,green,blue,purple,black,white,gray")
c2=input("What is the spiril color?")
if c1 != c2:
    degree = input("What spirial degree?")
    import turtle
    turtle.bgcolor(c1)
    t=turtle.Pen()
    t.pencolor(c2)
    for x in range(100):
        t.forward(x)
        t.left(int(degree))

