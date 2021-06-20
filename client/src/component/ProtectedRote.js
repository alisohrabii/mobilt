import React,{useContext} from 'react';
import {Route,Redirect} from 'react-router-dom';
import AuthContext from '../context/AuthContext';
const ProtectedRoute = ({component:RouteComponent , ...rest}) => {
    const {curentuser}=useContext(AuthContext);
    return (
       <Route 
       {...rest}
       render={routeProps=>
    !!curentuser ? (
<RouteComponent  {...routeProps} />

    ):(

<Redirect to={/Login} />

    )
    }
       
       
       
       />
    );
};

export default  ProtectedRoute;