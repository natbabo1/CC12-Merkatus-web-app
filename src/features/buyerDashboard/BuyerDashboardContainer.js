import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import Avatar from "../../components/ui/Avatar";
import ProductListing from "../../components/ui/ProductListing";
import OrderHorizonCard from "../../components/ui/OrderHorizonCard";
import ProductFilterMenu from "./ProductFilterMenu";
import * as orderService from "../../api/orderApi";
import {
  BUYER,
  PAID,
  RECEIVED,
  TRANSFER,
  RATED,
  ARRIVED,
  SELLER
} from "../../utils/constaint";

function BuyerDashboardContainer() {
  const navigate = useNavigate();

  const {
    user: { profileImage }
  } = useAuth();

  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState(null);

  const confirmOrder = async (input) => {
    try {
      const {
        data: { order }
      } = await orderService.confirmOrder(input.id);
      setOrders([
        ...orders.map((item) => (item.id === order.id ? order : item))
      ]);
    } catch (err) {
      toast.error(err.response?.data?.message);
      console.log(err);
    }
  };

  const onClickByStatus = {
    [PAID]: (order) => navigate(`/product/${order.Product.id}`),
    [TRANSFER]: confirmOrder,
    [ARRIVED]: confirmOrder,
    [RECEIVED]: null //function to rate the order
  };

  const toProductHorizonCard = (input) =>
    input ? (
      <OrderHorizonCard
        role={BUYER}
        order={input}
        onClickButton={() => onClickByStatus[input.status](input)}
      />
    ) : (
      ""
    );

  const listingName = useMemo(() => {
    if (filter === PAID) {
      return "สินค้าที่รอการจัดส่ง";
    }
    if (filter === TRANSFER) {
      return "สินค้าที่รอการยืนยัน";
    }
    if (filter === RECEIVED) {
      return "สินค้าที่รอการให้คะแนน";
    }
    if (filter === RATED) {
      return "ประวัติการซื้อสินค้า";
    }
  }, [filter]);

  const paidOrder = useMemo(
    () => toProductHorizonCard(orders.find((item) => item.status === PAID)),
    [orders]
  );
  const transferOrder = useMemo(
    () => toProductHorizonCard(orders.find((item) => item.status === TRANSFER)),
    [orders]
  );
  const receivedOrder = useMemo(
    () => toProductHorizonCard(orders.find((item) => item.status === RECEIVED)),
    [orders]
  );

  const filteredOrders = useMemo(
    () =>
      orders.reduce((acc, item) => {
        if (item.status === filter) {
          return [
            ...acc,
            <OrderHorizonCard
              key={item.id}
              role={BUYER}
              order={item}
              onClickButton={() => onClickByStatus[item.status](item)}
            />
          ];
        }
        return acc;
      }, []),
    [filter, orders]
  );

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const {
          data: { orders: newOrders }
        } = await orderService.getBuyingOrders();

        setOrders(newOrders);
      } catch (err) {
        console.log(err);
        toast.error(err.resonse?.data?.message);
      }
    };
    fetchOrders();
  }, []);

  return (
    <div className="flex flex-col min-h-screen pt-10">
      <div className="flex justify-between gap-4 h-full w-full font-sans ">
        <div className="basis-40 grow-0 rounded-xl mr-12">
          <Avatar src={profileImage} />
        </div>
        <ProductFilterMenu onFilter={(filter) => setFilter(filter)} />
      </div>
      <div className="flex w-full ">
        <div className="w-40"></div>
        <div className="grow border pl-20 mt-4">
          {filter ? (
            <>
              <ProductListing
                title={listingName}
                viewAll="true"
                onReturn={() => setFilter(null)}
              />
              {filteredOrders.length > 0 ? (
                filteredOrders
              ) : (
                <h3 className="font-semibold text-tin-color ml-12 mt-6">
                  ไม่มีรายการ
                </h3>
              )}
            </>
          ) : (
            <>
              <ProductListing
                title="สินค้าที่รอการจัดส่ง"
                more={paidOrder}
                onViewAll={() => setFilter(PAID)}
              />
              {paidOrder || (
                <h3 className="font-semibold text-tin-color ml-12 mt-6">
                  ไม่มีรายการ
                </h3>
              )}
              <ProductListing
                title="สินค้าที่รอการยืนยัน"
                more={transferOrder}
                onViewAll={() => setFilter(TRANSFER)}
              />
              {transferOrder || (
                <h3 className="font-semibold text-tin-color ml-12 mt-6">
                  ไม่มีรายการ
                </h3>
              )}
              <ProductListing
                title="สินค้าที่รอการให้คะแนน"
                more={receivedOrder}
                onViewAll={() => setFilter(RECEIVED)}
              />
              {receivedOrder || (
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

export default BuyerDashboardContainer;
