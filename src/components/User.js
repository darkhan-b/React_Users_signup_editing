import React from "react"
import AddUser from "./AddUser"
import {IoCloseCircleSharp, IoHammerSharp} from "react-icons/io5"

class User extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            editForm: false 
            /* Изначальное состояние */
        }
    }
    user = this.props.user
    render() {
        return(
            <div className="user"> 
            {/* Лист юзеров */}
                <IoCloseCircleSharp onClick={() => this.props.onDelete(this.user.id)} className="delete-icon"/>
                <IoHammerSharp onClick={() => {
                    this.setState({
                        editForm: !this.state.editForm
                    })
                }} className="edit-icon"/>
                <h3>{this.user.first_name} {this.user.last_name}</h3>
                <img src={this.user.avatar} alt="Проблема с изображением" /> 
                <p>{this.user.email}</p>
                <p>{this.user.age ? this.user.age : "No age"}</p>
                <b>{this.user.isHappy ? "Счастлив :)" : "Не особо :("}</b>
                {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />} 
                {/* Импорт компонента AddUser с информацией о юзере и для метод редактора */}
        </div>
        )
    }

}

export default User