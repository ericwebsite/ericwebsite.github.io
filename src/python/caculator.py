import random
import math


e = math.e
pi = math.pi
ran = random.randint(-10000000000,10000000000)
problemx = input("what do you want to caculate? n or no to stop.\n")
while problemx != "n" and problemx != "no":
    print(eval(problemx))
    ran = random.randint(-10000000000,10000000000)
    problemx = input("what do you want to caculate? n or no to stop.\n")
print("Thanks for playing. Come back later.\n")
