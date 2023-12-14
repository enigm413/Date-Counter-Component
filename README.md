# Date Counter

### Project Description:

This React application creates a simple date counter that allows users to navigate through dates using buttons and an input field. The application displays the date based on the count provided, either in the past or future from the current date. Users can increment or decrement the count using buttons, adjust the step value using a slider, input a specific count via a text field, and reset the counter to its initial state.

### Date Counter Controls:

- Buttons: Increment (+) and Decrement (-) buttons adjust the date count.
- Text Input: Allows direct input of the count.
- Slider: Changes the step value for incrementing or decrementing the count.
- Date Display:Shows the calculated date based on the current count relative to today's date.
- Reset Functionality:Resets the count and step values to their defaults.
- Functionality: The DateCounter component maintains state variables for the count and step values using React's useState hook.

### Features:

- Functions (handleClickMinus, handleClickPlus, handleSlider, handleText, handleReset) manage the state changes for count, step, and input values based on user interactions.
- The date display adjusts dynamically according to the count input, calculating the date from the current date.
- The UI provides intuitive controls for users to interact with the date counter.

### Technologies:

- React: Utilizes React library to build the user interface and manage component states.
- ReactDOM: Renders the React application into the HTML document.
- CSS: Applies styling to the components using an external stylesheet (index.css).

### Usage:

Users can interact with the buttons, input fields, and slider to manipulate the count and observe the corresponding date changes relative to the current date.
