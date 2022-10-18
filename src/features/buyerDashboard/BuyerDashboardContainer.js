import Avatar from '../../components/ui/Avatar';
import ProductHorizonCard from '../../components/ui/ProductHorizonCard';
import ProductFilterMenu from './ProductFilterMenu';
import ProductListing from '../../components/ui/ProductListing';
import { BUYER, SELLER, PAID, TRANSFER, RECEIVED } from '../../utils/constaint';

function BuyerDashboardContainer() {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      <div className="flex gap-4 h-full w-full font-sans">
        <div className="basis-40 grow-0 rounded-xl mr-12">
          <Avatar />
        </div>
        <ProductFilterMenu />
      </div>
      <div className="flex w-full ">
        <div className="w-40"></div>
        <div className="grow border pl-20 mt-4">
          <ProductListing title="สินค้าที่อยู่ระหว่างการจัดส่ง" />
          <ProductHorizonCard role={BUYER} status={TRANSFER} />
          <ProductListing title="สินค้าที่รอการยืนยัน" />
          <ProductHorizonCard role={BUYER} status={RECEIVED} />
        </div>
      </div>
    </div>
  );
}

export default BuyerDashboardContainer;
