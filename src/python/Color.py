#Color? Rainbow? PYTHON!!!!!!?!?!?????
import turtle
#Import, turtle!!!!!!!!!!!!!!!
w = 1
t = turtle.Pen()
#t or turtle.Pen()?
t.speed(0)
#Go fast----------------------------------->!
turtle.bgcolor("black")
#bg means background
colors = ["red", "orange", "yellow", "green", "blue", "purple"]
while True:
    onscreenclick(t.setpos)
    onscreenclick(t.pencolor(colors[w % 6]))
    
    onsceenclick(w=w+1)
