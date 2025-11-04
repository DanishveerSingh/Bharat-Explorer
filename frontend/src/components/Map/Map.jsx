import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IndiaMap } from "@vishalvoid/react-india-map";
import vid1 from "../../assets/vid1.mp4";
import "./Map.css";

const mapStyle = {
  fill: "#f0f8ff",
  stroke: "#0b1a4d",
  strokeWidth: 1.5,
  hoverCursor: "pointer",
};

const stateNames = {
  "IN-AN": "Andaman and Nicobar Island",
  "IN-AP": "Andhra Pradesh",
  "IN-AR": "Arunachal Pradesh",
  "IN-AS": "Assam",
  "IN-BR": "Bihar",
  "IN-CT": "Chhattisgarh",
  "IN-DL": "Delhi",
  "IN-GA": "Goa",
  "IN-GJ": "Gujarat",
  "IN-HR": "Haryana",
  "IN-HP": "Himachal Pradesh",
  "IN-JK": "Jammu and Kashmir",
  "IN-JH": "Jharkhand",
  "IN-KA": "Karnataka",
  "IN-KL": "Kerala",
  "IN-LD": "Lakshadweep Island",
  "IN-MP": "Madhya Pradesh",
  "IN-MH": "Maharashtra",
  "IN-MN": "Manipur",
  "IN-ML": "Meghalaya",
  "IN-MZ": "Mizoram",
  "IN-NL": "Nagaland",
  "IN-OR": "Odisha",
  "IN-PB": "Punjab",
  "IN-RJ": "Rajasthan",
  "IN-SK": "Sikkim",
  "IN-TN": "Tamil Nadu",
  "IN-TG": "Telangana",
  "IN-TR": "Tripura",
  "IN-UP": "Uttar Pradesh",
  "IN-UT": "Uttarakhand",
  "IN-WB": "West Bengal",
};

const stateData = [
  {
    id: "IN-AN",
    customData: {
      capital: "Port Blair",
    },
  },
  {
    id: "IN-AP",
    customData: {
      capital: "Hyderabad",
    },
  },
  {
    id: "IN-AR",
    customData: {
      capital: "Itanagar",
    },
  },
  {
    id: "IN-AS",
    customData: {
      capital: "Dispur",
    },
  },
  {
    id: "IN-BR",
    customData: {
      capital: "Patna",
    },
  },
  {
    id: "IN-CT",
    customData: {
      capital: "Raipur",
    },
  },
  {
    id: "IN-DL",
    customData: {
      capital: "Delhi",
    },
  },
  {
    id: "IN-GA",
    customData: {
      capital: "Panaji",
    },
  },
  {
    id: "IN-GJ",
    customData: {
      capital: "Gandhinagar",
    },
  },
  {
    id: "IN-HR",
    customData: {
      capital: "Chandigarh",
    },
  },
  {
    id: "IN-HP",
    customData: {
      capital: "Shimla",
    },
  },
  {
    id: "IN-JK",
    customData: {
      capital: "Srinagar (Summer Capital) \n Jammu (Winter Capital)",
    },
  },
  {
    id: "IN-JH",
    customData: {
      capital: "Ranchi",
    },
  },
  {
    id: "IN-KA",
    customData: {
      capital: "Bengaluru",
    },
  },
  {
    id: "IN-KL",
    customData: {
      capital: "Thiruvananthapuram",
    },
  },
  {
    id: "IN-LD",
    customData: {
      capital: "Kavaratti",
    },
  },
  {
    id: "IN-MP",
    customData: {
      capital: "Bhopal",
    },
  },
  {
    id: "IN-MH",
    customData: {
      capital: "Mumbai",
    },
  },
  {
    id: "IN-MN",
    customData: {
      capital: "Imphal",
    },
  },
  {
    id: "IN-ML",
    customData: {
      capital: "Shillong",
    },
  },
  {
    id: "IN-MZ",
    customData: {
      capital: "Aizwal",
    },
  },
  {
    id: "IN-NL",
    customData: {
      capital: "Kohima",
    },
  },
  {
    id: "IN-OR",
    customData: {
      capital: "Bhubaneswar",
    },
  },
  {
    id: "IN-PB",
    customData: {
      capital: "Chandigarh",
    },
  },
  {
    id: "IN-RJ",
    customData: {
      capital: "Jaipur",
    },
  },
  {
    id: "IN-SK",
    customData: {
      capital: "Gangtok",
    },
  },
  {
    id: "IN-TN",
    customData: {
      capital: "Chennai",
    },
  },
  {
    id: "IN-TG",
    customData: {
      capital: "Hyderabad",
    },
  },
  {
    id: "IN-TR",
    customData: {
      capital: "Agartala",
    },
  },
  {
    id: "IN-UP",
    customData: {
      capital: "Lucknow",
    },
  },
  {
    id: "IN-UT",
    customData: {
      capital: "Gairsain (Summer Capital) \n Dehradun (Winter Capital)",
    },
  },
  {
    id: "IN-WB",
    customData: {
      capital: "Kolkata",
    },
  },
];

const Map = () => {
  const [selectedState, setSelectedState] = useState(null);
  const [activeState, setActiveState] = useState(null);
  const [isMapReady, setIsMapReady] = useState(false);
  const [statePath, setStatePath] = useState(null);
  const [viewBox, setViewBox] = useState("0 0 1000 1000");
  const [pathsCached, setPathsCached] = useState(false);

  const mapContainerRef = useRef(null);
  const mapWrapperRef = useRef(null);
  const enlargedMapRef = useRef(null);
  const videoRef = useRef(null);
  const statePathsCache = useRef({});
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

  useEffect(() => {
    if (!mapContainerRef.current) {
      return;
    }
    const el = mapContainerRef.current;
    el.style.height = "100vh";
    el.style.width = "100vw";
    setTimeout(() => setIsMapReady(true), 100);
  }, []);

  useEffect(() => {
    if (!isMapReady) {
      return;
    }
    const svg = document.querySelector(".india-map-container svg");
    if (!svg) {
      return;
    }
    const paths = svg.querySelectorAll("path");
    if (paths.length === 0) {
      return;
    }
    const cache = {};
    paths.forEach((path) => {
      if (path.id) {
        cache[path.id] = path.outerHTML;
      }
    });
    if (Object.keys(cache).length > 0) {
      statePathsCache.current = cache;
      setPathsCached(true);
    }
  }, [isMapReady]);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const stateFromUrl = params.get("state");
    if (stateFromUrl && stateNames[stateFromUrl]) {
      setSelectedState(stateFromUrl);
    } else {
      setSelectedState(null);
    }
  }, [location.search]);

  const getSelectedStateName = () =>
    selectedState ? stateNames[selectedState] || selectedState : "";

  useEffect(() => {
    if (!selectedState || !enlargedMapRef.current) {
      return;
    }
    const svg = enlargedMapRef.current.querySelector("svg");
    if (!svg) {
      return;
    }
    const paths = svg.querySelectorAll("path");
    paths.forEach((p) => p.classList.remove("selected"));
    const active = svg.querySelector(`#${selectedState}`);
    if (active) {
      active.classList.add("selected");
    }
  }, [selectedState]);

  useEffect(() => {
    if (!selectedState || !pathsCached) {
      setStatePath(null);
      return;
    }
    const pathStr = statePathsCache.current[selectedState];
    if (!pathStr) {
      setStatePath(null);
      return;
    }
    setStatePath(pathStr);
    const svg = document.querySelector(".india-map-container svg");
    if (!svg) {
      return;
    }
    const path = svg.querySelector(`#${selectedState}`);
    if (!path) {
      return;
    }
    const bbox = path.getBBox();
    const padding = 20;
    setViewBox(
      `${bbox.x - padding} ${bbox.y - padding} ${bbox.width + 2 * padding} ${
        bbox.height + 2 * padding
      }`
    );
  }, [selectedState, pathsCached]);

  const onStateClick = (stateId) => {
    if (selectedState === stateId) {
      setSelectedState(null);
      navigate("/map", { replace: true });
    } else {
      setSelectedState(stateId);
      navigate(`/map?state=${stateId}`, { replace: true });
    }
  };

  return (
    <div className="map-wrapper" ref={mapWrapperRef}>
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
        src={vid1}
        type="vid1/mp4"
        ref={videoRef}
      />
      <div
        ref={mapContainerRef}
        className={`india-map-container ${selectedState ? "blurred" : ""} ${
          isMapReady ? "loaded" : "loading"
        }`}
      >
        <div className="map-content">
          <IndiaMap
            stateData={stateData}
            onStateHover={(stateId) => setActiveState(stateId)}
            mapStyle={mapStyle}
            onStateClick={onStateClick}
          />
        </div>
      </div>

      {selectedState && statePath ? (
        <div className="state-detail-view">
          <div className="enlarged-state-container">
            <div className="enlarged-state">
              <h2 className="state-title">{getSelectedStateName()}</h2>
              <div className="state-map-enlarged" ref={enlargedMapRef}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"  
                  viewBox={viewBox}
                  className="single-state-svg"
                  onClick={() => {
                    setSelectedState(null);
                    navigate("/map", { replace: true });
                  }}
                  dangerouslySetInnerHTML={{ __html: statePath }}
                />
              </div>
              <p className="click-instruction">
                Click the state again to return to main view
              </p>
            </div>
          </div>

          <div className="info-panels">
            <Link
              to={`/${getSelectedStateName().replace(/\s+/g, "-")}/culture`}
              className="info-panel culture-panel"
            >
              <i className="fa-solid fa-arrow-right icon1"></i>
              <span className="culture-heading">Culture</span>
            </Link>

            <Link
              to={`/${getSelectedStateName().replace(/\s+/g, "-")}/cuisine`}
              className="info-panel cuisine-panel"
            >
              <i className="fa-solid fa-arrow-right icon2"></i>
              <span className="cuisine-heading">Cuisine</span>
            </Link>

            <Link
              to={`/${getSelectedStateName().replace(/\s+/g, "-")}/sights`}
              className="info-panel places-panel"
            >
              <i className="fa-solid fa-arrow-right icon3"></i>
              <span className="places-heading">Sights</span>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Map;
