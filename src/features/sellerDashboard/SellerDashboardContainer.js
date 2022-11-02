import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/AuthContext";
import { useModal } from "../../contexts/ModalContext";
import { useLoading } from "../../contexts/LoadingContext";
import Avatar from "../../components/ui/Avatar";
import ProductDashBoardCard from "../../components/ui/ProductDashBoardCard";
import OrderHorizonCard from "../../components/ui/OrderHorizonCard";
import ProductListing from "../../components/ui/ProductListing";
import DashboardGroup from "./DashboardGroup";
import SellerMenu from "./SellerMenu";
import AddtrackingFrom from "./AddTrackingFrom";
import { listingNameSeller } from "../../utils/listingName";
import { SELLER, PAID, TRANSFER, ARRIVED } from "../../utils/constaint";
import * as orderService from "../../api/orderApi";
import * as productService from "../../api/productApi";

function SellerDashboardContainer() {
  const { startLoading, stopLoading } = useLoading();
  const { openFormModal } = useModal();
  const {
    user: { profileImage, wallet }
  } = useAuth();

  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      const {
        data: { orders: newOrders }
      } = await orderService.getSellingOrders();

      setOrders(newOrders);
    };
    const fetchProducts = async () => {
      const {
        data: { products: newProducts }
      } = await productService.getSellerProducts();
      setProducts(newProducts);
    };

    const fetchAll = async () => {
      startLoading();
      try {
        await fetchOrders();
        await fetchProducts();
      } catch (err) {
        console.log(err);
        toast.error(err.resonse?.data?.message);
      } finally {
        stopLoading();
      }
    };
    fetchAll();
  }, [startLoading, stopLoading]);

  const listingName = useMemo(() => listingNameSeller(filter), [filter]);

  const updateOrder = useCallback((newOrder) => {
    console.log(newOrder);
    setOrders((prev) =>
      prev.map((item) => (item.id === newOrder.id ? newOrder : item))
    );
  }, []);

  const onClickByStatus = useMemo(
    () => ({
      [PAID]: (item) =>
        openFormModal(
          <AddtrackingFrom order={item} updateOrder={updateOrder} />
        ), // function that receive EMS no.
      [TRANSFER]: null, // Contact Customer
      [ARRIVED]: null // same as TRANSFER
    }),
    [openFormModal, updateOrder]
  );

  const ordersToSent = useMemo(
    () =>
      orders.reduce(
        (acc, item) =>
          item.status === PAID
            ? [
                ...acc,
                <OrderHorizonCard
                  role={SELLER}
                  order={item}
                  onClickButton={() => onClickByStatus[item.status](item)}
                />
              ]
            : acc,
        []
      ),
    [orders, onClickByStatus]
  );
  const waitingOrders = useMemo(
    () =>
      orders.reduce(
        (acc, item) =>
          item.status === TRANSFER || item.status === ARRIVED
            ? [
                ...acc,
                <OrderHorizonCard
                  role={SELLER}
                  order={item}
                  onClickButton={() => onClickByStatus[item.status](item)}
                />
              ]
            : acc,
        []
      ),
    [orders, onClickByStatus]
  );

  const filteredOrders = useMemo(
    () =>
      orders.reduce((acc, item) => {
        if (
          ((item.status === TRANSFER || item.status === ARRIVED) &&
            filter === TRANSFER) ||
          item.status === filter
        ) {
          return [
            ...acc,
            <OrderHorizonCard
              key={item.id}
              role={SELLER}
              order={item}
              onClickButton={() => onClickByStatus[item.status](item)}
            />
          ];
        }
        return acc;
      }, []),
    [filter, orders, onClickByStatus]
  );

  return (
    <div className="flex flex-col min-h-screen pt-10">
      <div className="flex gap-4 h-full w-full font-sans">
        <div className="basis-40 grow-0 rounded-xl">
          <Avatar src={profileImage} />
        </div>
        <SellerMenu />
        <DashboardGroup
          wallet={wallet}
          ordersToSent={ordersToSent.length}
          waitingOrders={waitingOrders.length}
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
              {filter === "ALLPRODUCT" ? (
                products.map((item) => <ProductDashBoardCard product={item} />)
              ) : filteredOrders.length > 0 ? (
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
                title="รายการสินค้าล่าสุด"
                more={products.length}
                onViewAll={() => setFilter("ALLPRODUCT")}
              />
              {products.length > 0 ? (
                <ProductDashBoardCard product={products[0]} />
              ) : (
                <h3 className="font-semibold text-tin-color ml-12 mt-6">
                  ไม่มีรายการ
                </h3>
              )}
              <ProductListing
                title="สินค้าที่ต้องจัดส่ง"
                more={ordersToSent.length}
                onViewAll={() => setFilter(PAID)}
              />
              {ordersToSent.length > 0 ? (
                ordersToSent[0]
              ) : (
                <h3 className="font-semibold text-tin-color ml-12 mt-6">
                  ไม่มีรายการ
                </h3>
              )}
              <ProductListing
                title="สินค้าที่รอการยืนยัน"
                more={waitingOrders.length}
                onViewAll={() => setFilter(TRANSFER)}
              />
              {waitingOrders.length > 0 ? (
                waitingOrders[0]
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

export default SellerDashboardContainer;
