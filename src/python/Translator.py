#Ask for binamy or not.
A = input("Is the number binamy(b) or not((other key))")
B = input("What is the number(say 0b before a binamy number)?")
if A == "b":
    C = int(B)
else:
    C = bin(B)
print("{} in {} is {}.",format(B,A,C))
