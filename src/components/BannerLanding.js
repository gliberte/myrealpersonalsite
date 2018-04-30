import React from 'react'

const BannerLanding = (props) => (
    <section id="banner" className="style2">
        <div className="inner">
            <header className="major">
                <h1>{props.titulo}</h1>
            </header>
            <div className="content">
                <p>{props.subtitulo}</p>
            </div>
        </div>
    </section>
)

export default BannerLanding
