/*
                                        React Essentils
in this project i will learn the most 4 fundamental concepts every react developer must understant.
Components | JSX | Props | State.
some problems react solived
-- UI Complexity --> Describing the UI
-- Slow DOM Operation --> Virtual DOM
-- Messy Date Flow --> Unidirection Data Flow
-- Repetitive Code --> Reusable Component

React is a JavaScript library for rendering user interfaces (Ui).
UI is built from small units like buttons, text, and images, React lets you combine them into reusable, nestable components.
 From web sites to phone apps, everything on the screen can be broken down into components.
React applications are built from isolated pieces of UI called components.
What a component is?
-- Is a UI building blocks.
-- On the Web, HTML lets us create rich structured documents with its built-in set of tags like <h1> and <li>:
-- <article>
        <h1>My First Component</h1>
        <ol>
            <li>Components: UI Building Blocks</li>
            <li>Defining a Component</li>
            <li>Using a Component</li>
        </ol>
    </article>
    Markup like this, combined with CSS for style, and JavaScript for interactivity. lies behind every piece of UI you see on the Web.
-- React lets you combine your markup, CSS, and JavaScript into custom “components”, reusable UI elements for your app
    <PageLayout>
        <NavigationHeader>
            <SearchBar />
            <Link to="/docs">Docs</Link>
        </NavigationHeader>
        <Sidebar />
        <PageContent>
            <TableOfContents />
            <DocumentationText />
        </PageContent>
    </  PageLayout>
-- a React component is a JavaScript function that you can sprinkle with markup
-- how to build a component:
    1: Export the component 
    2: Define the function 
    3: Add markup 
  React components are regular JavaScript functions, but their names must start with a capital letter or they won’t work!
    return (
        <div>
            <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />
        </div>
    );
    (HTML + CSS + JavaScript) = React Component / JSX
// What role components play in a React application.
// How to write your first React component.

*/

/*
        What the differences between map() and forEach()
map() => return a new array by performing a function on each element of the existing array.
ex:
const originalArray = [1, 2, 3, 4, 5];
const doubledArray = originalArray.map((num) => num * 2);
console.log(doubledArray); // Output: [2, 4, 6, 8, 10];
--
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
forEach() => return None (undefined). it execute a function on each element of an array. It does not create a new array like map() does, but instead performs an action on each element of the existing array.
ex:
const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
*/

// State in React
/**
 *                                          State: A Component's Memory
 * In React, "state" refers to an object that represents the parts of your application that can change over time.
 * It is a way to manage and store data that can be updated and affect the rendering of your components.
 * Understanding and working with state is fundamental to building dynamic and interactive user interfaces in React.
 * Components need to “remember” things In React, this kind of component-specific memory is called state.
 *
 * Why normal \ local variable is not good for it?
    - Local variables don’t persist between renders.
    - Changes to local variables won’t trigger renders.
    -- When React renders this component a second time, it renders it from scratch—it doesn’t consider any changes to the local variables.
    -- React doesn’t realize it needs to render the component again with the new data.

 * To update a component with new data, two things need to happen:
    Retain the data between renders.
    Trigger React to render the component with new data (re-rendering).
 *
 *
 * First Waht is Hook?
  -- Allow me to Use different React features from your components.
  -- Hooks are functions that let you “hook into” React state and lifecycle features from function components. 
  -- it always start with (use) keyword.
 *
 * 
 *                      useState() 
 * The useState (Hook) provides those two things:
    A state variable to retain the data between renders.
    A state setter function to update the variable and trigger React to render the component again.
 * const [state, setState] = useState(initialState)
 *
 * 
 * 
 * 
 * 
 * 
 */
