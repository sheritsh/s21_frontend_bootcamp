# Day 06 - Frontend boot camp

React basics, Virtual DOM, CRA, Class-based and functional components, Component lifecycle methods, JSX, Props, React hooks, Synthetic events, Rendering lists and conditions

## **Task 1**

You need to write a small single-page application (SPA) without using a backend. After installing CRA and initializing the project with it, clear out all the "extra" code. The task is as follows: on the main page, there are 2 buttons: \
 `-` ‘Stopwatch’ when you click on this button, a component with the same name is displayed, and it contains a stopwatch. The stopwatch measures and displays the time in the format hh:mm:ss. If the component is not displayed, the setInterval (if you decided to use it) should be cleared from the browser's stack. \
 `-` ’StudentInfo’ when you click the button, a component with the same name is also displayed, which contains information about you - Full Name, Age, and a Photo. This component is displayed by default when the page is loaded.

## **Task 2**

Now, let's improve our application a bit. You'll need to write a new component called 'SomeList'. Add two buttons to the Stopwatch component that will be displayed below the 'stopwatch face': \
 `-` ‘Add’. When you click on this button, the current time result will be added to the list of values in the SomeList component. \
 `-` ‘Reset’. When you click the button, all values in SomeList will be cleared.

The list of values in SomeList is initially empty until the user adds some results to it. When the stopwatch component is closed, the list is reset.

## Solution

[src files](src/)

**Deploy**: https://sheritsh.github.io/s21_frontend_bootcamp/
