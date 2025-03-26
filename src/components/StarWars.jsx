import { useEffect, useState } from "react";

export const StarWars = () => {
  const [data, setData] = useState(null);
  const getData = async () => {
    try {
      const response = await fetch("https://swapi.dev/api/starships");
      const result = await response.json();
      setData(result);
    } catch (error) {
      throw new Error();
    }
  };
  useEffect(() => {
    const controller = new AbortController();
    getData(controller);
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      StarWars
      {data && data.results ? (
        data.results.map((item) => {
          return <li>{item.name}</li>;
        })
      ) : (
        <p>Loading</p>
      )}
    </div>
  );
};
