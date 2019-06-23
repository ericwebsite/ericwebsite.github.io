import turtle

t = turtle.Pen()
for x in range(100):
    t.forward(x)
    t.left(90)
turtle.getscreen().getcanvas().postscript(file='outputname.ps')
turtle.done()