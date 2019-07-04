#Color? Rainbow? PYTHON!!!!!!?!?!?????
import turtle #Import, turtle!!!!!!!!!!!!!!!
w = 1
t = turtle.Pen()#t or turtle.Pen()?
t.speed(0)  #Go fast----------------------------------->!
turtle.bgcolor("black")#bg means background
colors=["red","orange","yellow","green","blue","purple"]
while True:
    turtle.onscreenclick(t.setpos)
    turtle.onscreenclick(t.pencolor(colors[w%6]))
    
    w = w+1
