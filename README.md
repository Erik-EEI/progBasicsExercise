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
// 1. sum the two numbers: 1, 2<br>
const sumNumbers = (num1, num2) => {
  return num1 + num2;
}

exercise.check(1, sumNumbers(1, 2));<br>
// output : EXERCISE 1 ---> CORRECT
```

**PLEASE NOTE THAT THE ANSWER CHECKING METHOD IS UNDER DEVELOPMENT!! IT MAY GIVE YOU FALSE RESULTS !!**