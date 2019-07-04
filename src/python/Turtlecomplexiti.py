import turtle
spiril = input("Circles(c,circles) or squares(square,s)")
print("working...")
pen = turtle.Pen()
pen.speed(0)
if spiril == 'c' or spiril == 'circle':
    for a in range(100):
        pen.circle(a)
        pen.left(91)
elif spiril == 's' or spiril == 'square':
    for b in range(100):
        pen.forward(b)
        pen.left(90)
else:
    print("NOT ALOUD!!!!!!!!!!!!!!!!!!!!!")
print("okay,we are done")
