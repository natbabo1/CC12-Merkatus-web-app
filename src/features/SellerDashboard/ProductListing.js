function ProductListing({ title }) {
  return (
    <div className="flex justify-between ml-8 mt-8 mb-2">
      <h3 className="font-semibold">{title}</h3>
      <h3 className="font-semibold text-tin-color cursor-pointer hover:text-mermaid-net">
        ดูทั้งหมด {'>>'}
      </h3>
    </div>
  );
}

export default ProductListing;
