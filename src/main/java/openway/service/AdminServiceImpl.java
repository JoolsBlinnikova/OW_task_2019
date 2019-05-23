package openway.service;

import openway.model.Admin;
import openway.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminServiceImpl implements AdminService {

    private final AdminRepository repository;

    @Autowired
    public AdminServiceImpl(AdminRepository repository) {
        this.repository = repository;
    }

    @Override
    public Admin getByLogin(String login) {
        return repository.findAdminByLogin(login);
    }
}
