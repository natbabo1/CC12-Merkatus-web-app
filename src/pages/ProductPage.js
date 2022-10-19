import React from 'react';

function ProductPage() {
  return (
    <>
      <div className='flex '>
        <div className='flex flex-col w-1/2'>
          <div className='w-full flex items-center justify-center'>
            <div className='w-4/5 py-14'>
              <div className='w-full pt-[100%] relative rounded-lg overflow-hidden'>
                <img
                  src='https://files.vogue.co.th/uploads/detail2new29.jpg'
                  className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 h-auto w-full rounded-lg'
                  alt='Product'
                />
              </div>
            </div>
          </div>
        </div>
        <div className='w-1/2  flex flex-col'>
          <div className='w-full h-5/6 flex items-center justify-center'>
            <div className='w-[90%] h-[90%]'>
              <p className='font-semibold text-xl mt-10'>ชุดเด็กผู้หญิง</p>
              <p className='font-semibold text-xl mt-10'>890B</p>
              <p className='font-semibold text-xl mt-10'>รายละเอียดสินค้า</p>
              <p className='mt-10'>
                บอยคอตต์แจ๊กพ็อต โอเปร่าแอคทีฟ วาไรตี้ รุสโซเอ๊าะวานิลลาธุรกรรม
                โปรเอ็กซ์โป เชอร์รี่หม่านโถวแรลลี เซ็กซ์สะเด่ากาญจน์อึมครึมสปา
                เอ็นทรานซ์ โค้ชหล่อฮังก้วยมหภาคเวิร์ค ทอมทรู
                อพาร์ตเมนท์แบ็กโฮซิมโฟนีภควัมปติแฮปปี้
                สมิติเวชเด้ออิกัวนาพันธุวิศวกรรม ว่ะ
                แชมป์ปูอัดสต๊อคแอดมิสชันสเปค โบ้ยคาสิโนอัลตรานายแบบบิ๊ก
                โอเปร่าแทงกั๊กว้าวแซมบ้าอัลตรา
              </p>

              <div
                className={`text-white flex items-center w-52 mt-10 justify-center bg-vivid-orange h-10 rounded-lg cursor-pointer hover:bg-transparent hover:border-2 hover:border-vivid-orange hover:text-vivid-orange active:bg-mermaid-net active:text-white active:border-mermaid-net 
              }`}
              >
                เพิ่มสินค้าลงรถเข็น
              </div>
              <div className='mt-10 '>
                <i className='fa-regular fa-heart text-vivid-orange text-lg mr-3' />
                <span className='font-semibold text-xl '>Add to wish list</span>
              </div>

              <div className='self'></div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex '>
        <div className='flex flex-col w-1/2 h-40 items-center justify-center'>
          <div className='w-4/5 h-full flex items-center justify-between gap-4 '>
            <img
              src='https://cf.shopee.co.th/file/fb363c0cf56daa44a6cca5f905cdfa30_tn'
              className='block w-1/4 grow rounded-lg'
              alt='Product'
            />
            <img
              src='https://cf.shopee.co.th/file/fb363c0cf56daa44a6cca5f905cdfa30_tn'
              className='block w-1/4 grow rounded-lg'
              alt='Product'
            />
            <img
              src='https://cf.shopee.co.th/file/fb363c0cf56daa44a6cca5f905cdfa30_tn'
              className='block w-1/4 grow rounded-lg'
              alt='Product'
            />
          </div>
        </div>
        <div className='w-1/2 flex justify-center'>
          <div className='bg-vivid-orange w-[90%] flex rounded-3xl h-40 py-5 pl-5 pr-10'>
            <div className='w-1/2 flex'>
              <div className='w-1/2 h-full'>
                <img
                  className='rounded-md h-full w-full'
                  src='https://picsum.photos/200'
                  alt='Product'
                />
              </div>
              <div className='w-1/2 h-full flex flex-col justify-between items-center'>
                <div
                  className={`text-white flex items-center w-28  justify-center bg-mermaid-net h-14 rounded-lg cursor-pointer hover:bg-transparent hover:border-2 hover:border-vivid-orange hover:text-vivid-orange active:bg-mermaid-net active:text-white active:border-mermaid-net 
              }`}
                >
                  แชทเลย
                </div>
                <div
                  className={`text-white flex items-center w-28  justify-center bg-mermaid-net h-14 rounded-lg cursor-pointer hover:bg-transparent hover:border-2 hover:border-vivid-orange hover:text-vivid-orange active:bg-mermaid-net active:text-white active:border-mermaid-net 
              }`}
                >
                  ดูร้านค้า
                </div>
              </div>
            </div>
            <div className='w-1/2 border-l-2 border-white'>
              <p className='text-white pl-4'>Rating</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductPage;
