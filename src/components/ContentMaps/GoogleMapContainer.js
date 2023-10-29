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
        let coordsPolygon = [];
        let coordsCircle = [];
        let coordsDot = [];

        const arr = polygonList.map((e) => {
            if(e.Points.length > 0){
                const arrOutput = [];
                e.Points.map((item) => {
                    arrOutput.push({
                        lat: item.latitude,
                        lng: item.longitude
                    })
                })
                coordsPolygon.push(arrOutput)                
            }
        })

        coordsCircle = coordsPolygon.filter((elementFilter) => elementFilter.length === 2)
        coordsPolygon = coordsPolygon.filter((elementFilter) => elementFilter.length !== 2 && elementFilter.length !== 1)

        console.log(coordsPolygon)
        console.log(coordsCircle)

        const createPolygon = new maps.Polygon({
            paths: coordsPolygon,
            strokeColor: "blue",
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: "red",
            editable: true,
            geodesic: true,
            fillOpacity: 0
        });

        const createCircle = new maps.Circle({
            paths: coordsCircle,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: 'red',
            fillOpacity: 0.3,
            center: {lat: -29.161639438871404, lng: -51.14370916428387},   
            map,
            radius: 100,
        });
         
        createPolygon.setMap(map);
        createCircle.setMap(map);
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