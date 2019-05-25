package openway.service;
import openway.model.Admin;
import openway.model.Form;

public interface AdminService {
    Admin getByLogin(String login);

}
