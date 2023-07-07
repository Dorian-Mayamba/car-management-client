import { useEffect } from "react";
import { Link, NavLink,useNavigate } from "react-router-dom";
import '../styles/navbar.css';
import { authContextType, isAuthContextType, useAuth, useIsAuth} from "../contexts/contexts";
export default function Navbar() {
    const { isAuthenticated, setAuthenticated } = useIsAuth() as isAuthContextType;
    const { currentUser, setCurrentUser } = useAuth() as authContextType;
    const navigate = useNavigate();
    const renderContent = () => {
        if (isAuthenticated) {
            return (
                <>
                    <li>
                        <NavLink to={`profile/${currentUser?.id}`}>Profile</NavLink>
                    </li>
                    <li>
                        <Link onMouseDown={ToggleDropdown} className='admin-link' to='#'>{currentUser?.name}<i className="" /></Link>
                        <ul style={{ position: 'absolute' }} className="dropdown-menu">
                            <li>
                                <Link to='#' onClick={HandleLogout}>Logout</Link>
                            </li>
                            {currentUser?.isAdmin() ?
                                <>
                                    <li>
                                        <Link to='Car-create'>Add a car</Link>
                                    </li>
                                    <li>
                                        <Link to='#'>Add a Make</Link>
                                    </li>
                                </>
                                : ''}
                        </ul>
                    </li>
                </>
            )
        }
        return (
            <>
                <li>
                    <NavLink to='/Register'>Register</NavLink>
                </li>
                <li>
                    <NavLink to='/Login'>Login</NavLink>
                </li>
            </>
        )
    }

    const HandleLogout = () => {
        fetch('api/auth/logout', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (!response.ok) throw new Error('an error has occured');
                return response.json()
                    .then(data => {
                        if (data?.message === 'logout success') {
                            setAuthenticated(false);
                            setCurrentUser(null);
                            navigate('/', {replace:true});
                        }
                    })
            })
            .catch(err=>{
                console.log(err);
            })
    }

    useEffect(() => {
        fetch('api/auth/verify', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => {
                if (!response.ok) throw new Error('an error has occured');
                return response.json()
                    .then(data => {
                        setAuthenticated(true);
                        setCurrentUser({
                            id: data?.sub,
                            isAdmin: () => data?.roleType === 'admin',
                            name: data?.name
                        });
                    })
            })
            .catch(err => {
                console.log(err);
                setAuthenticated(false);
                setCurrentUser(null);
            })
    }, [])

    const ToggleDropdown = () => {
        var dropdown: Element | null = document.querySelector('.dropdown-menu');
        dropdown?.classList.toggle('dropdown-active');
    }

    return (
        <header>
            <nav className="navbar-container">
                <ul className="nav">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/car">All cars</NavLink>
                    </li>
                    {renderContent()}
                </ul>
            </nav>
        </header>
    )
}