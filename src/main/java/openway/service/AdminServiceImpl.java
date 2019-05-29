package openway.service;

import com.google.gson.Gson;
import openway.model.Admin;
import openway.model.dto.AdminVO;
import openway.repository.AdminRepository;
import openway.utils.HashUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {

    private final AdminRepository adminRepository;

    @Autowired
    public AdminServiceImpl(AdminRepository adminRepository) {
        this.adminRepository = adminRepository;
    }


    @Override
    public AdminVO getAdminVO(String adminJson) {
        Gson g = new Gson();
        AdminVO formVO = g.fromJson(adminJson, AdminVO.class);
        return formVO;
    }

    @Override
    public boolean authentication(String auth){
        AdminVO adminVO = getAdminVO(auth);
        Admin admin = adminRepository.findAdminByLogin(adminVO.getLogin());
        try {
            return admin != null && HashUtil.check(adminVO.getPassword(), admin.getPassword());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }
}
