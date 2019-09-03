#The guess-the-word game.
print("Welcome to the \"guess-the-word game.\"")
player1 = input("Please Type the name of player 1. ")
player2 = input("Please Type the name of player 2. ")
known = []
allKnown = False
elm = None
number = 0
lives = 10
playerInput = "yes"
def read_input(input2, elem, num, output):
    global elm
    global number
    number = 0
    for elm in input2:
        if elm == output:
            return True
        else:
            number += 1
    return False

#The folloing has no code and is not used. Do not replace pass with anything. 
def guess_the_word():
    pass
while playerInput == "yes":
    lives = 10
    input1 = input(player1 + ", enter the word " + player2 + " is trying to guess. ")
    known = []
    for x in range(len(input1)):
        known.append(False)
    while lives > 0 and allKnown == False:
        for x in range(len(input1)):
            if known[x] == False:
                print("_")
            else:
                print(known[x])
        letter = input(player2 + ", enter a character")
        output = read_input(input1, elm, number, letter)
        if output == True:
            known[number] = elm
        else:
            lives -= 1
            print("lives × " + str(lives))
        for x in range(len(input1)):
            if known[x] == False:
                break
            else:
                if x == len(input1):
                    allKnown = True
    if lives == 0:
        print("Nice try, but " + player2 + " lost. The word is " + input1);
    else:
        print(player2 + " won! ")
    playerInput = input("Do you want to play again? yes or no?\n")
