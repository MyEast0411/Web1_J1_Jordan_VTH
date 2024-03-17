package com.example.shop.controller;

import com.example.shop.entity.DeGiay;
import com.example.shop.entity.ThuongHieu;
import com.example.shop.repositories.DeGiayRepository;
import com.example.shop.repositories.ThuongHieuRepository;
import com.example.shop.requests.UpdateDeGiayRequest;
import com.example.shop.requests.UpdateThuongHieuRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

@Controller
@RestController
@CrossOrigin("*")
@RequestMapping("de-giay")
public class DeGiayController {
    @Autowired
    private DeGiayRepository repo;

    @GetMapping("getAllDeGiay")
    public ResponseEntity getAllDeGiay() {
        return ResponseEntity.ok(repo.getAll());
    }

    @GetMapping("getByMa/{ma}")
    public ResponseEntity getByMa(@PathVariable String ma) {
        return ResponseEntity.ok(repo.findByMa(ma));
    }

    @PostMapping("/addDeGiay")
    public ResponseEntity addDeGiay(@RequestBody DeGiay request) {
        try {
            if(repo.existsByMa(request.getMa())) {
                return ResponseEntity.badRequest().body("Đã tồn tại mã đế giày này");
            }
            if(repo.existsByTen(request.getTen())) {
                return ResponseEntity.badRequest().body("Đã tồn tại đế giày này");
            }
            DeGiay deGiay = DeGiay.builder()
                    .ma(request.getMa())
                    .ten(request.getTen())
                    .ngayTao(new Date())
                    .nguoiTao("Đông")
                    .deleted(1)
                    .build();
            repo.save(deGiay);
            return ResponseEntity.ok("Thành công");
        }catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @PutMapping("deleteDeGiay/{maDeGiay}")
    public ResponseEntity deleteDeGiay(@PathVariable String maDeGiay) {
        try {
            DeGiay deGiay = repo.findByMa(maDeGiay);
            deGiay.setDeleted(0);
            repo.save(deGiay);
            return ResponseEntity.ok("Thành công");
        }catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("ERR");
        }
    }

    @PutMapping("updateDeGiay")
    public ResponseEntity updateDeGiay(@RequestBody UpdateDeGiayRequest request) {
        try {
            DeGiay cl = repo.findById(request.getId()).get();
            cl.setMa(request.getMa());
            cl.setTen(request.getTen());
            cl.setNgaySua(new Date());
            cl.setNguoiSua("Đông");
            repo.save(cl);
            return ResponseEntity.ok("Thành công");
        }catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.badRequest().body("ERR");
        }
    }
}
