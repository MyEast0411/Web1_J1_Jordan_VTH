import React, { useEffect, useState } from "react";
import InfoTop from "../layout/InfoTop";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import { Link, useParams } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";
import {
  getAllSanPhamChiTietByIdSanPham,
  getHinhAnhByIdSPCT,
} from "../api/SanPham";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/react";
import AlsoLike from "./AlsoLike";

export default function DetailProduct() {
  const { idSP } = useParams();
  const [sanPhamChiTiets, setSanPhamChiTiets] = useState([]);
  const [hinhAnhs, setHinhAnhs] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImageGocChup, setSelectedImageGocChup] = useState("");
  const [selectedImageDisplay, setSelectedImageDisplay] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedIdSPCT, setSelectedIdSPCT] = useState("");
  const [runFirstTime, setRunFirstTime] = useState(false);

  const handleImageClick = (spct) => {
    setSelectedImage(spct.defaultImg);
    setSelectedImageDisplay(spct.defaultImg);
    // setSelectedSize(spct.id_kich_co.ten);
    console.log(spct.id);
    setSelectedIdSPCT(spct.id);
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
    console.log("Size: " + size);
  };

  const fetchSanPhamById = async () => {
    try {
      const data = await getAllSanPhamChiTietByIdSanPham(idSP);
      // console.log("fetchSanPhamById:", data);
      setSanPhamChiTiets(data);
      if (!runFirstTime) {
        setSelectedImage(data.length > 0 ? data[0].defaultImg : "");
        setSelectedImageDisplay(data.length > 0 ? data[0].defaultImg : "");
        setRunFirstTime(true);
      }
    } catch (error) {
      console.error("Error fetchSanPham():", error);
    }
  };

  const fetchHinhAnhByIdSPCT = async () => {
    try {
      const data = await getHinhAnhByIdSPCT(selectedIdSPCT);
      // console.log("ha: ", data);
      setHinhAnhs(data);
    } catch (error) {
      console.error("Error fetchHinhAnhByIdSPCT():", error);
    }
  };
  useEffect(() => {
    fetchSanPhamById();
    fetchHinhAnhByIdSPCT();
  }, [idSP, selectedIdSPCT]);

  useEffect(() => {
    if (runFirstTime && selectedImage) {
      const selectedId = sanPhamChiTiets.find(
        (spct) => spct.defaultImg === selectedImage
      )?.id;
      setSelectedIdSPCT(selectedId);
      fetchHinhAnhByIdSPCT();
    }
  }, [selectedImage]);

  const handleImageHover = (image) => {
    setSelectedImageGocChup(image);
    setSelectedImageDisplay(image);
  };

  if (sanPhamChiTiets.length === 0) {
    return null;
  }

  return (
    <>
      <InfoTop />
      <Header />

      <div className="main-detail-product">
        <Breadcrumbs size="lg" className="my-3">
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link to="/shop">Shop</Link>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <Link className="text-[#B4B4B3] cursor-default">
              Detail product
            </Link>
          </BreadcrumbItem>
        </Breadcrumbs>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 detail-product-left relative">
            <div className="grid grid-cols-6 gap-4 sticky-grid">
              <div className="col-start-1 col-end-2">
                <div className="flex flex-col container-main-detail-img-pro">
                  {hinhAnhs.map((item) => (
                    <img
                      key={item.id}
                      src={item.ten}
                      alt=""
                      className="main-detail-product-img"
                      onMouseOver={() => handleImageHover(item.ten)}
                    />
                  ))}
                </div>
              </div>
              <div className="col-start-2 col-end-6">
                <img
                  src={selectedImageDisplay}
                  alt=""
                  className="main-img-detail-pro"
                />
              </div>
            </div>
          </div>

          <div className="col-span-1 detail-product-right">
            <div className="detail-pro-name">{sanPhamChiTiets[0].ten}</div>
            {sanPhamChiTiets[0].id_the_loai && (
              <div className="detail-pro-gender">
                {sanPhamChiTiets[0].id_the_loai.ten}
              </div>
            )}
            <div className="detail-pro-price mt-5">
              ${sanPhamChiTiets[0].giaBan}
            </div>
            <div className="choose-color-product flex">
              {/* Tổng Sản phẩm chi tiết phải tương ứng với tổng số màu sắc*/}
              {sanPhamChiTiets.map((spct) => (
                <img
                  key={spct.id}
                  src={spct.defaultImg}
                  alt=""
                  className={`choose-color-img-pro ${
                    selectedImage === spct.defaultImg ? "selected-border" : ""
                  }`}
                  onClick={() => handleImageClick(spct)}
                />
              ))}
            </div>
            <div className="detail-pro-select-size-title flex justify-between mt-10">
              <div> Select Size</div>
              <Link to="/size-guide" className="size-guide underline">
                {" "}
                Size Guide
              </Link>
            </div>
            <div className="detail-pro-select-size-button-choose grid grid-cols-2 gap-4">
              {sanPhamChiTiets.map((spct) => (
                <div
                  key={spct.id}
                  className={`detail-pro-select-size-button text-center ${
                    selectedSize === spct.id_kich_co.ten
                      ? "selected-border"
                      : ""
                  }`}
                  onClick={() => handleSizeClick(spct.id_kich_co.ten)}
                >
                  {spct.id_kich_co.ten}
                </div>
              ))}
              <div className="out-of-size text-center">46.5</div>
            </div>
            <div className="interested flex justify-center text-center mt-10">
              <div>
                4 interest-free payments of $52.50 with{" "}
                <span className="font-medium"> Klarna</span>.{" "}
                <a href="#" className="underline link-underline">
                  Learn More
                </a>
              </div>
            </div>
            <div className="flex flex-col detail-pro-group-btn">
              <div className="checkout-button mb-5 flex justify-center">
                <button>Add to bag</button>
              </div>
              <div className="paypal-button flex justify-center align-center">
                <button>Favorite</button>
                <AiOutlineHeart className="ml-2" />
              </div>
            </div>
            <div className="detail-pro-review mt-10">
              <Accordion className="px-0" selectionMode="multiple">
                <AccordionItem
                  key="1"
                  aria-label="Review"
                  title="Review (8)"
                  className="font-medium"
                >
                  <div className="review-card">
                    <div className="flex align-center">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalfAlt />
                      <p className="ml-5">4.9 Stars</p>
                    </div>
                  </div>
                </AccordionItem>
                <AccordionItem
                  key="2"
                  aria-label="Sale & Offers"
                  title="Sale & Offers"
                  className="font-medium"
                >
                  Shop All - Up to 60% OFF
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </div>

      <AlsoLike />
      <Footer />
    </>
  );
}
