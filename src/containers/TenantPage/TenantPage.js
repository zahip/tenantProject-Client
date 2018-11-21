import React, {Component} from 'react';
import TenantList from '../TenantList/TenantList';
import { connect } from 'react-redux';
import { fetchTenants } from '../../store/actions/tenants';
import { Container, Title, AddNewTenant, TextLink } from './style';
import FilterComp from '../../components/FilterComp/FilterComp';
// import addImg from '../../images/add.svg';

class TenantPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            filter: "All tenants",
            searchByName: ""
        }
    }

    componentDidMount() {
        this.props.fetchTenants(this.props.currentUser.user.id);
    }

    handleFilter = (filterText) => {
        let filter;
        if(filterText === "All tenants") {
            filter = filterText
        } else if(filterText === "Have debts") {
            filter = filterText
        } else {
            filter = filterText
        }
        this.setState({
            filter
        })
    }

    handleSearchByName = (e) => {
        this.setState({searchByName: e.target.value})
    }

    render() {
        const {currentUser, tenants} = this.props;
        const filter_list_by_name = tenants.filter(tenant => {
            return tenant.name.toLowerCase().includes(this.state.searchByName.toLowerCase())
        })
        return (
            <Container>
                <Title>{currentUser.user.username}'s tenant</Title>
                <AddNewTenant>
                    <TextLink to={{pathname:`users/${currentUser.user.id}/messages/new`, data: {title:"Add new", buttonText: "Add new tenant"}}}>
                        Add New +
                    </TextLink>
                </AddNewTenant>
                <FilterComp handleFilter={this.handleFilter}/>
                <input onChange={this.handleSearchByName} placeholder="search by name"/>
                <TenantList
                tenants={filter_list_by_name}
                filterState={this.state.filter} 
                />
            </Container>
        );
    }
};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        tenants: state.tenants

    }
}

export default connect(mapStateToProps, { fetchTenants })(TenantPage) ;