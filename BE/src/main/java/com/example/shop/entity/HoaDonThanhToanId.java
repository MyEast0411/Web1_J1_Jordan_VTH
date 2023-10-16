package com.example.shop.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.UUID;
@Data
@NoArgsConstructor
@AllArgsConstructor
public class HoaDonThanhToanId  implements Serializable {
    private String id_hoa_don;

    private String id_thanh_toan;
}
