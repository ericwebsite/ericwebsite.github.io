import random
import string
import math
e = math.e
pi = math.pi
negative_infinity = "negative infinit"
infinity = "forever"
ran = random.randint(-100000000000000,1100000000000000)
while True:
    p = input("What is your problem? type ran if you want. (May type quit): ")
    if p == "quit":
        break
    e = math.e
    pi = math.pi
    infinity = "forever"
    negative_infinity = "negative infinit"
    ran = random.randint(-100000000000000,1100000000000000)
    a = str(eval(p))
    print("The awnswer to "+p+" is "+a)
    
 #Code here runs when user quits.
