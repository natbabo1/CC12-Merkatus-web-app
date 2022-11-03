import React, { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import ProductListing from "../../components/ui/ProductListing";
import Avatar from "../../components/ui/Avatar";
import RequestCard from "./RequestCard";
import AdminDashboardGroup from "./AdminDashboardGroup";
import AdminMenu from "./AdminMenu";
import * as withdrawService from "../../api/withdrawApi";
import { ACCEPTED, COMPLETED, PENDING, REJECTED } from "../../utils/constaint";
import { listingNameAdmin } from "../../utils/listingName";
import { useModal } from "../../contexts/ModalContext";
import ConfirmWithdrawForm from "./ConfirmWithdrawForm";

function AdminDashboard() {
  const {
    user: { profileImage }
  } = useAuth();
  const { openFormModal } = useModal();

  const [requests, setRequests] = useState([]);
  const [filter, setFilter] = useState(false);

  const pendingRequests = useMemo(
    () => requests.filter((req) => req.status === PENDING),
    [requests]
  );

  const acceptedRequests = useMemo(
    () => requests.filter((req) => req.status === ACCEPTED),
    [requests]
  );

  const completedRequests = useMemo(
    () => requests.filter((req) => req.status === COMPLETED),
    [requests]
  );

  const rejectedRequests = useMemo(
    () => requests.filter((req) => req.status === REJECTED),
    [requests]
  );

  const listingName = useMemo(() => listingNameAdmin(filter), [filter]);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await withdrawService.getAllRequests();
        setRequests(res.data.requests);
      } catch (err) {
        console.log(err);
        toast.error(err.response?.data?.message);
      }
    };

    fetchRequests();
  }, []);

  const acceptRequest = async (request) => {
    try {
      const {
        data: { request: newRequest }
      } = await withdrawService.acceptRequest(request.id);
      setRequests((prev) =>
        prev.map((item) => (item.id === newRequest.id ? newRequest : item))
      );
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message);
    }
  };

  const confirmRequest = async (requestId, formData) => {
    const {
      data: { request: newRequest }
    } = await withdrawService.completeRequest(requestId, formData);
    setRequests((prev) =>
      prev.map((item) => (item.id === newRequest.id ? newRequest : item))
    );
  };

  const rejectRequest = async (requestId) => {
    const {
      data: { request: newRequest }
    } = await withdrawService.rejectRequest(requestId);
    setRequests((prev) =>
      prev.map((item) => (item.id === newRequest.id ? newRequest : item))
    );
  };

  const onClickByStatus = useMemo(
    () => ({
      [PENDING]: acceptRequest,
      [ACCEPTED]: (request) => {
        openFormModal(
          <ConfirmWithdrawForm
            request={request}
            onConfirm={confirmRequest}
            onReject={rejectRequest}
          />
        );
      },
      [COMPLETED]: (request) =>
        openFormModal(
          <img
            className="w-full block mx-auto mt-6"
            src={request.proofImage}
            alt="proofImage"
          />
        )
    }),
    [openFormModal]
  );

  const displayRequests = useMemo(() => {
    if (filter === PENDING) {
      return pendingRequests.map((item) => (
        <RequestCard
          key={item.id}
          request={item}
          onClickButton={() => onClickByStatus[item.status](item)}
        />
      ));
    }
    if (filter === ACCEPTED) {
      return acceptedRequests.map((item) => (
        <RequestCard
          key={item.id}
          request={item}
          onClickButton={() => onClickByStatus[item.status](item)}
        />
      ));
    }
    if (filter === COMPLETED) {
      return completedRequests.map((item) => (
        <RequestCard
          key={item.id}
          request={item}
          onClickButton={() => onClickByStatus[item.status](item)}
        />
      ));
    }
    if (filter === REJECTED) {
      return rejectedRequests.map((item) => (
        <RequestCard
          key={item.id}
          request={item}
          onClickButton={() => onClickByStatus[item.status](item)}
        />
      ));
    }
  }, [
    filter,
    pendingRequests,
    acceptedRequests,
    onClickByStatus,
    completedRequests,
    rejectedRequests
  ]);

  return (
    <div className="flex flex-col min-h-screen pt-10 ">
      <div className="flex gap-4 h-full w-full font-sans ">
        <div className="basis-40 grow-0 rounded-xl bg-black">
          <Avatar src={profileImage} />
        </div>
        <AdminMenu />
        <AdminDashboardGroup
          pending={pendingRequests.length}
          accepted={acceptedRequests.length}
          rejected={rejectedRequests.length}
          completed={completedRequests.length}
        />
      </div>
      <div className="flex w-full ">
        <div className="w-40"></div>
        <div className="grow border pl-20 mt-4">
          {filter ? (
            <>
              <ProductListing
                title={listingName}
                viewAll={true}
                onReturn={() => setFilter(null)}
              />
              {displayRequests.length > 0 ? (
                displayRequests
              ) : (
                <h3 className="font-semibold text-tin-color ml-12 mt-6">
                  ไม่มีรายการ
                </h3>
              )}
            </>
          ) : (
            <>
              <ProductListing
                title="คำขอถอนเงิน"
                more={pendingRequests.length}
                onViewAll={() => setFilter(PENDING)}
              />
              {pendingRequests.length > 0 ? (
                <RequestCard
                  request={pendingRequests[0]}
                  onClickButton={() =>
                    onClickByStatus[PENDING](pendingRequests[0])
                  }
                />
              ) : (
                <h3 className="font-semibold text-tin-color ml-12 mt-6">
                  ไม่มีรายการ
                </h3>
              )}
              <ProductListing
                title="ที่กำลังดำเนินการ"
                more={acceptedRequests.length}
                onViewAll={() => setFilter(ACCEPTED)}
              />
              {acceptedRequests.length > 0 ? (
                <RequestCard
                  request={acceptedRequests[0]}
                  onClickButton={() =>
                    onClickByStatus[ACCEPTED](acceptedRequests[0])
                  }
                />
              ) : (
                <h3 className="font-semibold text-tin-color ml-12 mt-6">
                  ไม่มีรายการ
                </h3>
              )}
              <ProductListing
                title="ที่ถูกปฏิเสธ"
                more={rejectedRequests.length}
                onViewAll={() => setFilter(REJECTED)}
              />
              {rejectedRequests.length > 0 ? (
                <RequestCard
                  request={rejectedRequests[0]}
                  onClickButton={() =>
                    onClickByStatus[REJECTED](rejectedRequests[0])
                  }
                />
              ) : (
                <h3 className="font-semibold text-tin-color ml-12 mt-6">
                  ไม่มีรายการ
                </h3>
              )}
              <ProductListing
                title="ที่เสร็จสิ้น"
                more={completedRequests.length}
                onViewAll={() => setFilter(COMPLETED)}
              />
              {completedRequests.length > 0 ? (
                <RequestCard
                  request={completedRequests[0]}
                  onClickButton={() =>
                    onClickByStatus[COMPLETED](completedRequests[0])
                  }
                />
              ) : (
                <h3 className="font-semibold text-tin-color ml-12 mt-6">
                  ไม่มีรายการ
                </h3>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
