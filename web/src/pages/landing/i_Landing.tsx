import React from 'react';
import { FiArrowRight } from 'react-icons/fi';

import '../global.css';
import '../landing/v_Landing.css';

import logoImg from '../../images/logo.svg';

function i_Landing() {
    return (
        <div id="page-landing">
            <div className="content-wrapper">
                <img src={logoImg} alt="Happy" />

                <main>
                    <h1>Leve felicidade para o mundo</h1>
                    <p>Visite orfanatos e mude o dia de muitas crinças.</p>
                </main>

                <div className="location">
                    <strong>Rio de Janeiro</strong>
                    <span>Capital</span>
                </div>

                <a href="/app" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
                </a>
            </div>
        </div>
    );
}

export default i_Landing;