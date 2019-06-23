import random
print("...cxcxcxc cxcxcxc cxcxcxc cxcxcxc")
print("press 132 to exit")
asks = int(input("what is the number of questains?"))
while asks != 132:
    for w in range(asks):
        
        n1 = random.randint(1,12)
        n2 = random.randint(1, 12)
        product = n1 * n2
        answer = int(input(str(int(w)+1) + ".What is {} / {}? \n".format(product, n1)))
        if answer == n2:
            print("You are right!\n")
        else:
            print("Sorry, you are wrong.\n")
    asks = int(input("what is the number of questains?"))
            
