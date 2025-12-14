import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Restaurant, GroceryStore } from '@/types';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { renderToStaticMarkup } from 'react-dom/server';
import { User } from 'lucide-react';

// Fix for default marker icon issues in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom Icons
const createCustomIcon = (count?: number) => {
    // "Green Apple Switch" Design - Hollow Version
    // Uniform Green Color

    const iconMarkup = renderToStaticMarkup(
        <div className="relative flex flex-col items-center justify-end w-12 h-16 group">
            {/* Pulse Effect (Green) */}
            <div className="absolute bottom-2 w-8 h-8 rounded-full opacity-20 bg-green-500 animate-ping" />

            {/* The "Switch" Body (Vertical Pill) - Hollow with Green Border */}
            <div className={`relative w-8 h-12 rounded-full bg-white border-[3px] border-green-600 shadow-lg flex flex-col items-center justify-start pt-1.5 transition-transform group-hover:-translate-y-1`}>
                {/* The "Knob" (Green Circle) */}
                <div className="w-5 h-5 bg-green-600 rounded-full shadow-inner" />
            </div>

            {/* Badge for Rewards Count */}
            {count && (
                <div className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-red-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm border border-white z-20">
                    {count}
                </div>
            )}

            {/* The Point End (Triangle) - Green Filled */}
            <div className="absolute bottom-[2px] w-4 h-4 bg-green-600 rotate-45 transform rounded-sm shadow-sm z-10" />

            {/* Shadow at the very bottom */}
            <div className="w-8 h-2 bg-black/10 rounded-full blur-sm mt-1" />
        </div>
    );

    return L.divIcon({
        html: iconMarkup,
        className: 'custom-leaflet-icon',
        iconSize: [48, 64],
        iconAnchor: [24, 64],
        popupAnchor: [0, -64]
    });
};

const UserIcon = L.divIcon({
    html: renderToStaticMarkup(
        <div className="relative flex items-center justify-center w-8 h-8">
            <div className="absolute inset-0 bg-brand-500 rounded-full opacity-20 animate-ping" />
            <div className="relative w-6 h-6 bg-brand-600 rounded-full border-2 border-white shadow-md flex items-center justify-center text-white">
                <User size={14} />
            </div>
        </div>
    ),
    className: 'custom-user-icon',
    iconSize: [32, 32],
    iconAnchor: [16, 16]
});

// Component to recenter map when position changes
function RecenterAutomatically({ lat, lng }: { lat: number; lng: number }) {
    const map = useMap();
    useEffect(() => {
        map.setView([lat, lng]);
    }, [lat, lng, map]);
    return null;
}

interface MapComponentProps {
    items: (Restaurant | GroceryStore)[];
    centerPosition?: { lat: number; lng: number } | null;
}

export const MapComponent = ({ items, centerPosition }: MapComponentProps) => {
    const [position, setPosition] = useState<{ lat: number; lng: number } | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported by your browser');
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude
                });
            },
            () => {
                setError('Unable to retrieve your location');
            }
        );
    }, []);

    // Default center (Paris) if no location yet
    // Use centerPosition if provided, otherwise use user position or default
    const center = centerPosition || position || { lat: 48.8566, lng: 2.3522 };

    return (
        <div className="h-48 rounded-2xl overflow-hidden shadow-sm border border-slate-200 mb-6 relative z-0">
            {error && (
                <div className="absolute inset-0 bg-slate-50/90 z-[1000] flex items-center justify-center p-4 text-center text-sm text-slate-500">
                    <p>{error}. showing default location.</p>
                </div>
            )}

            <MapContainer
                center={[center.lat, center.lng]}
                zoom={14}
                scrollWheelZoom={true}
                style={{ height: '100%', width: '100%' }}
                zoomControl={true}
            >
                {/* CartoDB Positron Tiles - Clean & Minimalist */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

                {position && <RecenterAutomatically lat={position.lat} lng={position.lng} />}
                {centerPosition && <RecenterAutomatically lat={centerPosition.lat} lng={centerPosition.lng} />}

                {/* User Location Marker */}
                {position && (
                    <Marker position={[position.lat, position.lng]} icon={UserIcon}>
                        <Popup className="custom-popup">
                            <span className="font-bold text-sm">You are here</span>
                        </Popup>
                    </Marker>
                )}

                {/* Items Markers */}
                {items.map((item) => {
                    return (
                        <Marker key={item.id} position={[item.lat, item.lng]} icon={createCustomIcon(item.rewardsCount)}>
                            <Popup className="custom-popup min-w-[200px]">
                                <div className="text-center p-1">
                                    <strong className="block text-sm text-slate-900">{item.name}</strong>
                                    {'rating' in item && <span className="text-xs font-bold text-yellow-500">★ {item.rating}</span>}
                                    {'distance' in item && <span className="text-xs text-slate-500 block">{item.distance}</span>}

                                    {item.inventory && (
                                        <div className="mt-2 pt-2 border-t border-slate-100 text-left">
                                            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
                                                {item.rewardsCount} Vegan Rewards
                                            </p>
                                            <div className="flex flex-wrap gap-1">
                                                {item.inventory.map((inv, i) => (
                                                    <span key={i} className="bg-green-50 text-green-700 text-[10px] px-1.5 py-0.5 rounded-full border border-green-100">
                                                        {inv}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </div>
    );
};
