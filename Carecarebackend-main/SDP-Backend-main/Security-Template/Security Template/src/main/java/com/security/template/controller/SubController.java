package com.security.template.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.security.template.model.Sub;
import com.security.template.service.SubService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/subs")
public class SubController {
    @Autowired
    private SubService sservice;

    @GetMapping("/getsubs")
    public List<Sub> getSubs() {
        return sservice.getSubs();
    }

    @PostMapping("/add")
    public Sub addSubs(@RequestBody Sub sub) {
        return sservice.addSubs(sub);
    }

    @DeleteMapping("/delete/{sid}")
    public String deleteSub(@PathVariable Long sid) {
        return sservice.deleteSub(sid);
    }

    @GetMapping("/find/{sid}")
    public Optional<Sub> getSubBySid(@PathVariable Long sid) {
        return sservice.getSubBySid(sid);
    }

    @PutMapping("/update/{sid}")
    public Sub updateSub(@PathVariable Long sid, @RequestBody Sub subDetails) {
        return sservice.updateSub(sid, subDetails);
    }
}