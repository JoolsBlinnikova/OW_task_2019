package openway.service;

import openway.model.dto.AdminVO;

public interface AdminService {
    boolean authentication(String auth);

    AdminVO getAdminVO(String adminJson);
}