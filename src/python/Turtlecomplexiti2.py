import turtle
#Get away!!!!!!!!!!!!!!!!!!!!!
colors = ['red','purple','blue','green','yellow','orange','gray','black']
t = turtle.Pen
def star():
    for a in range(8):
        print(a)
        t.forward(100)
        t.left(225)
def tir(b):
    for c in range(3):
        t.forward(b)
        t.left(360/3)
tir(10)

