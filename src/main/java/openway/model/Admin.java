package openway.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity(name = "admins")
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_admin;
    private String login;
    private String password;

    public Admin(String login, String password) {
        this.login = login;
        this.password = password;
    }
}
