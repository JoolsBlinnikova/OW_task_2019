import React, {Component} from 'react';
import '../css/Info.css'
import {
    BootstrapTable,
    TableHeaderColumn
} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'
import NavbarComp from "./NavbarComp";

class Info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            isContentShown: false,
            data: [],
            forms: [],
            listId: [],
            interests: '',
            first_name: '',
            last_name: '',
            email: '',
            birth_date: '',
            phone: '',
            analysis: false,
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
        this.getListOfId = this.getListOfId.bind(this);
        this.addDataToTheTable = this.addDataToTheTable.bind(this);
        this.getForms = this.getForms.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    getListOfId() {
        fetch('http://localhost:9091/listId')
            .then((resp) => {
                return resp.json()
            })
            .then(data => {
                let idFromDB = data.map(id => {
                    return {value: id, display: id}
                });
                this.setState({listId: [{value: 'all', display: 'Select id'}].concat(idFromDB)});
            }).catch(error => {
            console.log(error);
        });

    }

    getForms() {
        fetch('http://localhost:9091/info')
            .then(resp => {
                return resp.json()
            })
            .then(resp => this.setState(
                {
                    forms: resp,
                    isContentShown: true
                }))
            .catch(error => {
                console.log(error);
            });
        this.getListOfId();
    }

    addDataToTheTable() {
        this.getForms();
        this.getListOfId();
        let array = [];
        let textOfInterests = '';
        let textOpenHouse = 'Нет'
        for (let i = 0; i < this.state.forms.length; i++) {
            if (this.state.id == this.state.forms[i].id_client) {
                if (this.state.forms[i].analysis === true)
                    textOfInterests += "Бизнес-анализ, IT-консалтинг; ";
                if (this.state.forms[i].back === true)
                    textOfInterests += "Backend-разработка; ";
                if (this.state.forms[i].front === true)
                    textOfInterests += "Frontend-разработка;  ";
                if (this.state.forms[i].testing === true)
                    textOfInterests += "Тестирование, управление качеством; ";
                if (this.state.forms[i].workdoc === true)
                    textOfInterests += "Создание технической документации; ";
                if (this.state.forms[i].software === true)
                    textOfInterests += "Внедрение сложного ПО (enterprise); ";
                if (this.state.forms[i].fintech === true)
                    textOfInterests += "Участие в финтех-проектах; ";
                if (this.state.forms[i].workdb === true)
                    textOfInterests += "Работа с базами данных; ";
                if (this.state.forms[i].clientssupport === true)
                    textOfInterests += "Поддержка клиентов; ";
                if (this.state.forms[i].marketing === true)
                    textOfInterests += "Маркетинг в области IT; ";
                if (this.state.forms[i].compsecurity === true)
                    textOfInterests += "Компьютерная безопасность; ";
                if (this.state.forms[i].other === true)
                    textOfInterests += "Другое; "
                if (this.state.forms[i].open_house === true)
                    textOpenHouse = "Да";

                array.push({
                    id: this.state.forms[i].id_client,
                    first_name: this.state.forms[i].first_name,
                    last_name: this.state.forms[i].last_name,
                    email: this.state.forms[i].email,
                    birth_date: this.state.forms[i].birth_date,
                    phone: this.state.forms[i].phone,
                    interests: textOfInterests,
                    comment: this.state.forms[i].comment,
                    about_knowledge: this.state.forms[i].about_knowledge,
                    open_house: textOpenHouse,
                    university: this.state.forms[i].university,
                    faculty: this.state.forms[i].faculty,
                    department: this.state.forms[i].department,
                    year_admission: this.state.forms[i].year_admission,
                    english_level: this.state.forms[i].english_level,
                    experience: this.state.forms[i].experience,
                    how_know: this.state.forms[i].how_know
                });
            }
        }

        this.setState({
            data: array,
            isContentShown: true
        });
    }

    render() {
        const {id} = this.state;
        return (
            <div>
                <NavbarComp/>
                <div className="infoForm">
                    <div className="getInfo">
                        <button onClick={this.getForms} class="btn btn-secondary btn-lg">Получить информацию</button>
                        <br/>
                        {this.state.isContentShown &&
                        <text className="selectId">Выбрать заявку по</text>
                        }
                        {this.state.isContentShown &&
                        <select name="id" className="form-control dark" value={id} onChange={this.handleChange}
                                onClick={this.addDataToTheTable}>
                            {this.state.listId.map((id) => <option key={id.value}
                                                                   value={id.value}>{id.display}</option>)}
                        </select>
                        }
                    </div>
                    {this.state.isContentShown &&
                    <BootstrapTable data={this.state.data} headerAlign='left'>
                        <TableHeaderColumn isKey dataField='id'>
                            ID
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='first_name'>
                            Имя
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='last_name'>
                            Фамилия
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='email'>
                            Email
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='birth_date'>
                            Дата Рождения
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='phone'>
                            Мобильный телефон
                        </TableHeaderColumn>
                    </BootstrapTable>
                    }
                    <br/>
                    <br/>
                    {this.state.isContentShown &&
                    <BootstrapTable data={this.state.data}>
                        <TableHeaderColumn isKey dataField='interests'>
                            Интересы
                        </TableHeaderColumn>
                    </BootstrapTable>
                    }
                    <br/>
                    <br/>
                    {this.state.isContentShown &&
                    <BootstrapTable data={this.state.data}>
                        <TableHeaderColumn isKey dataField='comment'>
                            Комментарии
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='about_knowledge'>
                            Знания
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='open_house'>
                            Будет ли на дне открытых дверей
                        </TableHeaderColumn>
                    </BootstrapTable>
                    }
                    <br/>
                    <br/>
                    {this.state.isContentShown &&
                    <BootstrapTable data={this.state.data}>
                        <TableHeaderColumn isKey dataField='university'>
                            Университет
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='faculty'>
                            Факультет
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='department'>
                            Кафедра
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='year_admission'>
                            Год поступления
                        </TableHeaderColumn>
                    </BootstrapTable>
                    }
                    <br/>
                    <br/>
                    {this.state.isContentShown &&
                    <BootstrapTable data={this.state.data}>
                        <TableHeaderColumn isKey dataField='english_level'>
                            Уровень английского
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='experience'>
                            Опыт
                        </TableHeaderColumn>
                        <TableHeaderColumn dataField='how_know'>
                            Откуда узнали о летней школе
                        </TableHeaderColumn>
                    </BootstrapTable>
                    }
                </div>
            </div>
        );
    }
}

export default Info;