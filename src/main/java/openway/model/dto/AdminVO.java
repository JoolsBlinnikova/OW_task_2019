package openway.model.dto;

import lombok.Data;

/**
 * Class AdminVO used for transfer admin data
 *
 * @author Jools
 * @version 1.0
 */
@Data
public class AdminVO {
    private String login;
    private String password;

    public AdminVO(String login, String password) {
        this.login = login;
        this.password = password;
    }
}