import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            loggedin: false,
            token: ''
        }

        this.handleLoginData = this.handleLoginData.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleLoginData(prop) {
        return event => {
            this.setState({
                [prop]: event.target.value
            });
        };
    }

    handleSubmit(e) {
        e.preventDefault()

        let { username, password } = this.state

        e.target.innerHTML = "Loading..."

        fetch("https://questioner--api.herokuapp.com/api/v2/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

            });

    }

    render() {
        return (
            <div className="">
                <div className="row mt-5">
                    <div className="col-5 offset-3">
                        <form action="" className="form" onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    placeholder="Username"
                                    value={this.state.username}
                                    onChange={this.handleLoginData("username")}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleLoginData("password")}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="submit"
                                    id="login"
                                    className="form-control btn btn-info"
                                    value="Login"
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;