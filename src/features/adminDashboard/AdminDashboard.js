import { Avatar } from "flowbite-react";
import React from "react";
import AdminHorizon from "../../components/ui/AdminHorizon";
import ProductListing from "../../components/ui/ProductListing";
import AdminDashboardGroup from "./AdminDashboardGroup";
import AdminMenu from "./AdminMenu";

function AdminDashboard() {
  return (
    <div className="flex flex-col min-h-screen pt-10 ">
      <div className="flex gap-4 h-full w-full font-sans ">
        <div className="basis-40 grow-0 rounded-xl bg-black">
          <Avatar />
        </div>
        <AdminMenu />
        <AdminDashboardGroup />
      </div>
      <div className="flex w-full ">
        <div className="w-40"></div>
        <div className="grow border pl-20 mt-4">
          <ProductListing title="คำขอถอนเงิน" more={true} />
          <AdminHorizon />
          <ProductListing title="ที่กำลังดำเนินการ" more={true} />
          <AdminHorizon />
          <ProductListing title="ที่ถูกปฏิเสธ" more={true} />
          <AdminHorizon />
          <ProductListing title="ที่เสร็จสิ้น" more={true} />
          <AdminHorizon />
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
