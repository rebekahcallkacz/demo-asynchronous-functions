import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  // Set this flag to "fakeError" to see what happens when there's an error
  const flag = "noError";

  // Create a promise that uses `setTimeout`
  const getDataWithDelay = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (flag !== "fakeError") {
        resolve("This is my successfully resolved promise!");
      } else {
        reject("My promise was rejected and there is an error");
      }
    }, 2000);
  });
  // Step 1. Get the data only on initial render and console.log it
  // Step 2. Get the data only on initial render and store it in local state
  // Step 3. Once the data is available, display it
  // Step 4. Add a loading indicator
  // Step 5. Handle errors
  // Step 6. Trigger getting the data with the button instead of it happening automatically
  // Step 7. Add a toggle for whether you want the flag to be noError or fakeError

  return (
    <>
      <h1>Asynchronous Functions Demo</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>Add conditionally rendered data here from promise.</p>
      </div>
    </>
  );
}

export default App;
