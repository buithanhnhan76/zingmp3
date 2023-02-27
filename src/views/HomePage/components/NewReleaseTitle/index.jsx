// libs
import React from "react";
import { useSelector } from "react-redux";
// child
import SectionTitle from "src/components/SectionTitle";

const NewRelaseTitle = () => {
  const title = useSelector((state) => state.locale.translate.newRelease.title);
  return <SectionTitle>{title}</SectionTitle>;
};

export default NewRelaseTitle;
