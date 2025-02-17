import { FC, useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { Modal } from "react-responsive-modal";
import "leaflet/dist/leaflet.css";
import "react-responsive-modal/styles.css";
import { MdDateRange } from "react-icons/md";
import { CgNametag } from "react-icons/cg";
import L from "leaflet";

interface Center {
    lat: number;
    lng: number;
}

export interface EventType {
    geolocation: { lat: number; lng: number };
    organizerContact: string;
    followed: boolean;
    _id: string;
    Date: 4;
    date: string;
    startTime: string;
    endTime: string;
    title: string;
    category: string;
    locationUrl: string;
    entry: string;
    registration: string;
    organizer: string;
}

interface MapProps {
    locations: EventType[];
}

interface MarkerProps {
    location: EventType;
    handleMarkerClick: (location: EventType) => void;
    handleMarkerHover: (location: EventType) => void;
    handleMarkerLeave: () => void;
    isHovered: boolean;
}

function formatDate(inputDate: string) {
    const date = new Date(inputDate);

    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];

    const day = date.getUTCDate();
    const month = months[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    const formattedDate = `${day} ${month}. ${year}`;

    return formattedDate;
}

const toolTipStyle = {
    fontFamily: "Kanit, sans-serif"
}

const titleFontStyle = {
    fontSize: "large",
    display: "flex",
    alignItems: "center",
    gap: "10px"
}

const dateFontStyle = {
    fontSize: "small",
    display: "flex",
    alignItems: "center",
    gap: "10px"
}

const CustomMarker: FC<MarkerProps> = ({
    location,
    handleMarkerClick,
    handleMarkerHover,
    handleMarkerLeave,
    isHovered,
}) => {
    const customIcon = new L.Icon({
        iconUrl: "https://i.imgur.com/htyZSPO.png",
        iconSize: [40, 40],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32],
    });

    return (
        <Marker
            position={[location?.geolocation.lat, location?.geolocation.lng]}
            icon={customIcon}
            eventHandlers={{
                click: () => handleMarkerClick(location),
                mouseover: () => handleMarkerHover(location),
                mouseout: () => handleMarkerLeave(),
            }}
        >
            {isHovered && <div className="marker_popup" style={{
                position: 'absolute',
                zIndex: 999,
                padding: '5px',
                background: 'white',
                borderRadius: '5px',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                bottom: 0
            }}>
                {location?.title}
            </div>}
            <Tooltip >
                <div style={toolTipStyle}>
                    <p style={titleFontStyle}>
                        <CgNametag style={{ fontSize: "large" }} />{location?.title}
                    </p>
                    <p style={dateFontStyle}>
                        <MdDateRange style={{ fontSize: "large" }} /> {formatDate(location.date)}
                    </p>
                </div>
            </Tooltip>
        </Marker>
    );
};

const DynamicMap: FC<MapProps> = ({ locations }) => {
    const [hoveredLocation, setHoveredLocation] = useState<EventType | null>(null);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedLocation, setSelectedLocation] = useState<EventType | null>(null);
    const [Leaflet, setLeaflet] = useState<any | null>(null);

    const handleMarkerClick = (location: EventType) => {
        setHoveredLocation(location);
        setSelectedLocation(location);
        setOpenModal(true);
    };

    const handleModalClose = () => {
        setOpenModal(false);
        setHoveredLocation(null);
        setSelectedLocation(null);
    };

    const mapContainerStyle = {
        width: "100%",
        height: "720px",
        borderRadius: "11px",
    };

    const center: Center = {
        lat: 12.971599,
        lng: 77.594566,
    };

    useEffect(() => {
        import("leaflet").then((L) => {
            setLeaflet(L);

            // Additional Leaflet-related initialization code can go here
        });
    }, []);

    return (
        <div style={{ width: "90%", margin: "auto", maxWidth: "1248px", borderRadius: "11px" }}>
            {Leaflet && (
                <MapContainer
                    style={mapContainerStyle}
                    center={[center.lat, center.lng]}
                    zoom={12}
                    attributionControl={false}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {locations?.map((location: EventType, index: number) => (
                        <CustomMarker
                            key={index}
                            location={location}
                            handleMarkerClick={handleMarkerClick}
                            handleMarkerHover={setHoveredLocation}
                            handleMarkerLeave={() => setHoveredLocation(null)}
                            isHovered={hoveredLocation === location}
                        />
                    ))}
                </MapContainer>
            )}

            {/* Modal to show the Google Maps view */}
            <Modal open={openModal} onClose={handleModalClose} center classNames={{
                modal: 'map-modal',
            }}>
                {selectedLocation && Leaflet && (
                    <iframe
                        title="Google Maps View"
                        className="map-view"
                        src={`https://maps.google.com/maps?q=${selectedLocation.geolocation.lat},${selectedLocation.geolocation.lng}&z=15&output=embed`}
                    />
                )}
            </Modal>
        </div>
    );
};

export default DynamicMap;
