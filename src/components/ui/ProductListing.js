function ProductListing({ title, viewAll, more, onViewAll, onReturn }) {
  return (
    <div className="flex justify-between ml-8 mt-8 mb-2">
      <h3 className="font-semibold text-xl">{title}</h3>
      <h3 className="font-semibold text-tin-color cursor-pointer hover:text-mermaid-net">
        {!viewAll ? (
          more ? (
            <span onClick={onViewAll}>{"ดูทั้งหมด >>"}</span>
          ) : (
            ""
          )
        ) : (
          <span onClick={onReturn}>{"<< ย้อนกลับ"}</span>
        )}
      </h3>
    </div>
  );
}

export default ProductListing;
