import { useMemo } from "react";
import Avatar from "../../components/ui/Avatar";
import { ACCEPTED, COMPLETED, PENDING, REJECTED } from "../../utils/constaint";
import { toBaht } from "../../utils/numberFormat";

function RequestCard({ request, onClickButton }) {
  const buttonName = useMemo(() => {
    if (!request?.status) {
      return null;
    }
    const buttonNameListing = {
      [PENDING]: "รับคำขอ",
      [ACCEPTED]: "ยืนยันการถอน",
      [REJECTED]: null,
      [COMPLETED]: "ดูรายละเอียด"
    };

    return buttonNameListing[request.status];
  }, [request?.status]);

  return (
    <div className="bg-mermaid-net/30 flex rounded-3xl h-30 py-5 pl-5 pr-10">
      <div className="flex">
        <div className="w-20">
          <Avatar src={request?.requester?.profileImage} />
        </div>
        <div className="border-l-2 ml-2 h-full  border-white"></div>
      </div>
      <div className="flex flex-col justify-between w-full">
        <div className="flex justify-between grow ml-4">
          <h1>
            {request?.requester?.firstName} {request?.requester?.lastName}
          </h1>
          <h1>{toBaht(request?.amount)}</h1>
        </div>
        <div className="flex justify-end">
          {buttonName ? (
            <button
              className="block bg-vivid-orange px-3 text-white py-1 rounded-lg"
              onClick={onClickButton}
            >
              {buttonName}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default RequestCard;
