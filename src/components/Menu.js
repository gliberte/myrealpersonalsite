import React from 'react'
import Link from 'gatsby-link'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/portafolio">Portafolio</Link></li>
                {/*<li><Link onClick={props.onToggleMenu} to="/elements">Elements</Link></li>*/}
                <li><Link onClick={props.onToggleMenu} to="/blog">Mi Blog</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="#" className="button special fit">En Desarrollo</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Cerrar</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: React.PropTypes.func
}

export default Menu
