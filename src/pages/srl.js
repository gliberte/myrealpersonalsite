import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import srl_main from '../assets/images/srl_main.png'
import srl_02 from '../assets/images/srl_02.jpg'

const BloqueImagen = styled.div`
    display:grid;
    grid-template-columns:1fr 2fr;
    grid-column-gap:10px;
    img{
        width:500px;
        height:400px;
    }
`

const Generic = (props) => (
    <div>
        <Helmet>
            <title>SRL</title>
            <meta name="description" content="Generic Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Senaven Route Logic</h1>
                    </header>
                    <span className="image main"><img src={srl_main} alt="" /></span>
                    <p>Todos los dias la empresa de distribución Senaven atiende aproximadamente 1,000 entregas de mercancias a nivel nacional, a traves de una flota vehicular compuesta de 
                    mas de 15 camiones a nivel nacional. Actualmente la empresa se vale de un sistema cuasi obsoleto para preparar sus rutas de despacho para cada vehículo. Hace algunos años, a través de 
                    la ya inexistente empresa Geoinfo S.A., Senaven adquirió licencias de softwares y datos geográficos para optimizar varios aspectos de su operatividad. En particular, la empresa hizo un 
                    esfuerzo de localizar geográficamente todos sus clientes a nivel nacional.</p>
                    <p>Con esta información la empresa fue capaz de llevar a cabo análisis de rutas para preventas, creando un mapa de geocercas que permitiera una cobertura eficaz de su equipo de vendedores en calle.</p>
                    <p>Con la preventa por bloques, la asignación de rutas de despacho diaria se hace vuelta más sencilla; y con la adquisición de un software de escritorio para optimización de rutas denominado ArcLogistic, 
                    cualquier persona podia encargarse de esta operatividad sin el conocimiento previo de la geografia.</p>

                    <p>Sin embargo, con el paso del tiempo, y la falta de proveedores de datos geográficos actualizados, se ha hecho necesario mejorar este aspecto de la operatividad comercial de la empresa. </p>
                    <BloqueImagen>
                    <img src={srl_02} alt=""/>
                    <p>Para esta situación desarrollo un sistema denominado Senaven Route Logic. Un trabajo de integración de procesos internos y externos, usando solamente Javascript tanto del lado del cliente como del servidor.</p>
                    </BloqueImagen>
                    
                </div>
            </section>
        </div>

    </div>
)

export default Generic