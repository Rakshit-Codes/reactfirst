// Importing React Hooks (useState and useEffect) from React library
// useState → to store data (like background color or boxes)
// useEffect → to perform actions when the component loads or updates
import { useState, useEffect } from "react";

function App() {
  // -------------------------
  // 🟢 STATE VARIABLES
  // -------------------------

  // 1️⃣ Store the current background color.
  // getRandomColor() runs once initially to set a random color when the app starts.
  const [bgColor, setBgColor] = useState(getRandomColor());

  // 2️⃣ Store boxes (used to create infinite scroll effect).
  // We start with 10 boxes using Array.from({ length: 10 }).
  const [boxes, setBoxes] = useState(Array.from({ length: 10 }));

  // -------------------------
  // 🎨 FUNCTION: getRandomColor
  // -------------------------
  // Returns a random color from a list whenever called.
  function getRandomColor() {
    const colors = ["#FFB6C1", "#ADD8E6", "#90EE90", "#FFFACD", "#DDA0DD", "#FFA07A"];
    // Math.random() picks a random number between 0–1.
    // Multiplying by colors.length gives a random index.
    return colors[Math.floor(Math.random() * colors.length)];
  }

  // -------------------------
  // 🧱 FUNCTION: loadMoreBoxes
  // -------------------------
  // Called when user scrolls to the bottom.
  // Adds 10 more boxes to the existing list.
  const loadMoreBoxes = () => {
    // setBoxes updates our "boxes" state
    // We spread the previous boxes (...prev) and add 10 new ones.
    setBoxes((prev) => [...prev, ...Array.from({ length: 10 })]);
  };

  // -------------------------
  // 🧭 useEffect: SCROLL DETECTION
  // -------------------------
  // This runs once when the component mounts.
  useEffect(() => {
    // Function to check scroll position
    const handleScroll = () => {
      // Destructuring document.documentElement to get scroll info
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

      // Condition:
      // If the user scrolls close to the bottom (within 100px)
      if (scrollTop + clientHeight >= scrollHeight - 100) {
        loadMoreBoxes(); // Load more boxes
      }
    };

    // Attach event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup function (important for performance)
    // Removes the scroll listener when the component is removed.
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Empty dependency array → runs only once when app loads

  // -------------------------
  // 🎨 FUNCTION: handleChangeColor
  // -------------------------
  // Called when button is clicked → changes background color.
  const handleChangeColor = () => {
    setBgColor(getRandomColor());
  };

  // -------------------------
  // 🧩 UI SECTION (JSX)
  // -------------------------
  return (
    // Main app container
    <div
      className="app"
      style={{
        backgroundColor: bgColor, // Dynamic background color
        minHeight: "100vh", // Ensures it fills full screen height
        transition: "background-color 0.5s ease", // Smooth color transition
      }}
    >
      {/* Heading */}
      <h1 className="title">Infinite Scroll + Background Change</h1>

      {/* Small note under title */}
      <p className="subtitle">(Scroll down to load more boxes with infinite scroll)</p>

      {/* Button to change color manually */}
      <button className="btn" onClick={handleChangeColor}>
        Change Background Color
      </button>

      {/* Boxes container */}
      <div className="boxes">
        {/* boxes.map() → Loops through "boxes" array and renders one box per item */}
        {boxes.map((_, index) => (
          <div key={index} className="box">
            Box #{index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

// Export App so it can be imported in main.jsx
export default App;
