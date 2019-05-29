package openway.service;

import openway.model.Form;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.List;

public interface FormService {
    Form getFormById(Integer id_client);
    void createNewForm(String newForm);
    void deleteItem(Integer id_client);
    void deleteAll();
    List<Form> findAll();
    List<Integer> listOfIdClients();
}
