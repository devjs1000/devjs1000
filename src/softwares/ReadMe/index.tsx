import React, { useEffect } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { Box, Spinner } from "@chakra-ui/react";
import parse from "html-react-parser";

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

  if (!data) return <Spinner />;

  return <Box w={"100vw"}>{parse(data)}</Box>;
};

export default ReadMe;
