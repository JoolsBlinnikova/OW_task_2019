package openway.service;

import openway.model.Form;

import java.util.List;

/**
 * Service interface for application
 *
 * @author Jools
 * @version 1.0
 */
public interface FormService {
    void createNewForm(String newForm);

    List<Form> findAll();

    List<Integer> listOfIdClients();
}