package openway.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "admins")
public class Admin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_admin;
    private String login;
    private String password;
    private String role;

    public Admin() {
    }

    public Admin(int id_admin, String login, String password, String role) {
        this.id_admin = id_admin;
        this.login = login;
        this.password = password;
        this.role = role;
    }
}
