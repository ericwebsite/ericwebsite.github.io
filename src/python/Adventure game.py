print("Welcome to the temple")
print("You saw a sight that says \n Red first, Green last \n the middle is green, there is 3 presses \n Key in the correct code, or you never win. ")
output = ""
coins = 0
lives = 20
def game_over():
    print("game over")
    global lives
    lives = 0
def lose_a_life(value):
    global lives
    print("You lost", value, " life(s)")
    lives = lives - value
    print("You have ", lives, "lives.")
def win():
    print("You win!")
while output != "rgg":
    add = input("do you want to press red, or green(r or g)")
    if not (add == "r" or add == "g"):
        add = "r"
    output += add
print("Yes")
print("what number is the avertage(mean) of 0.2, 0.20, 0.200, 0.2000, 0.20000? \n A:0.2 \n B:0.3 \n C:0.1 \n D:0.201301543534")
q1 = input("")
if q1 == "A" or q1 == "0.2":
    print("correcto")
    choice1 = input("go left(l), or stay(s)")
    if choice1 == "s":
        print("the groung shook")
        print("Yourleg got stuck. You unstuck it BUT...")
        lose_a_life(12)
    if choice1 == "l":
        print("You fell... ")
        print("...out of the world")
        lose_a_life(20)
        game_over()
    if choice1 != "l" or choice1 != "s":
        print("Good idea, let's walk back")
        choice2 = input("go up(u), or down(d)?")
        import turtle
        t = turtle.Pen()
        if choice2 == "u":
            print("Ouch")
            t.goto(200,200)
            lose_a_life(2)
        if choice2 == "d" or choice2 == "u":
            t.goto(200,-200)
        if lives < 1:
            game_over()
        else:
            win()
else:
    print("You lose!")
    game_over()
