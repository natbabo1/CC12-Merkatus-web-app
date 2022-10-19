function AddProductPage() {
  return (
    <>
      <div className='flex '>
        <div className='flex flex-col w-1/2 h-96  justify-center items-center'>
          <div className='w-4/5 h-4/5 flex justify-center items-center  bg-gray-300'>
            <span className='text-mermaid-net'>CLICK TO ADD PHOTO</span>
          </div>
        </div>
        <div className='w-1/2 flex flex-col  justify-center'>
          <div className='flex flex-col gap-4 h-4/5 '>
            <input
              type='text'
              className='block p-4 pl-5 w-full text-sm placeholder-vivid-orange text-gray-900 bg-gray-50  border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
              placeholder='ชื่อสินค้า'
            />
            <input
              type='text'
              className='block p-4 pl-5 w-full text-sm placeholder-vivid-orange text-gray-900 bg-gray-50  border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '
              placeholder='ราคาสินค้า'
            />
            <textarea
              type='text'
              className='block p-4 pl-5 w-full h-28 text-sm placeholder-vivid-orange text-gray-900 bg-gray-50  border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none'
              placeholder='รายละเอียดสินค้า'
            />
            <div className='flex '>
              <button
                className={`text-white flex items-center justify-center bg-vivid-orange h-10 w-36 rounded-lg cursor-pointer hover:bg-transparent hover:border-2 hover:border-vivid-orange hover:text-vivid-orange active:bg-mermaid-net active:text-white 
          }`}
              >
                ลงขายสินค้า
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='flex '>
        <div className='flex flex-col w-1/2 h-40 items-center justify-center'>
          <div className='w-4/5 h-full flex items-center justify-between gap-4 '>
            <div className='w-1/3 h-full flex justify-center items-center  bg-gray-300'>
              <span className='text-mermaid-net text-xs'>
                CLICK TO ADD PHOTO
              </span>
            </div>
            <div className='w-1/3 h-full flex justify-center items-center  bg-gray-300'>
              <span className='text-mermaid-net text-xs'>
                CLICK TO ADD PHOTO
              </span>
            </div>
            <div className='w-1/3 h-full flex justify-center items-center  bg-gray-300'>
              <span className='text-mermaid-net text-xs'>
                CLICK TO ADD PHOTO
              </span>
            </div>
          </div>
        </div>
        <div className='w-1/2 flex justify-center'></div>
      </div>
    </>
  );
}

export default AddProductPage;
