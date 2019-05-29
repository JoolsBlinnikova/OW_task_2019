package openway.service;

import com.google.gson.Gson;
import openway.model.Admin;
import openway.model.dto.AdminVO;
import openway.repository.AdminRepository;
import openway.utils.HashUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;

@Service
public class AdminServiceImpl implements AdminService {

    private final AdminRepository adminRepository;

    final static private Logger logger = Logger.getLogger(AdminServiceImpl.class.getName());

    @Autowired
    public AdminServiceImpl(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }

    @Override
    public AdminVO getAdminVO(String adminJson) {
        logger.info("called getAdminVO()");
        Gson g = new Gson();
        AdminVO adminVO = g.fromJson(adminJson, AdminVO.class);
        logger.info("parse json and get admin value object");
        return adminVO;
    }

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