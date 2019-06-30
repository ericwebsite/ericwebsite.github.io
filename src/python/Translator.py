#Ask for binamy or not.
A = input("Translate the number to binary(b) or not((other key))")
B = input("What is the number?")

if A != "b":
    C = int(B, 2)
else:
    C = bin(int(B, 10))
print("{} in {} is {}.".format(B,A,C))
