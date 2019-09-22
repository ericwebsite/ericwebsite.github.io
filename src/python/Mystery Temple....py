#Intro&Time
import time
print("The lost tenple is here...")
time.sleep(3)
GoldKey = "true"
lives = 3
continue1 = "f"
while lives > 0:
    print("You went in.")
    time.sleep(3)
    print("There are 2 pathways and you have 3 lives to start with.")
    time.sleep(6)
    pathway = input("Do you want to go to the left side(l)or the right side(r):")
    while pathway == "l":
        print("The pathway have a dead-end")
        time.sleep(3)
        print("You go back")
        pathway = input("Do you want to go to the left side(l)or the right side(r):")
    while continue1 == "f":
        way = input("left(l) or right(r)")
        if way == "l":
            print("You saw water")
            time.sleep(3)
            continue1 = input("Do you want to continue? Yes(t) or no(f):")
        else:
            continue1 = "t"
    if way == "l":
        lives = lives-1
        GoldKey = "false"
        print(lives)
    else:
        time.sleep(3)
        print("You found a gold key")

    time.sleep(3)
    print("You walk to a gate.")
    time.sleep(3)
    open1 = input("do you want to open the gate? Yes((y)es) or no((n)o). ")
    if GoldKey == "false":
        while open1 == "yes" or open1 == "y":
            time.sleep(3)
            print("It is locked")
            time()
            open1 = input("do you want to open the gate? Yes((y)es) or no((n)o). ")
    else:
        if open1 == "yes" or open1 == "y":
            time.sleep(3)
            print("sucseed, you got a torch!")
            backpack = "torch"
    choice1 = input("What is 2-2+2+3-4+4?")
    if int(choice1) == 2-2+2+3-4+4:
        print("It is dark")
        time.sleep(3)
        if backpack == "torch":
            print("You win!!!!!!:)")
        else:
            print("You lose.:(")
    else:
        choice2 = input("up or down")
        time.sleep(3)
        if choice2 == "up" or choice2 == "u":
            print("You fall a deep fall")
            lives = lives-2
            print(lives)
        print("You win!!!!!!!:)")
    break
if lives == 0:    
    print("You are dead and you lose")
