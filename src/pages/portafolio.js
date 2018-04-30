import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'

import srl from '../assets/images/srl.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const Landing = (props) => (
    <div>
        <Helmet>
            <title>SRL</title>
            <meta name="description" content="Landing Page" />
        </Helmet>

        <BannerLanding titulo="Portafolio" subtitulo="Algunos ejemplos de proyectos realizados"/>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>Optimización, escencial para un despacho eficiente</h2>
                    </header>
                    <p>Uno de los problemas más complejos a los que se enfrenta los negocios basados en operatividad de despacho, transporte y logística es 
                    la Optimización de las rutas de despacho de sus flotas vehiculares.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <Link to="/generic" className="image">
                        <img src={srl} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>SRL</h3>
                            </header>
                            
                            <p>En este proyecto integro los procesos internos de despacho de los pedidos diarios procesados por la empresa de distribucion Senaven a nivle nacional. </p>
                            <p>Esta plataforma consiste de dos entornos: una plataforma web administrativa alojada en Heroku, y una app movil.</p>
                            <ul className="actions">
                                <li><Link to="/srl" className="button">Saber más</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic09} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Rhoncus magna</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/generic" className="image">
                        <img src={pic10} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Sed nunc ligula</h3>
                            </header>
                            <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis magna sed nunc rhoncus condimentum sem. In efficitur ligula tate urna. Maecenas massa sed magna lacinia magna pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis tempus.</p>
                            <ul className="actions">
                                <li><Link to="/generic" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </div>
)

export default Landing