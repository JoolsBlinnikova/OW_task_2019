package openway.controller;

import openway.model.Form;
import openway.service.AdminService;
import openway.service.FormService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@RestController
public class MainController {

    final static Logger logger = Logger.getLogger(MainController.class.getName());

    private final FormService formService;
    private final AdminService adminService;

    public MainController(FormService formService, AdminService adminService) {
        this.formService = formService;
        this.adminService = adminService;
    }

    /* Save application to database*/
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/appliers")
    void newItem(@RequestBody String newItem) {
        formService.createNewForm(newItem);
        logger.info("create a new application(called createNewForm(String newItem))");
    }

    /*Get all information about appliers*/
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/info")
    List<Form> getForms(){
        return formService.findAll();
    }

    /*Get list of appliers id*/
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/listId")
    List<Integer> getListOfId(){
        return formService.listOfIdClients();
    }


    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    boolean getLoginPassword(@RequestBody String auth){
        logger.info("check auth");
        return adminService.authentication(auth);
    }
}
