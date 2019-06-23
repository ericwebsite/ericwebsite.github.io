
import random

num_of_questions = int(input("How many questions would you like to answer?\n"))
num_of_correct = 0

for i in range(num_of_questions):
    num1 = random.randint(1, 12)
    num2 = random.randint(1, 12)
    answer = int(input("What is {} x {}?\n".format(num1, num2)))
    if answer == num1 * num2:
        num_of_correct = num_of_correct + 1


print ("You answered {} of {} questions correct. ({}%)\n".format(num_of_correct, num_of_questions, num_of_correct * 100 / num_of_questions))

