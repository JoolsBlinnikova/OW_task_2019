package openway.controller;

import openway.model.Form;
import openway.service.FormService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.logging.Logger;

@RestController
public class MainController {

    final static Logger logger = Logger.getLogger(MainController.class.getName());

    private final FormService formService;

    public MainController(FormService formService) {
        this.formService = formService;
    }

    @PostMapping("/appliers")
    void newItem(@RequestBody String newItem) {
        formService.createNewForm(newItem);
        logger.info("create a new application(called createNewForm(String newItem))");
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/info")
    List<Form> getForms(){
        return formService.findAll();
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/listId")
    List<Integer> getListOfId(){
        return formService.listOfIdClients();
    }
}
