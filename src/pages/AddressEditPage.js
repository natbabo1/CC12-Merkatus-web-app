import React from 'react';

function AddressEditPage() {
  return (
    <form>
      <div className='flex justify-center'>
        <div className='flex flex-col gap-6 w-4/6 '>
          <span className='text-vivid-orange pl-4'>ช่องทางการติดต่อ</span>
          <input
            type='text'
            className='block p-4 pl-10 w-full text-sm placeholder-vivid-orange text-gray-900 bg-gray-50 rounded-full border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
            placeholder='ชื่อ นามสกุล'
          />
          <input
            type='text'
            className='block p-4 pl-10 w-full text-sm placeholder-vivid-orange text-gray-900 bg-gray-50 rounded-full border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
            placeholder='หมายเลขโทรศัพท์'
          />
          <span className='text-vivid-orange pl-4'>ที่อยู่</span>
          <input
            type='text'
            className='block p-4 pl-10 w-full text-sm placeholder-vivid-orange text-gray-900 bg-gray-50 rounded-full border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
            placeholder='เลขที่บ้าน'
          />
          <div className='flex gap-4'>
            <input
              type='text'
              className='block p-4 pl-10 w-1/2 text-sm placeholder-vivid-orange text-gray-900 bg-gray-50 rounded-full border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
              placeholder='แขวง/ตำบล'
            />
            <input
              type='text'
              className='block p-4 pl-10 w-1/2 text-sm placeholder-vivid-orange text-gray-900 bg-gray-50 rounded-full border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
              placeholder='เขต/อำเภอ'
            />
          </div>
          <div className='flex gap-4'>
            <input
              type='text'
              className='block p-4 pl-10 w-1/2 text-sm placeholder-vivid-orange text-gray-900 bg-gray-50 rounded-full border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
              placeholder='จังหวัด'
            />
            <input
              type='text'
              className='block p-4 pl-10 w-1/2 text-sm placeholder-vivid-orange text-gray-900 bg-gray-50 rounded-full border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
              placeholder='เลขไปรษณีย์'
            />
          </div>
          <input
            type='text'
            className='block p-4 pl-10 w-full text-sm placeholder-vivid-orange text-gray-900 bg-gray-50 rounded-full border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
            placeholder='จุดสังเกตเพิ่มเติม'
          />
          <div className='flex justify-end'>
            <button
              className={`text-white flex items-center justify-center bg-vivid-orange h-10 w-36 rounded-lg cursor-pointer hover:bg-transparent hover:border-2 hover:border-vivid-orange hover:text-vivid-orange active:bg-mermaid-net active:text-white 
          }`}
            >
              ยืนยัน
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

export default AddressEditPage;
