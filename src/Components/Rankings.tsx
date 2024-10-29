import React from "react";
import Table from "./Table";
import Header from "./Wids/Header";

const Rankings: React.FC = () => {
  return (
    <div className="  w-screen h-screen overflow-y-auto min-h-screen absolute">
      <Header />
      <Table />
    </div>
  );
};

export default Rankings;
