import React, { useEffect, useState } from "react";
import GoogleMapReact from 'google-map-react';
import { useUser } from "../../providers/users";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const GoogleMapContainer = () => {
    const { polygonList } = useUser();

    const defaultProps = {
        zoom: 15,
        center: { lat: polygonList[0]?.centroid[0], lng: polygonList[0]?.centroid[1] },
        mapTypeId: "terrain"
    };

    const handleApiLoaded = (map, maps) => {
        let coords = [];

        polygonList.map((e) => {
            // Construir coords
            const output = []
            e.Points.map((item) => {
                output.push({
                    lat: item.latitude,
                    lng: item.longitude
                })
            })
            coords.push(output)
        })

        const bermudaTriangle = new maps.Polygon({
            paths: coords,
            strokeColor: "#FF0000",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "#FF0000",
            editable: true,
            geodesic: true,
            fillOpacity: 0.35
        });
         
        bermudaTriangle.setMap(map);
    }


    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            {polygonList?.length > 0 &&

                <GoogleMapReact
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    yesIWantToUseGoogleMapApiInternals //this is important!
                    onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                    <AnyReactComponent
                        lat={-29.114484840592503}
                        lng={-51.00242316665107}
                        text={'Poligono Teste'}
                    />
                </GoogleMapReact>

            }
        </div>
    );
}

export default GoogleMapContainer;