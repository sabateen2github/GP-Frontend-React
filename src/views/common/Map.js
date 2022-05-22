import React from 'react';
import {createCustomEqual} from "fast-equals";
import {isLatLngLiteral} from "@googlemaps/typescript-guards";

const deepCompareEqualsForMaps = createCustomEqual((deepEqual) => (a, b) => {
    if (isLatLngLiteral(a) || a instanceof window.google.maps.LatLng || isLatLngLiteral(b) || b instanceof window.google.maps.LatLng) {
        return new window.google.maps.LatLng(a).equals(new window.google.maps.LatLng(b));
    }

    // TODO extend to other types

    // use fast-equals for other objects
    return deepEqual(a, b);
});

function useDeepCompareMemoize(value) {
    const ref = React.useRef();

    if (!deepCompareEqualsForMaps(value, ref.current)) {
        ref.current = value;
    }

    return ref.current;
}

function useDeepCompareEffectForMaps(callback, dependencies) {
    React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}


const Map = ({
                 onCenterChange, onClick, onIdle, children, style, ...options
             }) => {
    // [START maps_react_map_component_add_map_hooks]
    const ref = React.useRef(null);
    const [map, setMap] = React.useState();

    React.useEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {}));
        }
    }, [ref, map]);
    // [END maps_react_map_component_add_map_hooks]

    // [START maps_react_map_component_options_hook]
    // because React does not do deep comparisons, a custom hook is used
    // see discussion in https://github.com/googlemaps/js-samples/issues/946
    useDeepCompareEffectForMaps(() => {
        if (map) {
            map.setOptions(options);
        }
    }, [map, options]);
    // [END maps_react_map_component_options_hook]

    // [START maps_react_map_component_event_hooks]
    React.useEffect(() => {
        if (map) {
            ["click", "idle", "center_changed"].forEach((eventName) => window.google.maps.event.clearListeners(map, eventName));

            if (onClick) {
                map.addListener("click", onClick);
            }

            if (onIdle) {
                map.addListener("idle", () => onIdle(map));
            }

            if (onCenterChange) {
                map.addListener("center_changed", ()=> onCenterChange({lat: map.center.lat(), lng: map.center.lng()}));
            }

        }
    }, [map, onClick, onIdle, onCenterChange]);
    // [END maps_react_map_component_event_hooks]

    // [START maps_react_map_component_return]
    return (<>
        <div ref={ref} style={style}/>
        {React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                // set the map prop on the child component
                return React.cloneElement(child, {map});
            }
        })}
    </>);
    // [END maps_react_map_component_return]
};


const Marker = (options) => {
    const [marker, setMarker] = React.useState();

    React.useEffect(() => {
        if (!marker) {
            setMarker(new window.google.maps.Marker());
        }

        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);

    React.useEffect(() => {
        if (marker) {
            marker.setOptions(options);
        }
    }, [marker, options]);

    return null;
};

export {Map, Marker};