//package com.example.shop.components;
//
//import com.example.shop.entity.KhuyenMai;
//import com.example.shop.services.KhuyenMaiService;
//import org.springframework.scheduling.annotation.Scheduled;
//import org.springframework.stereotype.Component;
//
//import java.text.SimpleDateFormat;
//import java.util.Date;
//import java.util.List;
//
//@Component
//public class KhuyenMaiScheduler {
//    private final KhuyenMaiService khuyenMaiService;
//
//    public KhuyenMaiScheduler(KhuyenMaiService khuyenMaiService) {
//        this.khuyenMaiService = khuyenMaiService;
//    }
//
//    @Scheduled(fixedRate = 1000) // Cập nhật mỗi giây (1000 milliseconds)
//    public void updateKhuyenMaiStatus() {
//        Date currentDate = new Date();
//        List<KhuyenMai> khuyenMaiList = khuyenMaiService.findAll();
////        for (KhuyenMai khuyenMai : khuyenMaiList) {
////            if (khuyenMai.getTen().equals("Test")) {
////                if (khuyenMai.getNgayBatDau().after(currentDate)) {
////                    khuyenMai.setTrangThai("Sắp diễn ra");
////                    System.out.println("Khuyen Mai name: " + khuyenMai.getTen());
////                    System.out.println("Current date: " + currentDate);
////                    System.out.println("Start date: " + khuyenMai.getNgayBatDau());
////                    System.out.println("End date: " + khuyenMai.getNgayKetThuc());
////                    System.out.println(khuyenMai.getTrangThai());
////                } else if (khuyenMai.getNgayKetThuc().before(currentDate)) {
////                    khuyenMai.setTrangThai("Đã kết thúc");
////                    System.out.println("Khuyen Mai name: " + khuyenMai.getTen());
////                    System.out.println("Current date: " + currentDate);
////                    System.out.println("Start date: " + khuyenMai.getNgayBatDau());
////                    System.out.println("End date: " + khuyenMai.getNgayKetThuc());
////                    System.out.println(khuyenMai.getTrangThai());
////                } else {
////                    khuyenMai.setTrangThai("Đang diễn ra");
////                    System.out.println("Khuyen Mai name: " + khuyenMai.getTen());
////                    System.out.println("Current date: " + currentDate);
////                    System.out.println("Start date: " + khuyenMai.getNgayBatDau());
////                    System.out.println("End date: " + khuyenMai.getNgayKetThuc());
////                    System.out.println(khuyenMai.getTrangThai());
////                }
////            }
//            khuyenMaiService.save(khuyenMai);
//        }
//    }
//
//}
