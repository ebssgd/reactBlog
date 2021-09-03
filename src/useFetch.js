import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch the data.");
        }
        return res.json();
      })
      .then((data) => {
        //console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("Fetch aborted");
        }
        setIsPending(false);
        setError(err.message);
      });

    return () => abortCont.abort;
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;

//The abort controller will stop the current fetch from running
//if you try and switch pages too quick, you will get an error since
//React is trying to update the state of a page that is no longer on the DOM
// abort controller helps to keep that error from happening.
