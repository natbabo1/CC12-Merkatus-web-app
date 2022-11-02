import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { toast } from "react-toastify";
import * as withdrawService from "../../api/withdrawApi";
import Spinner from "../../components/ui/Spinner";
import { ACCEPTED, PENDING } from "../../utils/constaint";
import RequestList from "./RequestList";

function WithdrawForm() {
  const [initLoading, setInitLoading] = useState(true);
  const [requests, setRequests] = useState([]);

  const amountInput = useRef();

  const pendingOrAcceptedRequest = useMemo(
    () =>
      requests.find(
        (item) => item.status === PENDING || item.status === ACCEPTED
      ),
    [requests]
  );

  const remainRequests = useMemo(() => {
    if (!pendingOrAcceptedRequest) {
      return requests;
    }
    return requests.slice(1);
  }, [requests, pendingOrAcceptedRequest]);

  const fetchRequests = useCallback(async () => {
    try {
      const res = await withdrawService.getRequests();
      setRequests(res.data.requests);
      setInitLoading(false);
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message);
    }
  }, []);

  useEffect(() => {
    fetchRequests();
  }, [fetchRequests]);

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const res = await withdrawService.createWithdrawalRequest(
        amountInput.current.value
      );

      setRequests([res.data.request, ...requests]);
    } catch (err) {
      toast.error(err.response?.data?.message);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmitForm}>
      <h1 className="mt-10 mb-5 text-center text-vivid-orange text-2xl">
        คำขอถอนเงินออกจากบัญชี
      </h1>
      <hr className="border-1 border-mermaid-net mt-2 mb-2" />
      {initLoading ? (
        <Spinner />
      ) : (
        <div>
          {pendingOrAcceptedRequest ? (
            <>
              <div className="mb-2 mt-6">คุณมีคำขอที่รอการดำเนินการอยู๋</div>
              <RequestList request={pendingOrAcceptedRequest} />
            </>
          ) : (
            <div className="flex items-center justify-between mt-6">
              <div className="relative grow">
                <input
                  type="number"
                  className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-vivid-orange appearance-none focus:outline-none focus:ring-0 focus:border-vivid-orange peer"
                  placeholder=" "
                  id="amount"
                  ref={amountInput}
                />
                <label
                  htmlFor="amount"
                  className="absolute text-sm text-gray-500  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-whisper px-2 peer-focus:px-2 peer-focus:text-vivid-orange peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
                >
                  Amount to withdraw
                </label>
              </div>
              <button className="text-white bg-vivid-orange px-2 pb-2.5 pt-3 border border-vivid-orange rounded-lg ml-3 hover:bg-mermaid-net hover:border-mermaid-net">
                ส่งคำขอ
              </button>
            </div>
          )}
          <div>
            <h3 className="text-vivid-orange font-semibold mt-4 mb-2">
              ประวัติการถอน
            </h3>
            {remainRequests.length === 0 ? (
              <h5 className="text-sm font-light text-tin-color ml-6">
                ไม่มีรายการ
              </h5>
            ) : (
              requests.map((item) => (
                <RequestList key={item.id} request={item} />
              ))
            )}
          </div>
        </div>
      )}
    </form>
  );
}

export default WithdrawForm;
