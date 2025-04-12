# Wcat 🚀🚀

it is used to diaply or make a copy content of one or more files in terminal 

## Commands:
1- wcat filepath => display content of the file in the terminal 
2- wcate fileppath1 filepath2 filepath3.... => display content of all files in the terminal(contactina form) in the given order 
3- wcate -s filepath => convert big line breaks into a singular line break
4- wcate -n filepath => give numbering to all the lines
5- wcate -b filepath => give numbering to no-empty lines
6- wcate  filepath > filename2path => put all the content of filename into filename2 by overriding and also creates if it doesn't exist
7- wcat filename2path >> filename2path => append all the content of filename into filename2
8- node wcat -s filename > filename2 => get thefile content of filename remove large spaces and saved output in filename2

we can mix and match the option 

## Edge cases
1- if file entered is not found then it gives file does not exist error
2- -n and 0b are 2 options available together then command should give you an 