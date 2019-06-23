
import math

print("welcome to the caculator")
e = math.e
pi = math.pi
problemx = input("what do you want to caculate? n or no to stop.\n")
while problemx != "n" and problemx != "no":
    print(eval(problemx))
    problemx = input("what do you want to caculate? n or no to stop.\n")
print("Thanks for playing. Come back later.\n")
