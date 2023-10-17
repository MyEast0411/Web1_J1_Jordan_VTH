package com.example.shop.controller;

import com.example.shop.entity.LichSuHoaDon;
import com.example.shop.service.LichSuHoaDonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
@RestController
@CrossOrigin("*")
@RequestMapping("lich_su_thanh_toan")
public class LichSuHoaDonController {
    @Autowired
    private LichSuHoaDonService lichSuHoaDonService;
    @GetMapping("getLichSuHoaDons/{id}")
    public ResponseEntity<List<LichSuHoaDon>> getLichSuHoaDons(@PathVariable String id){
        List<LichSuHoaDon> list = lichSuHoaDonService.getLichSuHoaDons(id);
        return ResponseEntity.ok(list);
    }

    @GetMapping("getLichSuHoaDon/{id}")
    public ResponseEntity<LichSuHoaDon> getLichSuHoaDon(){
        return ResponseEntity.ok(new LichSuHoaDon());
    }


    @PostMapping("add")
    public ResponseEntity<List<LichSuHoaDon>> addLichSuHoaDon(){
        return ResponseEntity.ok(new ArrayList<>());
    }

    @PutMapping("update/{id}")
    public ResponseEntity<List<LichSuHoaDon>> updateLichSuHoaDon(){
        return ResponseEntity.ok(new ArrayList<>());
    }

    @DeleteMapping("delete/{id}")
    public ResponseEntity<List<LichSuHoaDon>> deleteLichSuHoaDon(){
        return ResponseEntity.ok(new ArrayList<>());
    }
}
