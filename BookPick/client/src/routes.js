import Admin from "./pages/Admin";
import {ADMIN_ROUTES, BOOK_ROUTES, LOGIN_ROUTES, REGISTRATION_ROUTES, SHOP_ROUTES} from "./utilis/consts";
import Auth from "./pages/Auth";
import Shop from "./pages/Shop";
import BookPage from "./pages/BookPage";

export const authRoutes = [
    {
        path:ADMIN_ROUTES,
        Component: Admin

    },


]

export const publicRoutes = [
    {
        path:LOGIN_ROUTES,
        Component: Auth

    },
    {
        path:REGISTRATION_ROUTES,
        Component: Auth

    },
    {
        path:SHOP_ROUTES,
        Component: Shop

    },
    {
        path:BOOK_ROUTES + '/:id',
        Component: BookPage

    },

]

