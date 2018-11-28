import React, { Component } from 'react';
import { FormContainer, Form, Error, InputBox, Label, Input, Button } from './style';

export default class Authform extends Component {
    constructor(props) {
        super(props);
        this.state ={
            username: "",
            password: ""
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? 'signup' : 'login';
        this.props.onAuth(authType, this.state).then(() => {
            this.props.history.push('/');
        })
        .catch(() => {
            return;
        })
    }

    render() {
        const { username } = this.state;
        const { title, buttonText, errors, history, removeError } = this.props;
// if there is a change in the route - remove the error message
        history.listen(() => {
            removeError();
        })
        return (
            <FormContainer>
                <Form onSubmit={this.handleSubmit}>
                    <h2>{title}</h2>
                    {errors.message && 
                        <Error>
                            {errors.message}
                        </Error>}
                    <InputBox>
                        <Label htmlFor="username">Username:</Label>
                        <Input 
                            className="input"
                            id="username"
                            name="username"
                            onChange={this.handleChange}
                            value={username}
                            type="text"
                            />
                    </InputBox>
                    <InputBox>
                        <Label htmlFor="password">Password:</Label>
                        <Input
                            className="input"
                            id="password"
                            name="password"
                            onChange={this.handleChange}
                            type="password"
                            />
                    </InputBox>
                        <Button className="btn" type="submit">{buttonText}</Button>
                </Form>
            </FormContainer>
        );
    }
}