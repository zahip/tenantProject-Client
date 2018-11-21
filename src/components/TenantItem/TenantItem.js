import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import {Card, Button, Img} from './style';
import deleteImg from '../../images/cancel.svg';
import editImg from '../../images/edit.svg';

const TenantItem = ({ name, phone_number, address, financial_debt, date, username, removeTenant, tenant_id, currentUser, editTenant, }) => {
    return (
        <Card>
            <h1>{name}</h1>
            <div>phone number: {phone_number}</div>
            <div>address: {address}</div>
            <div>financial_debt: {`${financial_debt}`}</div>
            <div>create by {username}</div>
            <span className="date">
                <Moment format="Do MMM YYYY">{date}</Moment>
            </span>
            <Button onClick={removeTenant}><Img src={deleteImg} alt="delete"/></Button>
            <Button><Link to={{pathname:`/users/${tenant_id}/messages/edit`,
                 data: {name, phone_number, address, financial_debt,
                  tenant_id, title:"edit tenant" ,buttonText:"edit tenant", edit:"edit" }}}><Img src={editImg} alt="edit"></Img></Link>
            </Button>
        </Card>
    );
};

export default TenantItem;