import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from "react-icons/fi";
import { TileLayer, MapContainer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarkerImg from '../../images/map-marker.svg';

import './v_OrphanagesMap.css';

function i_OrphanagesMap() {
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />

                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>RJ</strong>
                    <span>Rio de Janeiro</span>
                </footer>
            </aside>

            <MapContainer
                center={[-22.9107135, -43.1988163]} 
                zoom={14} 
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
            
            <Link to=""  className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>

        </div>
    )
}

export default i_OrphanagesMap;
