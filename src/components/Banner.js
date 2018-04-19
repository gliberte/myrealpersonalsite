import React from 'react'
import me from '../assets/images/me.jpg'
import styled from 'styled-components'

const MiFoto = styled.img`
    border-radius:100px;
    border:4px solid #C0CA33;
`

const Banner = (props) => (
    <section id="banner" className="major">
        <div className="inner">
            <header className="major">
                <MiFoto src={me} width="140" height="140"  alt=""/>
                <h1>Hola, me llamo Luis A. Solano :)</h1>
            </header>
            <div className="content">
                <p>Desarrollador Full Stack con Javascript (Unicamente!) </p>
                <ul className="actions">
                    <li><a href="#one" className="button next scrolly">Bienvenido</a></li>
                </ul>
            </div>
        </div>
    </section>
)

export default Banner
