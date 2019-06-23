import random

print("#########################\n")
print("# Welcome to Black Jack #\n")
print("#########################\n")

min_card = 1
max_card = 10

while True:
    answer = input("Would you like to start new game? (y/n)\n")
    if answer != 'y':
        break
    
    cards =[random.randint(min_card, max_card), random.randint(min_card, max_card)]
    print (" Your cards: ", cards)
    while True:
        answer = input("Would you like a new card? (y/n)\n")
        if answer != 'y':
            break

        cards.append(random.randint(min_card, max_card))
        print (" Your cards: ", cards)

    yourpoints = sum(cards)
    if yourpoints > 21:
        print ("basted!!\n You lose.\n")
    else:
        print ("My turn")

        mypoints = 0
        cards = []
        while mypoints < 15:
            cards.append(random.randint(min_card, max_card))
            mypoints = sum(cards)

        print(" My cards: ", cards)
        if mypoints > 21:
            print("Blasted!! You win\n")


        print ("You: {}, Me: {}".format(yourpoints, mypoints))
        mypoints = sum(cards)
        if (yourpoints >= mypoints):
            print("You win!!\n")
        else:
            print("You lose!!\n")


