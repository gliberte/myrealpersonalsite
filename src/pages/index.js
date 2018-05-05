import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'

import srl from '../assets/images/srl.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/pic05.jpg'
import pic06 from '../assets/images/pic06.jpg'

const IframeContainer = styled.div`
    position:relative;
    overflow:hidden;
    padding-top:56.25%;
`
const Iframe = styled.iframe`
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    border:0;
`

class HomeIndex extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title
        const siteDescription = this.props.data.site.siteMetadata.description

        return (
            <div>
                <Helmet>
                    <title>{siteTitle}</title>
                    <meta name="description" content={siteDescription} />
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{ backgroundImage: `url(${srl})` }}>
                            <header className="major">
                                <h3>Potafolio</h3>
                                <p>Algunos ejemplos de proyectos desarrollados</p>
                            </header>
                            <Link to="/portafolio" className="link primary"></Link>
                        </article>
                        <article>
                            <header className="major">
                                <h3>Curso Introducción a React</h3>
                                <p>Obten acceso a mi nuevo curso "Introducción a React"</p>
                                <IframeContainer>
                                    <Iframe src="https://www.youtube.com/embed/oMFRSVX4d4Q?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></Iframe>
                                </IframeContainer>

                                <a href="https://www.udemy.com/introduccion-a-react/?couponCode=PERSONAL_SITE" target="_blank">Adquiérelo en Udemy con un descuento especial. Solo $9.99</a>
                            </header>

                        </article>
                        {/*<article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Magna</h3>
                                <p>Lorem etiam nullam</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Ipsum</h3>
                                <p>Nisl sed aliquam</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic05})`}}>
                            <header className="major">
                                <h3>Consequat</h3>
                                <p>Ipsum dolor sit amet</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic06})`}}>
                            <header className="major">
                                <h3>Etiam</h3>
                                <p>Feugiat amet tempus</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
        </article>*/}
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Estoy amueblando esta casa</h2>
                            </header>
                            <p>Por el momento, no tengo mucha información qué ofrecerte sobre mi, pero pronto tendré varias cosas de las cuales quisiera compartir contigo. </p>
                            <ul className="actions">
                                <li><Link to="/portafolio" className="button next">Visita mi página de proyectos</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </div>
        )
    }
}

export default HomeIndex

export const pageQuery = graphql`
    query PageQuery {
        site {
            siteMetadata {
                title
                description
            }
        }
    }
`