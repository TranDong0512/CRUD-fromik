import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
                    <li>
                        <Link to="/crudformik">CRUDFormik</Link>
                    </li>
                    <li>
                        <Link to="/formvalidation">StringSchema</Link>
                    </li>
                    <li>
                        <Link to="/renderform">RenderForm</Link>
                    </li>
                    <li>
                        <Link to="/validateform">ValidateForm</Link>
                    </li>
                    <li>
                        <Link to="/search">SearchParams</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}
export default Layout