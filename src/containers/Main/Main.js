import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../../components/Homepage/Homepage';
import Authform from '../../components/Authform/Authform';
import { authUser } from '../../store/actions/auth';
import { removeError } from '../../store/actions/errors';
import TenantForm from '../../containers/TenantForm/TenantForm';
import withAuth from '../../hocs/withAuth';


// here are all routing of Main component
const Main = ({ authUser, errors, removeError, currentUser }) => {
    return (
        <div className="container">
            <Switch>
                <Route exact path="/" render={props => <Homepage currentUser={currentUser} {...props}/>}></Route>
                <Route exact path="/login" render={props => {
                    return(
                        <Authform
                        removeError={removeError}
                         errors={errors}
                         onAuth={authUser}
                         buttonText="Log in" 
                         title="Welcome Back" 
                         {...props}/>
                    )
                }}>
                </Route>
                <Route exact path="/signup" render={props => {
                    return(
                        <Authform 
                          removeError={removeError}
                          errors={errors} 
                          onAuth={authUser} 
                          buttonText="Sign up" 
                          title="Sign up" 
                          signUp
                          {...props}/>
                    )
                }}>
                </Route>
                <Route path="/users/:id/messages/new" component={withAuth(TenantForm)}></Route>
                <Route path="/users/:id/messages/edit" component={withAuth(TenantForm)}></Route>
            </Switch>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        errors: state.errors
    }
}

export default withRouter(connect(mapStateToProps, {authUser, removeError})(Main));