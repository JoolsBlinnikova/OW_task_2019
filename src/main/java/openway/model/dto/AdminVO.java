package openway.model.dto;

import lombok.Data;

@Data
public class AdminVO {
    private String login;
    private String password;

    public AdminVO(String login, String password) {
        this.login = login;
        this.password = password;
    }
}
