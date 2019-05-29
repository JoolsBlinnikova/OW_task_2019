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

@Service
public class FormServiceImpl implements FormService {
    final static Logger logger = Logger.getLogger(FormServiceImpl.class.getName());

    private final FormRepository formRepository;

    @Autowired
    public FormServiceImpl(FormRepository formRepository) {
        this.formRepository = formRepository;
    }

    @Override
    public Form getFormById(Integer id_client) {
        return formRepository.getOne(id_client);
    }

    @Override
    public void createNewForm(String newForm) {
        Gson g = new Gson();
        FormVO formVO = g.fromJson(newForm, FormVO.class);
        Form form = Mapper.formVOToForm(formVO);

        formRepository.save(form);
        logger.info("save to database:" + newForm);
    }

    @Override
    public void deleteItem(Integer id) {
        Form formItem = getFormById(id);
        formRepository.delete(formItem);
        logger.info("delete application № " + id);
    }

    @Override
    public void deleteAll() {
        formRepository.deleteAll();
        logger.info("delete all applications");
    }

    @Override
    public List<Form> findAll() {
        logger.info("find all applications");
        return formRepository.findAll();
    }

    @Override
    public List<Integer> listOfIdClients() {
        List<Integer> listOfId = new ArrayList<>();
        List<Form> forms = findAll();
        for (Form form : forms) {
            logger.info(form.getFirst_name());
            listOfId.add(form.getId_client());
        }
        int i = listOfId.size();
        logger.info("listOfId.size()=  "+i);
        return listOfId;
    }
}
