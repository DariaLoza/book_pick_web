import React, {useContext} from 'react';
import{Routes,Route, Navigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {SHOP_ROUTES} from "../utilis/consts";
import {Context} from "../index";


const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                 //<Route key={path} path={path} component={Component} exact/>
                 <Route exact path={path} element={<Component/>}/>
            )}
            {publicRoutes.map(({path, Component}) =>
                //<Route key={path} path={path} component={Component} exact/>
                <Route exact path={path} element={<Component/>}/>
            )}
        </Routes>
    );
};

export default AppRouter;