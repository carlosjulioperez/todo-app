import { type } from "@testing-library/user-event/dist/type";
import React, {Component} from "react";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class TodoApp extends Component{
    render(){
        return(
            <div className="TodoApp">
                <Router>
                    <Routes>
                        {/* You do NOT need to use exact anymore! */}
                        <Route exact path="/" element={<LoginComponent/> } />
                        
                        <Route path="/login" element={<LoginComponent/>} />
                        <Route path="/welcome" element={<WelcomeComponent/>} />
                    </Routes>
                </Router>
                {/* <LoginComponent/>
                <WelcomeComponent/> */}
            </div>
        )
    }
}

class WelcomeComponent extends Component {
    render() {
        return <div>Welcome App</div>
    }
}

class LoginComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            username: 'carper',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
        // this.handlerUsernameChange = this.handlerUsernameChange.bind(this)
        // this.handlerPasswordChange = this.handlerPasswordChange.bind(this)
    }

    handleChange(event){
        console.log(event.target.name)
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // handlerUsernameChange(event){
    //     console.log(event.target.value)
    //     this.setState({
    //         username: event.target.value
    //     })
    // }

    // handlerPasswordChange(event){
    //     console.log(event.target.value)
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    loginClicked() {

        if (this.state.username==="carper" && this.state.password==="123"){
            console.log("Successful");
            //this.props.history.push('/welcome')
            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed: false})
        } else {
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})

        }
        //console.log(this.state)
    }

    render(){
        return (
            <div>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/> */}
                {/* <ShowLoginSucessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                
                {/* En console del navegador
                true && "Test String" => "Test String"
                false && "Test String" => false */}

                {this.state.hasLoginFailed && <div>Invalid credentials</div>}
                {this.state.showSuccessMessage && <div>Login successful</div>}

                User name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

function ShowInvalidCredentials(props){
    if (props.hasLoginFailed){
        return <div>Invalid credentials</div>
    }
    return null
}

function ShowLoginSucessMessage(props){
    if (props.showSuccessMessage){
        return <div>Login successful</div>
    }
    return null
}

export default TodoApp