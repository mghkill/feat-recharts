import React from 'react';
import { ConteinerMap } from './styles';
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import Map from './Map';

const ContentMaps = () => {

    const {isLoaded} = useLoadScript({googleMapsApiKey: "" || ""});

    if(!isLoaded) return <div>Loading ...</div>;
    

  return (
    <ConteinerMap>
        <Map GoogleMap={GoogleMap} />
    </ConteinerMap>
  );
};

export default ContentMaps;
