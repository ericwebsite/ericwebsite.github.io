import turtle

up = input(True)

c=turtle.Pen('turtle')
c.speed(0)
c.turtlesize(2,2,2)

def left():
    left_rule = int(input("How many degrees?"))
    c.left(left_rule)

    
def forward():
    foreward_rule = int(input("How many pixels?"))
    c.forward(foreward_rule)

    
def right():
    right_rule = int(input("How many degrees?"))
    c.right(right_rule)

    
def pen():
    if up == True:
        up == eval(input(1))
        c.penup
    else:
        up == eval(input(True))


turtle.onkeypress(forward, "Up")
turtle.onkeypress(left, "Left")
turtle.onkeypress(right, "Right")
turtle.onkeypress(pen, " ")
turtle.listen()
