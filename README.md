Live link: https://assignment-7-three-puce.vercel.app/

### What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax extension for JavaScript that allows writing HTML-like code within JavaScript. It is used in React to describe the UI structure. JSX compiles to 'React.createElement' calls, making component code more readable and closer to the rendered HTML. It enables embedding expressions in curly braces '{}' for dynamic content.

### What is the difference between State and Props?
State: The component’s own changeable data, like its personal memory.

Props: Information handed down from a parent, like inputs a function receives.

### What is the useState hook, and how does it work?
'useState' is a React hook for adding state to functional components. It takes an initial value and returns an array with the current state value and a setter function: 'const [state, setState] = useState(initialValue);'. Calling 'setState' updates the state and schedules a re-render. It preserves state across re-renders but is not shared between components unless lifted up.

### How can you share state between components in React?
- Lift state up: Move shared state to the nearest common ancestor component and pass it down via props (including setter functions for updates).
- Context API: For deeper trees, use 'createContext', 'Provider' to wrap components, and 'useContext' to consume shared state without prop drilling.
- State management libraries: Like Redux or Zustand for global state across unrelated components.

### How is event handling done in React?
- Event handling uses camelCase attributes like 'onClick', 'onChange' on JSX elements,Pass function, not string.

- SyntheticEvent wrapper.

I- nline with arrow functions possible.

- Use e.preventDefault() to stop defaults.

