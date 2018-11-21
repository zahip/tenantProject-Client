import React from 'react';
// import { Link } from 'react-router-dom';
import TenantPage from '../../containers/TenantPage/TenantPage';
import { HomePageBox, Title, SubTitle, Button, ButtonTextLink } from './style';

const Homepage = ({currentUser}) => {
    if(!currentUser.isAuthenticated) {
        return (
            <HomePageBox>
                <Title>Tenants App</Title>
                <SubTitle>Do you want administer your building tenants?</SubTitle>
                <Button>
                    <ButtonTextLink to="/signup">
                        Sign up
                    </ButtonTextLink>
                </Button>
            </HomePageBox>
        );
    }

    return (
    <div>
        <TenantPage/>
    </div>
    ) 
    
};

export default Homepage;