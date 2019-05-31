package openway.repository;

import openway.model.Form;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Repository interface for application
 *
 * @author Jools
 * @version 1.0
 */
public interface FormRepository extends JpaRepository<Form, Integer> {
}