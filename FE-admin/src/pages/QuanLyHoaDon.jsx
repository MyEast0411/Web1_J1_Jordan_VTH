import * as React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Tooltip } from "antd";
import { HiOutlineClipboardList } from "react-icons/hi";
import { AiOutlineFilter } from "react-icons/ai";
import { Button, DatePicker, Space } from "antd";
const { RangePicker } = DatePicker;
import { Input, Option, Select } from "@material-tailwind/react";
import { SearchIcon } from "../components/voucher/common/SearchIcon";

import TabTrangThai from "../components/quanlyhoadon/TabTrangThai";

export default function QuanLyHoaDon() {
  const [filterValue, setFilterValue] = React.useState("");
  const hasSearchFilter = Boolean(filterValue);
  const filteredItems = React.useMemo(() => {
    let filteredUsers = [...list];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter(
        (user) =>
          user.code.toLowerCase().includes(filterValue.toLowerCase()) ||
          user.ten.toLowerCase().includes(filterValue.toLowerCase()) ||
          user.ma.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      );
    }
    const data = filteredUsers.map((el, i) => {
      return {
        ...el,
        id: i + 1,
      };
    });
    console.log(data);

    return data;
  }, [list, filterValue, statusFilter]);
  return (
    <>
      <div>
        <div class="bg-white rounded-lg">
          <div className="mb-2 border-b-[1px] font-normal relative border-gray-500 text-lg flex items-center">
            <AiOutlineFilter />
            <p className="ml-2 mt-1"> Bộ lọc</p>
          </div>
          <div
            className="font-normal border-gray-500 text-lg mb-5 gap-4"
            style={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "8px",
              width: "100%",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.2s",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div
              className="flex gap-4 m-10"
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <label
                htmlFor="phone"
                className="text-sm font-medium text-gray-900"
                style={{
                  display: "inline-block",
                  justifyContent: "center",
                }}
              >
                Tìm kiếm
              </label>
              <div class="w-2/6 ">
                <Input
                  isClearable
                  className="w-full "
                  placeholder="Tìm kiếm bất kỳ..."
                  startContent={<SearchIcon />}
                  // value={filterValue}
                  // onClear={() => onClear()}
                  // onValueChange={onSearchChange}
                />
              </div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-900"
                style={{
                  display: "inline-block",
                }}
              >
                Loại
              </label>
              <div class="w-2/6">
                <Select variant="outlined" label="Loại đơn">
                  <Option>Tại quầy</Option>
                  <Option>Online</Option>
                </Select>
              </div>
            </div>

            {/* <div
            className="flex gap-4 m-10"
            style={{
              width: "100%",
              alignItems: "center",
              jus
            }}
          >
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-900 "
              style={{
                display: "inline-block",
              }}
            >
              Ngày bắt đầu
            </label>
            <div class="w-2/6 ">
              <Input type="date" label="Ngày Bắt Đầu" />
            </div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-900 "
              style={{
                display: "inline-block",
              }}
            >
              Ngày kết thúc
            </label>
            <div class="w-2/6">
              <Input type="date" label="Ngày Kết Thúc" />
            </div>
          </div> */}
            <div
              className="flex gap-4 m-10"
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <label
                className="block text-sm font-medium text-gray-900"
                style={{
                  display: "inline-block",
                }}
              >
                Tìm kiếm theo ngày
              </label>
              <RangePicker
                showTime={{ format: "HH:mm" }}
                format="DD-MM-YYYY HH:mm"
                style={{ height: "40px", width: "30%" }}
                // onChange={onChangeDatePicker}
              />
            </div>

            <div class="flex justify-center mx-auto gap-10">
              <div>
                <Button
                  type="primary"
                  style={{
                    backgroundColor: "#1976d2",
                    marginBottom: "2px",
                  }}
                >
                  Làm Mới
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-2 border-b-[1px] font-normal relative border-gray-500 text-lg flex  items-center">
            <HiOutlineClipboardList />
            <p className="ml-2 mt-1"> Danh sách hóa đơn</p>
            <Link to={"/"} className="absolute right-0 mb-1">
              <Button
                type="primary"
                style={{
                  backgroundColor: "#1976d2",
                  marginBottom: "2px",
                }}
              >
                + Tạo đơn hàng
              </Button>
            </Link>
          </div>
          <div
            className="font-normal border-gray-500 text-lg"
            style={{
              backgroundColor: "white",
              padding: "10px",
              borderRadius: "8px",
              width: "100%",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.2s",
            }}
          >
            <div>
              <TabTrangThai />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
