function SellerMenu() {
  return (
    <div className="basis-32 flex flex-col justify-evenly mx-5">
      <button className="text-sm font-bold py-1 px-3 border-[3px] border-vivid-orange rounded-lg hover:bg-vivid-orange hover:text-whisper">
        ดูหน้าร้านค้า
      </button>
      <button className="text-sm font-bold py-1 px-3 border-[3px] border-vivid-orange rounded-lg hover:bg-vivid-orange hover:text-whisper">
        เพิ่มสินค้า
      </button>
    </div>
  );
}

export default SellerMenu;
