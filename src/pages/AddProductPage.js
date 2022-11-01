import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as categoryService from "../api/categoryApi";
import * as productService from "../api/productApi";

function AddProductPage() {
  const [productName, setProductName] = useState("");
  const [productDetail, setProductDetail] = useState("");
  const [unitPrice, setUnitPrice] = useState("");
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);
  const [stock, setStock] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [category, setCategory] = useState([]);

  const navigate = useNavigate();

  const inputEl1 = useRef();
  const inputEl2 = useRef();
  const inputEl3 = useRef();
  const inputEl4 = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      if (
        !productName ||
        !productDetail ||
        !unitPrice ||
        !image1 ||
        !image2 ||
        !image3 ||
        !image4 ||
        !stock ||
        !categoryId
      ) {
        return toast.error("กรุณากรอกข้อมูลให้ครบ");
      }
      if (productName) {
        formData.append("productName", productName);
      }
      if (productDetail) {
        formData.append("productDetail", productDetail);
      }
      if (unitPrice) {
        formData.append("unitPrice", unitPrice);
      }
      if (image1 && image2 && image3 && image4) {
        formData.append("image", image1);
        formData.append("image", image2);
        formData.append("image", image3);
        formData.append("image", image4);
      }
      if (stock) {
        formData.append("stock", stock);
      }
      if (categoryId) {
        formData.append("categoryId", categoryId);
      }
      await productService.addProduct(formData);
      toast.success("create success");
      setProductName("");
      setProductDetail("");
      setUnitPrice("");
      setImage1(null);
      setImage2(null);
      setImage3(null);
      setImage4(null);
      setStock("");
      setCategoryId("");
      navigate("/selling");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await categoryService.getAllCategory();
        setCategory(res.data.allCategory);
      } catch (err) {
        console.log(err);
      }
    };
    fetch();
  }, []);

  return (
    <>
      <form className="flex" onSubmit={handleSubmit}>
        <div className="flex flex-col w-1/2 gap-4   justify-center items-center">
          <input
            type="file"
            className="hidden"
            ref={inputEl1}
            onChange={(e) => {
              if (e.target.files[0]) {
                setImage1(e.target.files[0]);
              }
            }}
          />
          <div
            className="w-4/5 h-96  flex justify-center items-center  bg-gray-300"
            onClick={() => inputEl1.current.click()}
          >
            {image1 ? (
              <img
                className="w-full h-full"
                src={URL.createObjectURL(image1)}
                alt="product"
              />
            ) : (
              <div>
                <span className="text-mermaid-net">CLICK TO ADD PHOTO</span>
              </div>
            )}
          </div>
          <div className="w-4/5 h-40 gap-4 flex justify-center items-center">
            <input
              type="file"
              className="hidden"
              ref={inputEl2}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setImage2(e.target.files[0]);
                }
              }}
            />
            <div
              className="w-1/3 h-full flex justify-center items-center  bg-gray-300"
              onClick={() => inputEl2.current.click()}
            >
              {image2 ? (
                <img
                  className="w-full h-full"
                  src={URL.createObjectURL(image2)}
                  alt="product"
                />
              ) : (
                <div>
                  <span className="text-mermaid-net text-xs">
                    CLICK TO ADD PHOTO
                  </span>
                </div>
              )}
            </div>
            <input
              type="file"
              className="hidden"
              ref={inputEl3}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setImage3(e.target.files[0]);
                }
              }}
            />
            <div
              className="w-1/3 h-full flex justify-center items-center  bg-gray-300"
              onClick={() => inputEl3.current.click()}
            >
              {image3 ? (
                <img
                  className="w-full h-full"
                  src={URL.createObjectURL(image3)}
                  alt="product"
                />
              ) : (
                <div>
                  <span className="text-mermaid-net text-xs">
                    CLICK TO ADD PHOTO
                  </span>
                </div>
              )}
            </div>
            <input
              type="file"
              className="hidden"
              ref={inputEl4}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setImage4(e.target.files[0]);
                }
              }}
            />
            <div
              className="w-1/3 h-full flex justify-center items-center  bg-gray-300"
              onClick={() => inputEl4.current.click()}
            >
              {image4 ? (
                <img
                  className="w-full h-full"
                  src={URL.createObjectURL(image4)}
                  alt="product"
                />
              ) : (
                <div>
                  <span className="text-mermaid-net text-xs">
                    CLICK TO ADD PHOTO
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col  ">
          <div className="flex flex-col gap-4 h-4/5 ">
            <input
              type="text"
              className="block p-4 pl-5 w-full text-sm placeholder-vivid-orange text-gray-900 bg-gray-50  border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="ชื่อสินค้า"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />

            <select
              className="block p-4 pl-5 w-full text-sm placeholder-vivid-orange text-vivid-orange bg-gray-50  border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              name="category"
              id="category"
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
            >
              <option value="">เลือกประเภทสินค้า</option>
              {category?.map((item) => (
                <option value={item.id}>{item.categoryName}</option>
              ))}
            </select>
            <input
              type="text"
              className="block p-4 pl-5 w-full text-sm placeholder-vivid-orange text-gray-900 bg-gray-50  border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="ราคาสินค้า"
              value={unitPrice}
              onChange={(e) => setUnitPrice(e.target.value)}
            />
            <input
              type="text"
              className="block p-4 pl-5 w-full text-sm placeholder-vivid-orange text-gray-900 bg-gray-50  border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
              placeholder="จำนวนสินค้า"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
            <textarea
              type="text"
              className="block p-4 pl-5 w-full h-28 text-sm placeholder-vivid-orange text-gray-900 bg-gray-50  border border-vivid-orange focus:ring-vivid-orange focus:border-vivid-orange dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 resize-none"
              placeholder="รายละเอียดสินค้า"
              value={productDetail}
              onChange={(e) => setProductDetail(e.target.value)}
            />
            <div className="flex ">
              <button
                className={`text-white flex items-center justify-center bg-vivid-orange h-10 w-36 rounded-lg cursor-pointer hover:bg-transparent hover:border-2 hover:border-vivid-orange hover:text-vivid-orange active:bg-mermaid-net active:text-white 
          }`}
              >
                ลงขายสินค้า
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddProductPage;
