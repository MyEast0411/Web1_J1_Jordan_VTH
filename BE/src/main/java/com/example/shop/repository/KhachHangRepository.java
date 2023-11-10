package com.example.shop.repository;

import com.example.shop.entity.KhachHang;
import com.example.shop.entity.Voucher;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface KhachHangRepository extends JpaRepository<KhachHang , String> {
    List<KhachHang> findAllByDeleted(int deleted);
}
