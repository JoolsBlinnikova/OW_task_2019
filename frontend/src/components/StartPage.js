import React, {Component} from 'react';
import './../css/StartPage.css'

class StartPage extends Component {

    render() {
        function viewApplications() {
            window.location = "/admin"
        }
        function applyToOpenWay() {
            window.location = "/appliers"
        }
        return (
            <div className="Page">
                <button type="button" onClick={viewApplications} className="btn btn-primary">Просмотреть заявки</button>
                <button type="button" onClick={applyToOpenWay} className="btn btn-primary">Заполнить заявку</button>
            </div>
        );
    }
}

export default StartPage;