import React from "react";

function AdminHorizon() {
  return (
    <div className="bg-mermaid-net/30 flex rounded-3xl h-30 py-5 pl-5 pr-10">
      <div className=" grow-[2] flex">
        <img
          className="h-40"
          src={
            "https://www.brandbuffet.in.th/wp-content/uploads/2020/08/Doraemon-Cartoon-Character-542x420.jpg"
          }
          alt="Seller"
        />
        <div className="border-l-2 ml-2 h-full  border-white"></div>
      </div>
      <div className="flex  justify-end grow ml-4">
        <h1>฿ 10,000</h1>
      </div>
    </div>
  );
}

export default AdminHorizon;
