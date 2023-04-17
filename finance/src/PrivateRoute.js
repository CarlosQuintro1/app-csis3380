import { Outlet, Navigate } from 'react-router-dom'


const PrivateRoutes = ({ auth }) => {
    
    
    return(
        auth && auth.token ? <Outlet/> : <Navigate to="/Login"/>
    )
}

export default PrivateRoutes;