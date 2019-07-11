import random
import math


e = math.e
pi = math.pi
ran = random.randint(-10000000000,10000000000)
problem = input("What do you want to calculate? n or no to stop.\n")
while problem != "n" and problem != "no":
    print(eval(problem))
    ran = random.randint(-10000000000,10000000000)
    problem = input("What do you want to calculate? n or no to stop.\n")
print("Thanks for playing. Come back later.\n")
