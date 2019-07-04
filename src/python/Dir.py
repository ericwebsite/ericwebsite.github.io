print("print,upper,lower,fformat,imporgt(,quit,or fix)")
a = True
b = False
while a :
    f = input("choose1")
    if f == "quit":
        a == False
    elif f == "print":
        print("prints stuff out, see Adventure Game.")
    elif f == "fformat" or f == "inporgt":
        print('Try to choose "fix" next.')
    elif f == "upper":
        print("makes stuff UPPERCASE, try Encoder And Decoder.")
    elif f == "lower":
        print('makes stuff lowercase, try " "A".lower".')
    elif b and f == "format":
        print("puts inputs into strings the hard way. use Translator.")
    elif b and f == "import":
        print("installs moldules like turtle for special new commands")
    elif f == "fix":
        b = True
    else:
        print(str(f)+" is not put in this program")
    if b:
        print("print,upper,lower,format,import(,quit,or fix)")
    else:
        print("print,upper,lower,fformat,imporgt(,quit,or fix)")
