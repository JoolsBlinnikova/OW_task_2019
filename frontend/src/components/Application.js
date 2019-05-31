import React, {Component} from 'react';
import './../css/Application.css'
import NavbarComp from "./NavbarComp";

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id_client: '',
            first_name: '',
            last_name: '',
            email: '',
            birth_date: '',
            phone: '',
            analysis: '',
            back: false,
            front: false,
            testing: false,
            workdoc: false,
            software: false,
            fintech: false,
            workdb: false,
            clientssupport: false,
            marketing: false,
            compsecurity: false,
            other: false,
            comment: '',
            about_knowledge: '',
            open_house: false,
            university: '',
            faculty: '',
            department: '',
            year_admission: '',
            english_level: '',
            experience: '',
            how_know: '',
            agree: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const {
            first_name, last_name, email, birth_date, phone, analysis, back, front, testing, workdoc, software,
            fintech, workdb, clientssupport, marketing, compsecurity, other, comment, about_knowledge, open_house,
            university, faculty, department, year_admission, english_level, experience, how_know, agree
        } = this.state;
        fetch('http://localhost:9091/appliers', {
                method: 'POST',
                body: JSON.stringify({
                    first_name,
                    last_name,
                    email,
                    birth_date,
                    phone,
                    analysis,
                    back,
                    front,
                    testing,
                    workdoc,
                    software,
                    fintech,
                    workdb,
                    clientssupport,
                    marketing,
                    compsecurity,
                    other,
                    comment,
                    about_knowledge,
                    open_house,
                    university,
                    faculty,
                    department,
                    year_admission,
                    english_level,
                    experience,
                    how_know,
                    agree
                })
            }
        );
        alert("Сохранить данные")
    }

    render() {

        const {
            first_name, last_name, email, birth_date, phone, comment, about_knowledge,
            university, faculty, department, year_admission, english_level, experience, how_know
        } = this.state;
        return (
            <div>
                <NavbarComp/>
                <form className="form" onSubmit={this.handleSubmit}>
                    <h2>Заявка на поступление в Летнюю Школу OpenWay</h2>
                    <text className="text">
                        Заявки принимаются до 31 мая включительно. Если у вас есть вопросы по стажировке, обращайтесь
                        к Екатерине Алудаури - куратору Летней Школы по электронной почте ealudauri@openwaygroup.com
                        или по телефону +7 921 965 32 63 (mobile, whatsapp, telegram)
                    </text>
                    <div className="option">
                        Имя *:<br/>
                        <div className="inline_div">
                            <input id="first_name_input" className="input_field" type="text" name="first_name"
                                   value={first_name}
                                   onChange={this.handleChange}/><br/>
                            <label htmlFor="first_name_input" className="firstName">
                                First Name
                            </label>
                        </div>
                        <div className="inline_div">
                            <input id="last_name_input" className="input_field" type="text" name="last_name"
                                   value={last_name}
                                   onChange={this.handleChange}/><br/>
                            <label htmlFor="last_name_input" className="form_item_lastName">
                                Last Name
                            </label>
                        </div>
                    </div>
                    <div className="option">
                        E-mail *:<br/>
                        <input className="input_field" type="email" name="email" value={email}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="option">
                        Дата рождения *<br/>
                        <input className="input_field" type="date" name="birth_date" value={birth_date}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="option">
                        Мобильный телефон<br/>
                        <input className="input_field" type="tel" name="phone" value={phone}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="option">
                        <div className="title">Чем Вам было бы интересно заниматься? *</div>
                        <div className="checkbox_option">
                            <input type="checkbox" name="analysis" value={true} onChange={this.handleChange}/>
                            Бизнес-анализ, IT-консалтинг
                        </div>
                        <div className="checkbox_option">
                            <input type="checkbox" name="back" value={true} onChange={this.handleChange}/>
                            Backend-разработка
                        </div>
                        <div className="checkbox_option">
                            <input type="checkbox" name="front" value={true} onChange={this.handleChange}/>
                            Frontend-разработка
                        </div>
                        <div className="checkbox_option">
                            <input type="checkbox" name="testing" value={true} onChange={this.handleChange}/>
                            Тестирование, управление качеством
                        </div>
                        <div className="checkbox_option">
                            <input type="checkbox" name="workdoc" value={true} onChange={this.handleChange}/>
                            Создание технической документации
                        </div>
                        <div className="checkbox_option">
                            <input type="checkbox" name="software" value={true} onChange={this.handleChange}/>
                            Внедрение сложного ПО (enterprise)
                        </div>
                        <div className="checkbox_option">
                            <input type="checkbox" name="fintech" value={true} onChange={this.handleChange}/>
                            Участие в финтех-проектах
                        </div>
                        <div className="checkbox_option">
                            <input type="checkbox" name="workdb" value={true} onChange={this.handleChange}/>
                            Работа с базами данных
                        </div>
                        <div className="checkbox_option">
                            <input type="checkbox" name="clientssupport" value={true} onChange={this.handleChange}/>
                            Поддержка клиентов
                        </div>
                        <div className="checkbox_option">
                            <input type="checkbox" name="marketing" value={true} onChange={this.handleChange}/>
                            Маркетинг в области IT
                        </div>
                        <div className="checkbox_option">
                            <input type="checkbox" name="compsecurity" value={true} onChange={this.handleChange}/>
                            Компьютерная безопасность
                        </div>
                        <div className="checkbox_option">
                            <input type="checkbox" name="other" value={true} onChange={this.handleChange}/>
                            Другое (укажите в поле внизу)
                        </div>
                    </div>
                    <div className="option">
                        Ваши комментарии<br/>
                        <textarea className="textarea_field" name="comment" value={comment}
                                  onChange={this.handleChange}> </textarea>
                    </div>
                    <div className="option">
                        Расскажите о своих знаниях компьютерных технологий, прикладного ПО,
                        языков программирования: *<br/>
                        <textarea className="textarea_field" name="about_knowledge" value={about_knowledge}
                                  onChange={this.handleChange}> </textarea>
                    </div>
                    <div className="option">
                        Я планирую прийти на день открытых дверей и послушать презентацию Школы<br/>
                        <div className="checkbox_option">
                            <input type="checkbox" name="open_house" value={true} onChange={this.handleChange}/>
                            Да
                        </div>
                        <div className="checkbox_option">
                            <input type="checkbox" name="open_house" value={false} onChange={this.handleChange}/>
                            Нет
                        </div>
                    </div>
                    <div className="option">
                        Университет *<br/>
                        <input className="input_field" type="text" name="university" value={university}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="option">
                        Факультет *<br/>
                        <input className="input_field" type="text" name="faculty" value={faculty}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="option">
                        Кафедра *<br/>
                        <input className="input_field" type="text" name="department" value={department}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="option">
                        Год поступления
                        <input className="input_field" type="text" name="year_admission" value={year_admission}
                               onChange={this.handleChange}/>
                    </div>
                    <div className="option">
                        Уровень английского языка *<br/>
                        <select name="english_level" value={english_level} onChange={this.handleChange}>
                            <option value="Elementary">Elementary</option>
                            <option value="Pre-Intermediate">Pre-Intermediate</option>
                            <option value="Intermediate">Intermediate</option>
                            <option value="UpperIntermediate">UpperIntermediate</option>
                            <option value="Advanced">Advanced</option>
                        </select>
                    </div>
                    <div className="option">
                        Опыт работы (если имеется)<br/>
                        <textarea className="textarea_field" name="experience" value={experience}
                                  onChange={this.handleChange}> </textarea>
                    </div>
                    <div className="option">
                        Откуда Вы узнали о Летней школе?<br/>
                        <input className="input_field" type="text" name="how_know" value={how_know}
                               onChange={this.handleChange}/>
                    </div>
                    <div id="end" className="option">
                        <input type="checkbox" name="agree" value={true} onChange={this.handleChange}/>
                        Отправляя эту форму, я соглашаюсь на обработку своих персональных данных, согласно с политике
                        Конфиденциальности OpenWay
                    </div>
                    <input id="ajaxButton" className="buttonSubmitForm" type="submit" name="button_submit"
                           value="Отправить заявку"/>
                    <br/>
                    <br/>
                </form>
            </div>
        );
    }
}

export default Application;