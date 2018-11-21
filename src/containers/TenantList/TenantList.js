import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeTenant, editTenant } from '../../store/actions/tenants';
import TenantItem from '../../components/TenantItem/TenantItem';
import { ListContainer, ListBox } from './style';

class TenantList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchByName: ""
        }
    }

    render() {
        const { tenants, removeTenant, currentUser, filterState } = this.props;
        let debtsListFilter = tenants.filter(tenant => tenant.financial_debt === true);
        let notdebtsListFilter = tenants.filter(tenant => tenant.financial_debt === false);

        let debtsList = debtsListFilter.map(tenant => (
            <TenantItem
                key={tenant._id} 
                name={tenant.name}
                phone_number={tenant.phone_number}
                address={tenant.address}
                financial_debt={tenant.financial_debt}
                date={tenant.createAt} 
                username={currentUser.user.username}
                removeTenant={removeTenant.bind(this, currentUser.user.id, tenant._id)}
                currentUser={currentUser}
                />
        ))

        let notdebtsList = notdebtsListFilter.map(tenant => (
            <TenantItem
                key={tenant._id} 
                name={tenant.name}
                phone_number={tenant.phone_number}
                address={tenant.address}
                financial_debt={tenant.financial_debt}
                date={tenant.createAt} 
                username={currentUser.user.username}
                removeTenant={removeTenant.bind(this, currentUser.user.id, tenant._id)}
                currentUser={currentUser}
                />
        ))

        let tenantsList = tenants.map(tenant => (
            <TenantItem
                key={tenant._id}
                tenant_id={tenant._id} 
                name={tenant.name}
                phone_number={tenant.phone_number}
                address={tenant.address}
                financial_debt={tenant.financial_debt}
                date={tenant.createAt} 
                username={currentUser.user.username}
                removeTenant={removeTenant.bind(this, currentUser.user.id, tenant._id)}
                currentUser={currentUser}
                />
        ))

        return (
            <ListContainer>
                <ListBox>
                    {filterState === "All tenants" && tenantsList}
                    {filterState === "Have debts" && debtsList}
                    {filterState === "Not have any debt" && notdebtsList}
                </ListBox>
            </ListContainer>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, { removeTenant, editTenant })(TenantList);