package openway.service;

import com.google.gson.Gson;
import openway.model.Admin;
import openway.model.dto.AdminVO;
import openway.repository.AdminRepository;
import openway.utils.HashUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;

/**
 * Class implementing ${@link AdminService}
 *
 * @author Jools
 * @version 1.0
 */
@Service
public class AdminServiceImpl implements AdminService {

    /**
     * Apache log4j object is used to log all important info
     */
    final static private Logger logger = Logger.getLogger(AdminServiceImpl.class.getName());

    /**
     * Admin repository object
     */
    private final AdminRepository adminRepository;

    /**
     * Constructor
     *
     * @param adminRepository admin repository object
     */
    @Autowired
    public AdminServiceImpl(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    /**
     * Parse json and get admin information
     *
     * @param adminJson json with admin info
     * @return admin value object
     */
    @Override
    public AdminVO getAdminVO(String adminJson) {
        logger.info("called getAdminVO()");
        Gson g = new Gson();
        AdminVO adminVO = g.fromJson(adminJson, AdminVO.class);
        logger.info("parse json and get admin value object");
        return adminVO;
    }

    /**
     * check entered data(login and password) from start page
     *
     * @param auth info with entered login and password
     * @return false - if login and password incorrect, true - admin authenticated
     */
    @Override
    public boolean authentication(String auth) {
        logger.info("called authentication()");
        AdminVO adminVO = getAdminVO(auth);
        Admin admin = adminRepository.findAdminByLogin(adminVO.getLogin());
        try {
            return admin != null && HashUtil.check(adminVO.getPassword(), admin.getPassword());
        } catch (Exception e) {
            e.printStackTrace();
        }
        logger.info("check entered data from start page");
        return false;
    }
}