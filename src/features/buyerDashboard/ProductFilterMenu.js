function ProductFilterMenu() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-white grow gap-3 h-40 rounded-xl bg-vivid-orange cursor-pointer hover:bg-vivid-orange/80">
        <h2 className="text-xl">ที่ต้องชำระ</h2>
        <i className="fa-solid fa-wallet text-7xl"></i>
      </div>
      <div className="flex flex-col items-center justify-center text-white grow gap-3 h-40 rounded-xl bg-vivid-orange cursor-pointer hover:bg-vivid-orange/80">
        <h2 className="text-xl">ที่ต้องจัดส่ง</h2>
        <i className="fa-solid fa-cube text-7xl"></i>
      </div>
      <div className="flex flex-col items-center justify-center text-white grow gap-3 h-40 rounded-xl bg-vivid-orange cursor-pointer hover:bg-vivid-orange/80">
        <h2 className="text-xl">ที่ต้องได้รับ</h2>
        <i className="fa-solid fa-truck-fast text-7xl"></i>
      </div>
      <div className="flex flex-col items-center justify-center text-white grow gap-3 h-40 rounded-xl bg-vivid-orange cursor-pointer hover:bg-vivid-orange/80">
        <h2 className="text-xl">ให้คะแนน</h2>
        <div className="relative w-20 h-20 border-4 border-white rounded-full">
          <i className="fa-solid fa-star text-4xl absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"></i>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-white grow gap-3 h-40 rounded-xl bg-vivid-orange cursor-pointer hover:bg-vivid-orange/80">
        <h2 className="text-xl">ร้านค้าของฉัน</h2>
        <i className="fa-solid fa-store text-7xl"></i>
      </div>
    </>
  );
}

export default ProductFilterMenu;
