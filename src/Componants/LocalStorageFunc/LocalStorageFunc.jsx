import React, { useEffect, useState } from "react";

const LocalStorageFunc = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const data = window.localStorage.getItem("user");
    if (data !== null) {
      setUser(JSON.parse(data));
    }
  }, []);

  const callAPI = async () => {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon-species/aegislash"
      );
      const data = await response.json();
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  
  const deleteData = () => {
    window.localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div>
      <button onClick={callAPI}>Call API</button>
      <button onClick={deleteData}>Delete data</button>
      {user && <pre>{JSON.stringify(user, null, 4)}</pre>}
    </div>
  );
};

export default LocalStorageFunc;
