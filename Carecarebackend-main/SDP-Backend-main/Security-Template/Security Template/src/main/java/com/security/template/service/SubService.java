package com.security.template.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.template.model.Sub;
import com.security.template.repo.SubRepo;

import java.util.List;
import java.util.Optional;

@Service
public class SubService {
    @Autowired
    private SubRepo srepo;

    public List<Sub> getSubs() {
        return srepo.findAll();
    }

    public Sub addSubs(Sub sub) {
        return srepo.save(sub);
    }

    public String deleteSub(Long sid) {
        srepo.deleteById(sid);
        return "Subject deleted successfully";
    }

    public Optional<Sub> getSubBySid(Long sid) {
        return srepo.findById(sid);
    }

    public Sub updateSub(Long sid, Sub subDetails) {
        Sub sub = srepo.findById(sid).orElse(null);
        if (sub != null) {
            sub.setTitle(subDetails.getTitle());
            sub.setCredit(subDetails.getCredit());
            sub.setUser(subDetails.getUser());
            srepo.save(sub);
        }
        return sub;
    }
}
