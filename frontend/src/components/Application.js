import React, {Component} from 'react';
import './../css/Application.css'

class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const { first_name, last_name } = this.state;
        fetch('http://localhost:9091/appliers', {
                method: 'POST',
                body:JSON.stringify({
                    first_name,
                    last_name,
                })
            }
        )
    }

    getInfo(){
        fetch('http://localhost:9091/appliers', {
            method: 'GET'
        }).then(res => res.json()).then(res => this.setState({
            first_name: res.first_name,
            last_name: res.last_name
        }))
    }

    componentDidMount() {

    }

    render() {
        const { first_name, last_name } = this.state;
        return (
            <div>
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
                            <input id="first_name_input" className="input_field" type="text" name="first_name" value={first_name}
                                   onChange={this.handleChange}/><br/>
                        <label htmlFor="first_name_input" className="firstName">
                            First Name
                        </label>
                    </div>
                    <div className="inline_div">
                            <input id="last_name_input" className="input_field" type="text" name="last_name" value={last_name}
                                   onChange={this.handleChange}/><br/>
                        <label htmlFor="last_name_input" className="form_item_lastName">
                            Last Name
                        </label>
                    </div>
                </div>
                <div className="option">
                    E-mail *:<br/>
                    <input className="input_field" type="email" name="email"/>
                </div>
                <div className="option">
                    Дата рождения *<br/>
                    <input className="input_field" type="text" name="birthday"/>
                </div>
                <div className="option">
                    Мобильный телефон<br/>
                    <input className="input_field" type="tel" name="phone"/>
                </div>
                <div className="option">
                    <div className="title">Чем Вам было бы интересно заниматься? *</div>
                    <div className="checkbox_option">
                        <input type="checkbox" name="analysis_item" value="Бизнес-анализ, IT-консалтинг"/>
                        Бизнес-анализ, IT-консалтинг
                    </div>
                    <div className="checkbox_option">
                        <input type="checkbox" name="back_item" value="Backend-разработка"/>
                        Backend-разработка
                    </div>
                    <div className="checkbox_option">
                        <input type="checkbox" name="front_item" value="Frontend-разработка"/>
                        Frontend-разработка
                    </div>
                    <div className="checkbox_option">
                        <input type="checkbox" name="testing_item" value="Тестирование, управление качеством"/>
                        Тестирование, управление качеством
                    </div>
                    <div className="checkbox_option">
                        <input type="checkbox" name="documentation_item" value="Создание технической документации"/>
                        Создание технической документации
                    </div>
                    <div className="checkbox_option">
                        <input type="checkbox" name="software_item" value="Внедрение сложного ПО (enterprise)"/>
                        Внедрение сложного ПО (enterprise)
                    </div>
                    <div className="checkbox_option">
                        <input type="checkbox" name="fintech_item" value="Участие в финтех-проектах"/>
                        Участие в финтех-проектах
                    </div>
                    <div className="checkbox_option">
                        <input type="checkbox" name="database_item" value="Работа с базами данных"/>
                        Работа с базами данных
                    </div>
                    <div className="checkbox_option">
                        <input type="checkbox" name="clientsupport_item" value="Поддержка клиентов"/>
                        Поддержка клиентов
                    </div>
                    <div className="checkbox_option">
                        <input type="checkbox" name="marketing_item" value="Маркетинг в области IT"/>
                        Маркетинг в области IT
                    </div>
                    <div className="checkbox_option">
                        <input type="checkbox" name="compsecurity_item" value="Компьютерная безопасность"/>
                        Компьютерная безопасность
                    </div>
                    <div className="checkbox_option">
                        <input type="checkbox" name="other_item" value="Другое (укажите в поле внизу)"/>
                        Другое (укажите в поле внизу)
                    </div>
                </div>
                <div className="option">
                    Ваши комментарии<br/>
                    <textarea className="textarea_field" name="comments"> </textarea>
                </div>
                <div className="option">
                    Расскажите о своих знаниях компьютерных технологий, прикладного ПО,
                    языков программирования: *<br/>
                    <textarea className="textarea_field" name="knowledge"> </textarea>
                </div>
                <div className="option">
                    Я планирую прийти на день открытых дверей и послушать презентацию Школы<br/>
                    <div className="checkbox_option">
                        <input type="checkbox" name="checkbox_yes" value="Да"/>
                        Да
                    </div>
                    <div className="checkbox_option">
                        <input type="checkbox" name="checkbox_no" value="Нет"/>
                        Нет
                    </div>
                </div>
                <div className="option">
                    Университет *<br/>
                    <input className="input_field" type="text" name="university"/>
                </div>
                <div className="option">
                    Факультет *<br/>
                    <input className="input_field" type="text" name="faculty"/>
                </div>
                <div className="option">
                    Кафедра *<br/>
                    <input className="input_field" type="text" name="department"/>
                </div>
                <div className="option">
                    Год поступления
                    <input className="input_field" type="text" name="yearAdmission"/>
                </div>
                <div className="option">
                    Уровень английского языка *<br/>
                    <select name="select_level" value={this.state.value} onChange={this.handleChange}>
                        <option value="Elementary">Elementary</option>
                        <option value="Pre-Intermediate">Pre-Intermediate</option>
                        <option value="Intermediate">Pre-Intermediate</option>
                        <option value="Upper Intermediate">UpperIntermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>
                <div className="option">
                    Опыт работы (если имеется)<br/>
                    <textarea className="textarea_field" name="experience"> </textarea>
                </div>
                <div className="option">
                    Откуда Вы узнали о Летней школе?<br/>
                    <input className="input_field" type="text" name="how_know"/>
                </div>
                <div id="end" className="option">
                    <input type="checkbox" name="checkbox_agree" value="agree"/>
                    Отправляя эту форму, я соглашаюсь на обработку своих персональных данных, согласно с политике
                    Конфиденциальности OpenWay
                </div>
                <input id="ajaxButton" className="option" type="submit" name="button_submit" value="Отправить заявку"/>
                <br/>
                <br/>
            </form>
                <input type="submit" value="Получить инфу" onSubmit={this.getInfo}/>
            </div>
        );
    }
}

export default Application;