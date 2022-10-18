import Avatar from '../../components/ui/Avatar';
import ProductHorizonCard from '../../components/ui/ProductHorizonCard';
import DashboardGroup from './DashboardGroup';
import ProductListing from '../../components/ui/ProductListing';
import SellerMenu from './SellerMenu';
import { SELLER, PAID, TRANSFER } from '../../utils/constaint';

function SellerDashboardContainer() {
  return (
    <div className="flex flex-col min-h-screen pt-10">
      <div className="flex gap-4 h-full w-full font-sans">
        <div className="basis-40 grow-0 rounded-xl">
          <Avatar />
        </div>
        <SellerMenu />
        <DashboardGroup />
      </div>
      <div className="flex w-full ">
        <div className="w-40"></div>
        <div className="grow border pl-20 mt-4">
          <ProductListing title="รายการสินค้าล่าสุด" />
          <ProductHorizonCard role={SELLER} status={null} />
          <ProductListing title="สินค้าที่ต้องจัดส่ง" />
          <ProductHorizonCard role={SELLER} status={PAID} />
          <ProductListing title="สินค้าที่รอการยืนยัน" />
          <ProductHorizonCard role={SELLER} status={TRANSFER} />
        </div>
      </div>
    </div>
  );
}

export default SellerDashboardContainer;
