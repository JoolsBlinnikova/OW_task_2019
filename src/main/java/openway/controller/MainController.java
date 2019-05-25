package openway.controller;

import openway.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Date;


@RestController
public class MainController {

    private final AdminService adminService;

    @Autowired
    public MainController(AdminService adminService) {
        this.adminService = adminService;
    }

/*    @GetMapping("/start")
    public String getStartPage(Model model) {
        model.addAttribute("admin",adminService.getByLogin("jools"));
        return "index";
    }*/

//    @PostMapping("submitForm")
//    public String submit(@RequestParam String lastname,firstname, ){
//        adminService.
//    }
}
