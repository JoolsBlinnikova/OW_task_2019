package openway.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "forms")
public class Form {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_client;
    private String first_name;
    private String last_name;
    private String email;
    private String birth_date;
    private String phone;
    private boolean analysis;
    private boolean back;
    private boolean front;
    private boolean testing;
    private boolean workdoc;
    private boolean software;
    private boolean fintech;
    private boolean workdb;
    private boolean clientssupport;
    private boolean marketing;
    private boolean compsecurity;
    private boolean other;
    private String comment;
    private String about_knowledge;
    private boolean open_house;
    private String university;
    private String faculty;
    private String department;
    private String year_admission;
    private String english_level;
    private String experience;
    private String how_know;
    private boolean agree;


    public Form() {
    }

    public Form(Integer id_client, String first_name, String last_name, String email, String birth_date, String phone,
                boolean analysis, boolean back, boolean front, boolean testing, boolean workdoc,
                boolean software, boolean fintech, boolean workdb, boolean clientssupport,
                boolean marketing, boolean compsecurity, boolean other, String comment,
                String about_knowledge, boolean open_house, String university, String faculty,
                String department, String year_admission, String english_level, String experience,
                String how_know, boolean agree) {
        this.id_client = id_client;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.birth_date = birth_date;
        this.phone = phone;
        this.analysis = analysis;
        this.back = back;
        this.front = front;
        this.testing = testing;
        this.workdoc = workdoc;
        this.software = software;
        this.fintech = fintech;
        this.workdb = workdb;
        this.clientssupport = clientssupport;
        this.marketing = marketing;
        this.compsecurity = compsecurity;
        this.other = other;
        this.comment = comment;
        this.about_knowledge = about_knowledge;
        this.open_house = open_house;
        this.university = university;
        this.faculty = faculty;
        this.department = department;
        this.year_admission = year_admission;
        this.english_level = english_level;
        this.experience = experience;
        this.how_know = how_know;
        this.agree = agree;
    }
}