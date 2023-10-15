import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4} from "uuid";
import { toast } from "react-toastify";

export default function ThemSanPham() {
  let navigate = useNavigate();
  const [isBlur, setIsBlur] = useState(false);
  const [mauSac, setMauSac] = useState([]);
  const [thuongHieu, setThuongHieu] = useState([]);
  const [chatLieu, setChatLieu] = useState([]);
  const [deGiay, setDeGiay] = useState([]);
  const [kichCo, setKichCo] = useState([]);
  const [nhanHieu, setNhanHieu] = useState([]);
  const [sanPham, setSanPham] = useState({
    "ma" : "",
    "ten" : "",
    "soLuongTon" : "",
    "khoiLuong" : "",
    "moTa" : "",
    "giaNhap" : "",
    "giaBan" : "",
    "id_mau_sac" : "",
    "id_kich_co" : "",
    "id_chat_lieu" : "",
    "id_de_giay" : "",
    "id_thuong_hieu" : "",
    "id_nhan_hieu" : ""
  });
  const { ma , ten, soLuongTon, khoiLuong, moTa, giaBan, giaNhap,
    id_thuong_hieu, id_chat_lieu,id_de_giay,id_kich_co,id_mau_sac,id_nhan_hieu} = sanPham;

    const onChange = (e) => {
        setSanPham({...sanPham,[e.target.name]: e.target.value});
    };
  useEffect(() => {
    getAllNH();
    getAllMS();
    getAllCL();
    getAllDG();
    getAllKC();
    getAllTH();
  }, []);
    const getAllNH = async() => {
    await axios.get("http://localhost:8080/getAllNH").then((response) => {
        setNhanHieu(response.data);
    });
    }
    const getAllMS = async() => {
    await axios.get("http://localhost:8080/getAllMS").then((response) => {
        setMauSac(response.data);
    });
    }

    const getAllTH = async() => {
    await axios.get("http://localhost:8080/getAllTH").then((response) => {
        setThuongHieu(response.data);
    });
    }

    const getAllCL = async() => {
    await axios.get("http://localhost:8080/getAllCL").then((response) => {
        setChatLieu(response.data);
    });
    }

    const getAllDG = async() => {
    await axios.get("http://localhost:8080/getAllDG").then((response) => {
        setDeGiay(response.data);
    });
    }

    const getAllKC = async() => {
    await axios.get("http://localhost:8080/getAllKC").then((response) => {
        setKichCo(response.data);
    });
  }
    const onSubmit =async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/add",sanPham).then((response) => {
          console.log(response);
          toast.success(`Thêm thành công`, {
          position: "top-right",
          autoClose: 2000,
          });
          navigate("/quan-ly-san-pham/san-pham")
        }).catch((error) => {
          toast.error(error.response.data, {
            position: "top-right",
            autoClose: 2000,
            });
        });
    }
  return (
    <>
      <div className="mx-5 md:mx-12">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Thêm mới sản phẩm
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Điền thông tin chi tiết sản phẩm
              </p>

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tên sản phẩm
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="ten"
                        className="block p-2 flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Nhập tên sản phẩm"
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Mã sản phẩm
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="ma"
                        className="block p-2 flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        placeholder="Nhập mã sản phẩm"
                        onChange={(e) => onChange(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Mô tả
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="moTa"
                      name="moTa"
                      placeholder=" Nhập mô tả sản phẩm"
                      rows={4}
                      className="block w-11/12 p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-gray-600">
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Giá bán
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="giaBan"
                      id="giaBan"
                      placeholder=" ..."
                      className="block w-80 rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => onChange(e)}
                    />
                    
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Giá nhập
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      name="giaNhap"
                      id="giaNhap"
                      placeholder=" ..."
                      className="block w-80 rounded-md p-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Thương hiệu
                  </label>
                  <div className="mt-2 space-x-2">
                  <select
                      id="thuongHieu"
                      name="id_thuong_hieu"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      onChange={(e) => onChange(e)}
                    >
                      <option selected>--Chọn Thương Hiệu--</option>
                      {thuongHieu.map((x) => (
                        <option key={x.id} 
                        value={x.id}
                        //style={{ backgroundColor: x.maMau, color: "white" }}
                        >
                        {x.ten}
                        </option>
                       ))}
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Màu sắc
                  </label>
                  <div className="mt-2 space-x-3">
                  <select
                      id="mauSac"
                      name="id_mau_sac"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      onChange={(e) => onChange(e)}
                    >
                      <option selected>--Chọn Màu Sắc--</option>
                      {mauSac.map((x) => (
                        <option key={x.id} 
                        value={x.id}
                        //style={{ backgroundColor: x.maMau, color: "white" }}
                        >
                        {x.ten}
                        </option>
                       ))}
                    </select>
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="chatLieu"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Chất Liệu
                  </label>
                  <div className="mt-2">
                    <select
                      id="chatLieu"
                      name="id_chat_lieu"
                      onChange={(e) => onChange(e)}
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option value="" selected>
                        --Chọn Chất Liệu--
                      </option>
                      {chatLieu.map((x) => (
                        <option key={x.id} 
                        value={x.id}
                        >
                        {x.ten}
                        </option>
                       ))}
                    </select>
                    
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="deGiay"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Đế giày
                  </label>
                  <div className="mt-2">
                    <select
                      id="deGiay"
                      name="id_de_giay"
                      onChange={(e) => onChange(e)}
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option selected>--Chọn Đế Giày--</option>
                      {deGiay.map((x) => (
                        <option key={x.id} 
                        value={x.id}
                        >
                        {x.ten}
                        </option>
                       ))}
                    </select>
                    
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Kích cỡ
                  </label>
                  <div className="mt-2">
                    <select
                      id="kichCo"
                      name="id_kich_co"
                      onChange={(e) => onChange(e)}
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option selected>--Chọn Kích Cỡ--</option>
                      {kichCo.map((x) => (
                        <option key={x.id} 
                        value={x.id}
                        >
                        {x.ten}
                        </option>
                       ))}
                    </select>
                    
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="country"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nhãn hiệu
                  </label>
                  <div className="mt-2">
                    <select
                      id="nhanHieu"
                      name="id_nhan_hieu"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                      onChange={(e) => onChange(e)}
                    >
                      <option selected>--Chọn Nhãn Hiệu--</option>
                      {nhanHieu.map((x) => (
                        <option key={x.id} 
                        value={x.id}
                        >
                        {x.ten}
                        </option>
                       ))}
                    </select>
                    
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Số lượng tồn
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      min={1}
                      name="soLuongTon"
                      placeholder="1"
                      className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Khối lượng
                  </label>
                  <div className="mt-2">
                    <input
                      type="number"
                      placeholder="Nhập khối lượng"
                      name="khoiLuong"
                      className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      onChange={(e) => onChange(e)}
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Hình ảnh sản phẩm
                  </label>
                  <div className="mt-2">
                    <input
                      
                      type="text"
                      placeholder="https://assets.nike.com/medias/sys_master/root/20211224/1tuJ/61c4c229aeb26901101a29d1/-1117Wx1400H-469034008-black-MODEL.jpg"
                      className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end gap-x-6">
            <Link to="/quan-ly-san-pham/san-pham"
              type="button"
              className="text-sm rounded-md  font-semibold leading-6 text-gray-900"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Thêm sản phẩm
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
