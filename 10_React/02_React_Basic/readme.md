# Notes
## What is React:
## Why React
    - Very fase
    - Easy event handling(shortcut)
    - it is small lib
    - it manage UI by states 
## Component
    - it is a basically isolated, reuseable, independent piece of code just like function 
    - type of component
        - 1. functional component (hooks, state Dynamic)
        - 2. class component (state,render)
## JSX
    - HTML + JS => is called JS
    - A syntax used in React that lets you write HTML inside JavaScript.
    - JSX Rule (What is not Allowed):
            - 1. no function and varibale declaration 
            - 2. No Loop (for , while etc) (Solution: Map & Filter Use)
            - 3. if - else not allowed (Solution: Ternary Operator)
            - 4. no Object render allowed (Solution: Array Render)
## class component (Dynamic):
    1. state: 
        - React obj
        - info/properties of React component
    2. render: 
        - displayed of UI
        - whenever state is changed , render is called
    3. Life cycle Methods:
        Mounting(first time on DOM)     |        Updating(state change)             |       unmouting
         - Construcutor()               |          render()                         |           componentDidupdate() 
              |                         |             |                             |  
              |                         |             |                             |  
              v                         |             v                             |  
         - render()                     |        componentDidupdate()               |  
              |                         |                                           |  
              |                         |                                           |  
              v                         |                                           |  
         - componentdidMount()          |                                           |  
    4. Routing
        Browser Router
        Route
        Switch
        exact
        link
        Render
## Functional Component:
    - useState
    - useEffect
## Context API
    => 

