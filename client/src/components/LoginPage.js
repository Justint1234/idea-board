import React, { Component } from 'react';
import axios from 'axios'

class LoginPage extends Component {
state = {
    users: []

}


getAllUsers = () => {
    axios.get('/api/users').then((res) => {
       this.setState({users: res.data})

    })
}

componentDidMount(){
    this.getAllUsers()
}

    render() {
        return (
            <div>
                <h1>Log-in To See Your Ideas</h1>
                <h3>All Users</h3>
                {this.state.users.map((user) => (
                    <div key={user._id}>
                    {user.username}
                    </div>

                ))}
            </div>
        );
    }
}

export default LoginPage;