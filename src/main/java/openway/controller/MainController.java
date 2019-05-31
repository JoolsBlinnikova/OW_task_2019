package openway.controller;

import openway.model.Form;
import openway.service.AdminService;
import openway.service.FormService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

/**
 * Controller
 *
 * @author Jools
 * @version 1.0
 */
@RestController
public class MainController {

    /**
     * Apache log4j object is used to log all important info
     */
    private final static Logger logger = Logger.getLogger(MainController.class.getName());

    /**
     * Form service object. See {@link openway.service.FormServiceImpl}
     */
    private final FormService formService;

    /**
     * Admin service object. See {@link openway.service.AdminServiceImpl}
     */
    private final AdminService adminService;

    /**
     * Constructor
     *
     * @param formService  service for application
     * @param adminService service for admin
     */
    public MainController(FormService formService, AdminService adminService) {
        this.formService = formService;
        this.adminService = adminService;
    }

    /**
     * Save application to database
     *
     * @param newItem new application
     */
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/appliers")
    void newItem(@RequestBody String newItem) {
        logger.info("create a new application(called createNewForm(String newItem))");
        formService.createNewForm(newItem);
    }

    /**
     * Get all information about appliers
     *
     * @return list of forms
     */
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/info")
    List<Form> getForms() {
        logger.info("get all info about applications (called findAll())");
        return formService.findAll();
    }

    /**
     * Get list of appliers id
     *
     * @return list of id clients
     */
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/listId")
    List<Integer> getListOfId() {
        logger.info("get list of appliers id (called listOfIdClients())");
        return formService.listOfIdClients();
    }

    /**
     * Get login and password from admin
     *
     * @param auth login and password info
     * @return false if login or password incorrect or return true if all is correct
     */
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    boolean getLoginPassword(@RequestBody String auth) {
        logger.info("check auth");
        return adminService.authentication(auth);
    }
}