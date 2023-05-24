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




USE OF CUSTOM BUILT METHODS FOR ANSWER CHECKING
-----------------------------------------------

1. Locate the exercises - enter ./exercises/exercise_*_******.js file and start an exercise.

2. after you have finished an exercise, you can check if your souliton is correct with the **exercise.check()** method.

simply write **exercise.check([task id], [your solution]);** after the exercise.<br>
for example:<br>

// 1. sum the two numbers: 1, 2<br>
const sumNumbers = ( num1, num2 ) =>{<br>
    return num1 + num2;<br>
}

exercise.check( 1, sumNumbers( 1, 2 ));<br>
<em>// output : EXERCISE 1 ---> CORRECT</em><br>

 <span style='color: red;'>**PLEASE NOTE THAT THE ANSWER CHECKING METHOD IS UNDER DEVELOPMENT!! IT MAY GIVE YOU FALSE RESULTS !!**</span>