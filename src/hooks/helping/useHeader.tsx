import React from "react";

const useHeader = () => {
  const changeTitle = (title: string) => {
    document.title = title;
  };
  return {
    changeTitle,
  };
};

export default useHeader;
