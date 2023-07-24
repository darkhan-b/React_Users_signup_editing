import React from "react"
import User from "./User"

class Users extends React.Component {
    // users = [
    //     {
    //         id: 1,
    //         firstname: 'Bob',
    //         lastname: 'Marley',
    //         bio: 'Lorem ipsum dolor sit amet consecteur, adipisicing elit',
    //         age: 40,
    //         isHappy: true
    //     },
    //     {
    //         id: 2,
    //         firstname: 'John',
    //         lastname: 'Doe',
    //         bio: 'Lorem ipsum dolor sit amet consecteur, adipisicing elit',
    //         age: 22,
    //         isHappy: false
    //     }
    // ]
    
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         users: [
    //                 {
    //                     id: 1,
    //                     firstname: 'Bob',
    //                     lastname: 'Marley',
    //                     bio: 'Lorem ipsum dolor sit amet consecteur, adipisicing elit',
    //                     age: 40,
    //                     isHappy: true
    //                 },
    //                 {
    //                     id: 2,
    //                     firstname: 'John',
    //                     lastname: 'Doe',
    //                     bio: 'Lorem ipsum dolor sit amet consecteur, adipisicing elit',
    //                     age: 22,
    //                     isHappy: false
    //                 }
    //             ]
    //     }
    // }
    render() {
        if(this.props.users.length > 0) // если лист юзеров больше или равна 1 
            return(
            <div>
                {this.props.users.map((el)=>(
                    <User onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={el.id} user={el}/> // functions через User components 
                ))}
            </div>
            )
        else // Условие в случае 0 юзеров
        return (<div className="user">
            <h3>Пользователей нет</h3>
        </div>)
    }

}

export default Users