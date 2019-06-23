import random
the_number =random.randint(1, 10)
guess = int(input("Guess a number bwetween 1 and 10: "))
while guess != the_number:
    if guess > the_number:
        print(guess, "was too high. Try again.")
    if guess < the_number:
        print(guess, "was too high. Try again.")
    guess = int(input("Guess again: "))
print(guess, "was the number. You win.")
