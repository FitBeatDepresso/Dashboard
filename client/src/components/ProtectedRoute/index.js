import React from 'react';
import { Route } from 'react-router-dom';
import { authenticationStatus } from '../../slices/accessSlice';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component,...rest }) => {
    const isAuthenticated = useSelector(authenticationStatus);

    return (
        <Route path={rest.path} {...rest} render={
            props => {
                if(isAuthenticated) {
                    return <Component {...rest} {...props} />
                } else {
                    return <Redirect to='/login'/>
                }
            }
        } />
    )
}

export default ProtectedRoute;
