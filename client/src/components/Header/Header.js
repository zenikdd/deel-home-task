import './Header.scss'
import {NavLink} from "react-router-dom";

export const Header = () =>  {
    return (
        <header>
                <NavLink to="/contracts">
                    CONTRACTS
                </NavLink>
                <NavLink to="/jobs/unpaid">
                    UNPAID JOBS
                </NavLink>
        </header>
    );
}

