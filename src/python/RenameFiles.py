#escapings: \\, \n, \", and \'. May be \''' or/and \"""
#num = int(input("How many files do you have? \n"))
#for x in range(num):
#    file = input("Copy this into file name: \nCars" + str((x + 1)) + ".mp4 \n")
#print("Done");
#For more, go to File>Recent Files>1/users/yinglongwang/github/ericwebsite.githu
#b.io/src/python/splitFilles.py

from os import walk
import shutil

def find_files(folder):
    f = []
    for (dirpath, dirnames, filenames) in walk(folder):
        for file in filenames:
            if ".mp4" in file:
                f.append(dirpath + '/' + file)
    return f

def rename_and_copy_files(src, dest, label):
    files = find_files(src + label)
    counter = 1
    for file in files:
        # print (file)
        # TODO_: rename and copy file
        # TODO_: copy file from <file> to <>
        #
        # to
        # dest + ("/test" or "/train") + label + new file name
        if counter % 2 == 1:
            dest_file = dest + '/test/' + label + '/' + str(counter) + '.mp4'
        else:
            dest_file = dest + '/train/' + label + '/' + str(counter) + '.mp4'
        shutil.copy(file, dest_file)
        counter += 1

        print("from: " + file + "\nto: " + dest_file)

def main():
    rename_and_copy_files("/Users/yinglongwang/OneDrive/FamilySharedFolder/CarClassfication/oldvideos/20190910/", "/Users/yinglongwang/OneDrive/FamilySharedFolder/CarClassfication/cleanvideos", "01")
    rename_and_copy_files("/Users/yinglongwang/OneDrive/FamilySharedFolder/CarClassfication/oldvideos/20190910/", "/Users/yinglongwang/OneDrive/FamilySharedFolder/CarClassfication/cleanvideos", "02")
  
if __name__== "__main__":
  main()
