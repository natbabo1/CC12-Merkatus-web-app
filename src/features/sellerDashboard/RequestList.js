import { useMemo } from "react";
import { ACCEPTED, COMPLETED, PENDING, REJECTED } from "../../utils/constaint";
import { toBaht } from "../../utils/numberFormat";

function RequestList({ request }) {
  const statusColor = useMemo(() => {
    if (request.status === PENDING) {
      return "yellow-400";
    }
    if (request.status === ACCEPTED) {
      return "blue-400";
    }
    if (request.status === REJECTED) {
      return "red-400";
    }
    if (request.status === COMPLETED) {
      return "green-400";
    }
  }, [request]);
  return (
    <div className="border-2 border-vivid-orange px-2 py-2 rounded-md flex justify-between">
      <div>
        <span className="text-tin-color">{request.createdAt.slice(0, 10)}</span>
        : {toBaht(request.amount)}
      </div>
      <div className={`font-medium text-${statusColor}`}>{request.status}</div>
    </div>
  );
}

export default RequestList;
