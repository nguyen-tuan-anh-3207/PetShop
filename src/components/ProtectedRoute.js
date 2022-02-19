// import React from 'react';
// import { Navigate, useLocation } from 'react-router-dom';
// import { useAuth } from 'src/hooks/useAuth';

// const ProtectedRoute = ({ component: Component, ...rest }) => {
//   const auth = useAuth();

//   const location = useLocation();

//   const { isAuthenticated } = auth;
//   if (!isAuthenticated) {
//     return <Navigate to="/" state={{ from: location }} replace />;
//   }
//   return <Component {...rest} />;
// };

// export default ProtectedRoute;
