import ProductHorizonCard from '../../components/ui/ProductHorizonCard';
function SellerCartGroup() {
  return (
    <>
      <hr className='bg-mermaid-net border border-mermaid-net' />
      <div className='my-10'>
        <label className='flex items-center gap-3 text-2xl mb-10'>
          <input
            type='radio'
            name='seller'
            className='w-6 h-6 border-vivid-orange checked:bg-vivid-orange focus:ring-vivid-orange'
          />
          Galadriel
        </label>
        <div className='flex flex-col gap-4 ml-10'>
          <div className='flex items-center justify-start gap-10'>
            <input
              type='checkbox'
              className='border-vivid-orange checked:bg-vivid-orange focus:ring-vivid-orange'
            />
            <ProductHorizonCard />
          </div>
          <div className='flex items-center justify-start gap-10'>
            <input
              type='checkbox'
              className='border-vivid-orange checked:bg-vivid-orange focus:ring-vivid-orange'
            />
            <ProductHorizonCard />
          </div>
          <div className='flex items-center justify-start gap-10'>
            <input
              type='checkbox'
              className='border-vivid-orange checked:bg-vivid-orange focus:ring-vivid-orange'
            />
            <ProductHorizonCard />
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerCartGroup;
