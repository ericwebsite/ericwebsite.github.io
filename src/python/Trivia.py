import random
import time
pre = False
keep = True
w = "p"
print("trivia time!!!!!!!!!!!!!!!")
print("Hmmm...")
time.sleep(3)
m = input("Free(f), or preium(p)?: ")
if m == w:
    wait = input("press enter with any key when you pay Eric Wang money.")
    pre = True
    print("Hmmm...")
que = ["2+2=","The area of a pentagon with sides of 20 inches in inches is"]
if pre:
    while keep:
        c = int(random.randint(0,1))
        d = int(random.randint(0,1))
        if c == 1:
            a = int(input(que[d]+": "))
            if d == 0:
                if a == 4:
                    print("correcto")
                else:
                    print("incorrect")
            else:
                if a == 100:
                    print("correcto")
                else:
                    print("incorrect")
        else:
            n = str(random.randint(1,12))
            m = str(random.randint(1,12))
            a = int(input("What is "+n+"*"+m+":"))
            if a == int(n)*int(m):
                print("correcto")
            else:
                print("incorrect")
        keep2 = input("Go(g), or quit.: ")
        if keep2 != "g":
            keep = False
else:
    d2 = int(random.randint(0,1))
    a = int(input(que[d2]))
    if d2 == 0:
        a = int(input(que[d]+": "))
        if a == 4:
            print("correcto")
        else:
            print("incorrect")
    else:
        if a == 100:
            print("correcto")
        else:
            print("incorrect")
