package com.example.shop.repositories;

import com.example.shop.entity.KhuyenMai;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface KhuyenMaiRepository extends JpaRepository<KhuyenMai, String> {
    List<KhuyenMai> findAll();

    KhuyenMai findByMa(String ma);

    @Query(value = "SELECT * FROM khuyen_mai k WHERE k.deleted = 0 ORDER BY k.trang_thai = 'Đang diễn ra' DESC, k.ngay_sua DESC", nativeQuery = true)
    List<KhuyenMai> findAllByDeleted();

    @Query(value = "SELECT * FROM khuyen_mai k " +
            "WHERE (:ngayBatDau BETWEEN k.ngay_bat_dau AND k.ngay_ket_thuc " +
            "OR :ngayKetThuc BETWEEN k.ngay_bat_dau AND k.ngay_ket_thuc) " +
            "AND k.deleted = 0", nativeQuery = true)
    List<KhuyenMai> findOverlappingPromotions(@Param("ngayBatDau") Date ngayBatDau, @Param("ngayKetThuc") Date ngayKetThuc);

    @Query(value = "SELECT * FROM khuyen_mai k " +
            "WHERE (k.ngay_bat_dau BETWEEN :ngayBatDau AND :ngayKetThuc " +
            "OR k.ngay_ket_thuc BETWEEN :ngayBatDau AND :ngayKetThuc " +
            "AND k.deleted = 0", nativeQuery = true)
    List<KhuyenMai> searchByDate(@Param("ngayBatDau") Date ngayBatDau, @Param("ngayKetThuc") Date ngayKetThuc);
}
