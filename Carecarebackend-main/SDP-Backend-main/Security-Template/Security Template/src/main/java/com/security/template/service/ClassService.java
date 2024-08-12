package com.security.template.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.security.template.model.Class;
import com.security.template.repo.ClassRepo;

@Service
public class ClassService {
    @Autowired
    private ClassRepo crepo;

    public List<Class> getClasses() {
        return crepo.findAll();
    }

    public Class addClasses(Class clas) {
        return crepo.save(clas);
    }

    public String deleteClass(Long cid) {
        crepo.deleteById(cid);
        return "Class Deleted " + cid;
    }

    // New method to find class by cid
    public Optional<Class> getClassByCid(Long cid) {
        return crepo.findById(cid);
    }

    // New method to edit class details by uid
    public Class editClassDetails(Long uid, Class classDetails) {
        Optional<Class> existingClassOpt = crepo.findById(uid);
        if (existingClassOpt.isPresent()) {
            Class existingClass = existingClassOpt.get();
            existingClass.setService(classDetails.getService());
            existingClass.setCost(classDetails.getCost());
            return crepo.save(existingClass);
        } else {
            throw new RuntimeException("Class with ID " + uid + " not found");
        }
    }
}
