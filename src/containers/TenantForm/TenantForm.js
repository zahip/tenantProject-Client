import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewTenant, editTenant } from '../../store/actions/tenants';
import {FormContainer, Form, Error, InputBox, Label, Input, Button } from './style';

class TenantForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            phone_number: "",
            address: "",
            financial_debt: false
        }
    }

    componentDidMount() {
        const { edit } = this.props.location.data;

        if(edit) {
            let { name, phone_number, address, financial_debt } = this.props.location.data;
            this.setState({
                 name,
                 phone_number,
                 address,
                 financial_debt
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleTenant = e => {
        const { edit } = this.props.location.data;
        e.preventDefault();
        if(edit) {
            this.props.editTenant(this.props.currentUser.user.id, this.props.location.data.tenant_id,  this.state)
        } else {
            this.props.postNewTenant(this.state);
        }
        this.setState({
            [e.target.name]: ""
        })
        this.props.history.push('/');
    }
    render() {
        const {name, phone_number, address, financial_debt } = this.state;
        const { title, buttonText } = this.props.location.data;
        return (
            <FormContainer>
                <Form onSubmit={this.handleTenant}>
                <h1>{title}</h1>
                {this.props.errors.message && (
                    <Error>
                        {this.props.errors.message}
                    </Error>
                )}
                <InputBox>
                    <Label>Name:</Label>
                    <Input 
                        type="text" 
                        name="name"
                        className="input"
                        value={name}
                        onChange={this.handleChange}/>
                </InputBox>
                <InputBox>
                    <Label>Phone Number:</Label>
                    <Input 
                        type="text" 
                        name="phone_number"
                        className="input"
                        value={phone_number}
                        onChange={this.handleChange}/>
                </InputBox>
                <InputBox>
                    <Label>Address:</Label>
                    <Input 
                        type="text" 
                        name="address"
                        className="input"
                        value={address}
                        onChange={this.handleChange}/>
                </InputBox>
                <InputBox>
                    <Label>Financial Debt:</Label>
                    <Input 
                        type="text" 
                        name="financial_debt"
                        className="input"
                        value={financial_debt}
                        onChange={this.handleChange}/>
                </InputBox>
                    <Button type="submit">{buttonText}</Button>
                </Form>
            </FormContainer>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        errors: state.errors,
        currentUser : state.currentUser
    }
}

export default connect(mapStateToProps, {postNewTenant, editTenant})(TenantForm);
