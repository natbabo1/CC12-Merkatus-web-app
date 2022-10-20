import React from 'react';
import PrompayIcon from '../components/icon/PrompayIcon';
import CreditIcon from '../components/icon/CreditIcon';
import LinePayIcon from '../components/icon/LinePayIcon';

function CheckoutPage() {
  return (
    <>
      <form className='w-full min-h-screen flex flex-col justify-between  border-t-2 border-mermaid-net'>
        <div className='w-3/4 mx-auto'>
          <div className='flex '>
            <div className='mt-4'>
              <i className='fas fa-map-marker-alt text-vivid-orange text-3xl mr-3' />
            </div>
            <div className='flex flex-col my-4 gap-2 font-semibold'>
              <span className='text-vivid-orange'>ที่อยู่ในการจัดส่ง</span>
              <span>กอลั่ม ร่างแรก</span>
              <span>233 สป็อต วานิลลาลาติน ฮาราคีรีอินเตอร์คอมเมนท์</span>
            </div>
          </div>

          <hr className='bg-mermaid-net border border-mermaid-net' />

          <div className='mx-auto py-10'>
            <span className='flex items-center gap-3 text-2xl pb-4'>
              Galadriel
            </span>
            <div className='bg-vivid-orange/30 w-[90%] flex rounded-3xl h-40 py-5 pl-5 pr-10 ml-10'>
              <div className='w-1/2 flex'>
                <div className='w-1/3 h-full'>
                  <img
                    className='rounded-md h-full w-full'
                    src='https://picsum.photos/200'
                    alt='Product'
                  />
                </div>
                <div className='w-2/3 h-full flex flex-col gap-4 pl-6'>
                  <span>กล้องวงจรปิด</span>
                  <span className='font-semibold'>฿890</span>
                </div>
              </div>
            </div>
          </div>
          <div className='mx-auto'>
            <hr className='bg-mermaid-net border border-mermaid-net' />
            <div className='flex items-center  h-20 px-10'>
              <span className='font-semibold'>การชำระเงิน</span>
            </div>
          </div>
          <div className='mx-auto'>
            <hr className='bg-mermaid-net border border-mermaid-net' />
            <div className='flex items-center justify-between px-10'>
              <div className='flex items-center'>
                <div className='w-12 py-4'>
                  <PrompayIcon />
                </div>
                <span className='pl-4 font-semibold'>Promtpay</span>
              </div>

              <input
                type='radio'
                name='payment'
                className='w-6 h-6 border-vivid-orange checked:bg-vivid-orange focus:ring-vivid-orange'
              />
            </div>
          </div>
          <div className='mx-auto'>
            <hr className='bg-mermaid-net border border-mermaid-net' />
            <div className='flex items-center justify-between px-10'>
              <div className='flex items-center '>
                <div className='w-12 py-4'>
                  <CreditIcon />
                </div>
                <span className='pl-4 font-semibold'>
                  CreditCard / DebitCard
                </span>
              </div>

              <input
                type='radio'
                name='payment'
                className='w-6 h-6 border-vivid-orange checked:bg-vivid-orange focus:ring-vivid-orange'
              />
            </div>
          </div>
          <div className='mx-auto'>
            <hr className='bg-mermaid-net border border-mermaid-net' />
            <div className='flex items-center justify-between px-10'>
              <div className='flex items-center'>
                <div className='w-12 py-4'>
                  <LinePayIcon />
                </div>
                <span className='pl-4 font-semibold'>LinePay</span>
              </div>

              <input
                type='radio'
                name='payment'
                className='w-6 h-6 border-vivid-orange checked:bg-vivid-orange focus:ring-vivid-orange'
              />
            </div>
            <hr className='bg-mermaid-net border border-mermaid-net' />
          </div>
        </div>
        <div className='flex justify-end  items-center w-full bg-vivid-orange/40 px-10 py-4 rounded-lg'>
          <div className='flex items-center text-vivid-orange font-semibold mr-14'>
            ราคารวมทั้งหมด
            <span className='flex items-center text-black text-xl ml-3'>
              890 บาท
            </span>
          </div>
          <button className='bg-vivid-orange text-white py-2 px-14 rounded-xl'>
            ชำระเงิน
          </button>
        </div>
      </form>
    </>
  );
}

export default CheckoutPage;
