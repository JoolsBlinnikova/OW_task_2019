package openway.model;
import lombok.Data;

import javax.persistence.*;
import java.util.Date;


@Data
@Entity
@Table(name = "forms")
public class Form {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_client;
    private String first_name;
    private String last_name;
//    private String email;
//    private Date birth_date;
//    private int phone;
//    private Interests interests;
//    private String comment;
//    private String about_knowledge;
//    private boolean open_house_yes;
//    private boolean open_house_no;
//    private String university;
//    private String faculty;
//    private String department;
//    private int year_admission;
//    private String english_level;
//    private String experience;
//    private String how_know;


    public Form() {
    }

    public Form(String first_name, String last_name) {
        this.first_name = first_name;
        this.last_name = last_name;
    }
}
