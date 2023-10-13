package com.example.shop.repositories;

import com.example.shop.entity.SanPhamChiTiet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ChiTietSanPhamRepository extends JpaRepository<SanPhamChiTiet, String> {
}
