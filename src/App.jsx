import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isFakingError, setIsFakingError] = useState(true);
  const [delayedData, setDelayedData] = useState({
    isLoading: false,
    isErrored: false,
    data: undefined,
  });

  // Create a promise that uses `setTimeout`
  const dataWithDelayPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isFakingError) {
        resolve("This is my successfully resolved promise!");
      } else {
        reject("My promise was rejected and there is an error");
      }
    }, 2000);
  });

  const getDataWithDelay = () => {
    const initialData = delayedData.data;
    setDelayedData({ data: initialData, isLoading: true });
    dataWithDelayPromise
      .then((data) =>
        setDelayedData({ data: data, isLoading: false, isErrored: false })
      )
      .catch((error) => {
        console.log(error);
        setDelayedData({ data: null, isLoading: false, isErrored: true });
      });
  };

  useEffect(() => {
    getDataWithDelay();
  }, []);

  // Step 1. Get the data only on initial render and console.log it
  // Step 2. Get the data only on initial render and store it in local state
  // Step 3. Once the data is available, display it
  // Step 4. Add a loading indicator
  // Step 5. Handle errors
  // Step 6. Trigger getting the data again with the button
  // Step 7. Add a toggle for whether you want the flag to be noError or fakeError

  return (
    <>
      <h1>Asynchronous Functions Demo</h1>
      <div className="card">
        {isFakingError && <p>We are currently faking an error.</p>}
        <button
          onClick={() => {
            setIsFakingError(!isFakingError);
          }}
        >
          {isFakingError ? "Remove the Error" : "Fake an Error"}
        </button>
        <button
          disabled={delayedData.isLoading}
          onClick={() => {
            getDataWithDelay();
          }}
        >
          Get the data again!
        </button>
        {delayedData.isLoading && <p>The data is loading...</p>}
        {delayedData.data && <p>{delayedData.data}</p>}
        {delayedData.isErrored && (
          <p>We tried to get the data but there was an error :(</p>
        )}
      </div>
    </>
  );
}

export default App;
