package openway.service;

import openway.model.dto.AdminVO;

/**
 * Service interface for admin
 *
 * @author Jools
 * @version 1.0
 */
public interface AdminService {
    boolean authentication(String auth);

    AdminVO getAdminVO(String adminJson);
}