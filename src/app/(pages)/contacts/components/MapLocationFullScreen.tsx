"use client"
import 'mapbox-gl/dist/mapbox-gl.css';
import Map, { Marker } from 'react-map-gl';

const MapLocationFullScreen = () => {
    return (
        <div style={{ width: '100%', height: '120vh' }} className='w-full min-h-full '>
            <Map

                initialViewState={{
                    latitude: -16.349502800226965,
                    longitude: -71.56162923901687,
                    zoom: 16,
                }}

                mapStyle="mapbox://styles/mapbox/streets-v11"
                mapboxAccessToken="pk.eyJ1IjoiZ29uemFsb2F4ZWxoIiwiYSI6ImNrdjFyYnltYjA5Z3IycGwweWtwcnZzOWQifQ.3LHakWc4sqPqz84a8YaQ4w"
                style={{ width: '100%', height: '100%' }}
            >
                <Marker color='red' latitude={-16.349502800226965} longitude={-71.56162923901687} />
            </Map>

        </div>
    );
};

export default MapLocationFullScreen;
