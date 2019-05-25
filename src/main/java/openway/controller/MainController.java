package openway.controller;

import openway.service.FormService;
import org.springframework.web.bind.annotation.*;

@RestController
public class MainController {

    private final FormService formService;

    public MainController(FormService formService) {
        this.formService = formService;
    }

    @PostMapping("/appliers")
    void newItem(@RequestBody String newItem){
        formService.createNewForm(newItem);
    }
}
