import React, { useEffect } from "react";
import axios from "axios";
const ReadMe = () => {
  const [data, setData] = React.useState(null);
  const fetchData = async () => {
    const result = await axios.get(
      "https://raw.githubusercontent.com/devjs1000/devjs1000/master/README.md"
    );
    console.log(data);
    setData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div>{data}</div>;
};

export default ReadMe;
