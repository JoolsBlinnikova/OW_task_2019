package openway.service;

import com.google.gson.Gson;
import openway.mapper.Mapper;
import openway.model.Form;
import openway.model.dto.FormVO;
import openway.repository.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.logging.Logger;
import java.util.List;

/**
 * Class implementing ${@link FormService}
 *
 * @author Jools
 * @version 1.0
 */
@Service
public class FormServiceImpl implements FormService {
    /**
     * Apache log4j object is used to log all important info
     */
    final static private Logger logger = Logger.getLogger(FormServiceImpl.class.getName());

    /**
     * Form repository object
     */
    private final FormRepository formRepository;

    /**
     * Constructor
     *
     * @param formRepository form repository object
     */
    @Autowired
    public FormServiceImpl(FormRepository formRepository) {
        this.formRepository = formRepository;
    }

    /**
     * Create new application
     *
     * @param newForm information about applier
     */
    @Override
    public void createNewForm(String newForm) {
        logger.info("called createNewForm() then parse json");
        Gson g = new Gson();
        FormVO formVO = g.fromJson(newForm, FormVO.class);
        Form form = Mapper.formVOToForm(formVO);

        formRepository.save(form);
        logger.info("save to database:" + newForm);
    }

    /**
     * Get list with all applications
     *
     * @return list of applications
     */
    @Override
    public List<Form> findAll() {
        logger.info("find all applications (called findAll())");
        return formRepository.findAll();
    }

    /**
     * Get list with id of all appliers
     *
     * @return list with id appliers
     */
    @Override
    public List<Integer> listOfIdClients() {
        logger.info("called listOfClients()");
        List<Integer> listOfId = new ArrayList<>();
        List<Form> forms = findAll();
        for (Form form : forms) {
            listOfId.add(form.getId_client());
        }
        int i = listOfId.size();
        logger.info("listOfId.size()=  " + i);
        return listOfId;
    }
}