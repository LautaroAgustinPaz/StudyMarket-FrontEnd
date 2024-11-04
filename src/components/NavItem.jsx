import { NavLink } from 'react-router-dom'


const NavItem = ({item}) => {


    const coloresLinks = (props) => {
        console.log(props)

        if (props.isActive) { 
            return { color: 'crimson', borderBottom: '1px solid crimson', paddingBottom: '2px' } 
        } else {
            return { color: 'blue' } 
        }
    } 


    return (
        <li className="nav-item">
            <NavLink
                className="nav-link" 
                to={item.ruta} 
                style={coloresLinks}
            >
                {item.titulo}
            </NavLink>
        </li>
    )
}

export default NavItem