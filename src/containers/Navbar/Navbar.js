import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../store/actions/auth';
import { NavBarBox, LogoContainer, LogoImg, AuthBox, UnorderList, Tab, TextLink} from './style';
import Logo from '../../images/tenants-img.png';

class Navbar extends Component {
    logout = e => {
        e.preventDefault();
        this.props.logout();
    }
    render() {
        return (
            <NavBarBox>
                <LogoContainer>
                    <Link to='/' className="logo">
                        <LogoImg src={Logo} alt="logo"/>
                    </Link>
                </LogoContainer>
                <AuthBox>
                {this.props.currentUser.isAuthenticated ? (
                    <TextLink to="/" onClick={this.logout}>Log out</TextLink>
                ) : (<UnorderList>
                    <Tab>
                        <TextLink to='/signup'>Sign up</TextLink>
                    </Tab>
                    <Tab className="login">
                        <TextLink to='/login'>Log in</TextLink>
                    </Tab>
                </UnorderList>)}
                </AuthBox>
            </NavBarBox>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    }
}

export default connect(mapStateToProps, {logout})(Navbar)