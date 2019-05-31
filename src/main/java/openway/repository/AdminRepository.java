package openway.repository;

import openway.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository interface for admin
 *
 * @author Jools
 * @version 1.0
 */
public interface AdminRepository extends JpaRepository<Admin, Integer> {
    Admin findAdminByLogin(final String login);
}