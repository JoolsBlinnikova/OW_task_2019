package openway.service;
import openway.model.Admin;

public interface AdminService {
    Admin getByLogin(String login);
}
