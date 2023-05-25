# Programming Basics Exercises

██████╗░██████╗░░█████╗░░██████╗░██████╗░░█████╗░░██████╗██╗░█████╗░░████
██╔══██╗██╔══██╗██╔══██╗██╔════╝░██╔══██╗██╔══██╗██╔════╝██║██╔══██╗██╔══
██████╔╝██████╔╝██║░░██║██║░░██╗░██████╦╝███████║╚█████╗░██║██║░░╚═╝╚████
██╔═══╝░██╔══██╗██║░░██║██║░░╚██╗██╔══██╗██╔══██║░╚═══██╗██║██║░░██╗░╚═══
██║░░░░░██║░░██║╚█████╔╝╚██████╔╝██████╦╝██║░░██║██████╔╝██║╚█████╔╝█████
╚═╝░░░░░╚═╝░░╚═╝░╚════╝░░╚═════╝░╚═════╝░╚═╝░░╚═╝╚═════╝░╚═╝░╚════╝░╚════

███████╗██╗░░██╗███████╗██████╗░░█████╗░██╗░██████╗███████╗░██████╗
██╔════╝╚██╗██╔╝██╔════╝██╔══██╗██╔══██╗██║██╔════╝██╔════╝██╔════╝
█████╗░░░╚███╔╝░█████╗░░██████╔╝██║░░╚═╝██║╚█████╗░█████╗░░╚█████╗░
██╔══╝░░░██╔██╗░██╔══╝░░██╔══██╗██║░░██╗██║░╚═══██╗██╔══╝░░░╚═══██╗
███████╗██╔╝╚██╗███████╗██║░░██║╚█████╔╝██║██████╔╝███████╗██████╔╝
╚══════╝╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝░╚════╝░╚═╝╚═════╝░╚══════╝╚═════╝░

By : Erik-EEI

How to use custom built-in methods for checking your answers
-----------------------------------------------

1. Locate the exercises - enter ```./exercises/exercises_*_******.js``` file and start an exercise.

2. After you have finished an exercise, you can check if your solution is correct with the ```exercise.check()``` method.
+ Simply write ```exercise.check([task id], [your solution]);``` after the exercise.
+ For example:
```javascript
// 1. sum the two numbers: 1, 2
const sumNumbers = (num1, num2) => {
  return num1 + num2;
}

exercise.check(1, sumNumbers(1, 2));<br>
// output : EXERCISE 1 ---> CORRECT
```
+ For a full example, see the first task in the ```exercises_1_Arrays.js`` file.

3. Run the file 
+ In the terminal navigate to the ```exercises``` folder with ```cd exercises/``` command.
+ Run the file you are currently working on with ```node yourfile``` command.
> If you did everything right the console should print : ```TASK [id] ---> CORRECT```

**PLEASE NOTE THAT THE ANSWER CHECKING METHOD IS UNDER DEVELOPMENT!! IT MAY GIVE YOU FALSE RESULTS !!**
<br>
<br>
<br>
<br>


How to read correctly the solutions-extra-2 file in the pa-practice folder
-----------------------------------------------
1. Locate the file - enter ```./pa-practice/``` folder.
2. Right click the ```solutions-extra-2.md``` file and click : ``Open preview``.