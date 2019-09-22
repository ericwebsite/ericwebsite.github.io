keep_going = "Yes"
while not (keep_going == "No"):
    dividend = int(input("How many files are there? \n"))
    divisor = int(input("How many folders are there? \n"))
    quotient = dividend / divisor
    reminder = dividend % divisor
    quotient = int(quotient);
    if reminder != 0:
        if quotient != 1:
            if reminder == 1:
                print("put " + str(int(quotient)) + " files in each folder with " + str(reminder) + " folder left. ")
            else:
                print("put " + str(int(quotient)) + " files in each folder with " + str(reminder) + " folders left")
        else:
            if reminder == 1:
                print("put " + str(int(quotient)) + " file in each folder with " + str(reminder) + " folder left. ")
            else:
                print("put " + str(int(quotient)) + " file in each folder with " + str(reminder) + " folders left")
    else:
        if quotient != 1:
            print("put " + str(int(quotient)) + " files in each folder. ")
        else:
            print("put " + str(int(quotient)) + " file in each folder. ")
    keep_going = input("Do you want to quit? Yes or No? \n")
    while not(keep_going == "Yes" or keep_going == "No"):
        keep_going = input("SyntaxError: invalid syntax \nDo you want to quit? Yes or No? \n")
#For more, go to File>Recent Files>1/users/yinglongwang/github/ericwebsite.githu
#b.io/src/python/RenameFiles.py
