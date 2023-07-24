import React from "react"
import Header from "./components/Header"
import Users from "./components/Users"
import AddUser from "./components/AddUser"
import axios from "axios"

const baseUrl = "https://reqres.in/api/users?page=1" // link api

class App extends React.Component {
    constructor(props) {
        super(props)

        axios.get(baseUrl).then((res) => {
            this.setState({users:res.data.data}); // connection to api
        })

        this.state = {  
            /* Состояние через свойства юзера */
            users: [
                ]
        }
        this.addUser = this.addUser.bind(this)
        this.deleteUser = this.deleteUser.bind(this)
        this.editUser = this.editUser.bind(this)

    }
    render() {
    return (<div className="name">
       <Header title="Список пользователей"/> 
        <main>
            <Users users={this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
        </main>
        <aside>
            <AddUser onAdd={this.addUser} />
        </aside>
</div>)
    }

    deleteUser(id) {
        this.setState({
            users: this.state.users.filter((el) => el.id !== id)
        })
    }

    editUser(user) {
        let allUsers = this.state.users // full user's array 
        allUsers[user.id - 1] = user // getting user array from 0 

        this.setState({
            users: []
        }, () => {
            this.setState({users: [...allUsers]}) 
        })
    }
    addUser(user) {
        const id = this.state.users.length + 1 // New user with new id
        this.setState({ users: [...this.state.users, {id, ...user}]}) // new array +1 user
    }

}

export default App