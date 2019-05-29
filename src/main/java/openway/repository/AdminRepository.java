package openway.repository;
import openway.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AdminRepository extends JpaRepository<Admin, Integer> {
    Admin findAdminByLogin(final String login);
}