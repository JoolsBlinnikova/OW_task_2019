package openway.mapper;

import openway.model.Form;
import openway.model.dto.FormVO;

/**
 * Сlass for object interration
 *
 * @author Jools
 * @version 1.0 *
 */
public class Mapper {

    public static Form formVOToForm(FormVO formVO) {
        if (formVO == null)
            return null;
        Form form = new Form();
        form.setFirst_name(formVO.getFirst_name());
        form.setLast_name(formVO.getLast_name());
        form.setEmail(formVO.getEmail());
        form.setBirth_date(formVO.getBirth_date());
        form.setPhone(formVO.getPhone());
        form.setAnalysis(formVO.isAnalysis());
        form.setBack(formVO.isBack());
        form.setFront(formVO.isFront());
        form.setTesting(formVO.isTesting());
        form.setWorkdoc(formVO.isWorkdoc());
        form.setSoftware(formVO.isSoftware());
        form.setFintech(formVO.isFintech());
        form.setWorkdb(formVO.isWorkdb());
        form.setClientssupport(formVO.isClientssupport());
        form.setMarketing(formVO.isMarketing());
        form.setCompsecurity(formVO.isCompsecurity());
        form.setOther(formVO.isOther());
        form.setComment(formVO.getComment());
        form.setAbout_knowledge(formVO.getAbout_knowledge());
        form.setOpen_house(formVO.isOpen_house());
        form.setUniversity(formVO.getUniversity());
        form.setFaculty(formVO.getFaculty());
        form.setDepartment(formVO.getDepartment());
        form.setYear_admission(formVO.getYear_admission());
        form.setEnglish_level(formVO.getEnglish_level());
        form.setExperience(formVO.getExperience());
        form.setHow_know(formVO.getHow_know());
        form.setAgree(formVO.isAgree());

        return form;
    }
}