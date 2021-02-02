import React, { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";

// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWifi,
  faSignal,
  faBatteryQuarter,
  faGlobe,
  faClock,
  faStopwatch,
  faHourglassStart,
} from "@fortawesome/free-solid-svg-icons";

// styles
import {
  StyledPhoneBody,
  StyledPhoneBodyUpper,
  StyledPhoneBodyLower,
  StyledPhoneScreen,
  StyledUpperToolbar,
  StyledLowerToolbar,
} from "./phone-body.styles";

import { doubleDigits } from "../../constants";

const PhoneBody = ({ children }) => {
  const [time, setTime] = useState(null);

  // GET LOCAL TIME
  const getCurrentTime = useCallback(() => {
    const NOW = new Date();
    const HOUR = NOW.getHours();
    const MINUTES = NOW.getMinutes();
    const IS_AM = HOUR >= 0 && HOUR < 12;
    setTime(
      `${HOUR % 12 === 0 ? 12 : HOUR % 12}:${doubleDigits(MINUTES)} ${
        IS_AM ? "AM" : "PM"
      }`
    );
  }, []);

  useEffect(() => {
    setInterval(getCurrentTime, 1000);

    return clearInterval(getCurrentTime, 1000);
  }, [getCurrentTime]);

  return (
    <StyledPhoneBody>
      <StyledPhoneBodyUpper />
      <StyledPhoneScreen>
        <StyledUpperToolbar>
          <div class='item'>
            <FontAwesomeIcon icon={faSignal} />
            <span>chatr</span>
            <FontAwesomeIcon icon={faWifi} />
          </div>
          <div class='item'>
            <span id='local-time'>{time}</span>
          </div>
          <div class='item'>
            <span>38%</span>
            <FontAwesomeIcon icon={faBatteryQuarter} />
          </div>
        </StyledUpperToolbar>
        {children}
        <StyledLowerToolbar>
          <NavLink to='/clock'>
            <FontAwesomeIcon icon={faGlobe} />
            <span>World Clock</span>
          </NavLink>
          <NavLink to='/alarm'>
            <FontAwesomeIcon icon={faClock} />
            <span>Alarm</span>
          </NavLink>
          <NavLink to='/stopwatch'>
            <FontAwesomeIcon icon={faStopwatch} />
            <span>Stopwatch</span>
          </NavLink>
          <NavLink to='/timer'>
            <FontAwesomeIcon icon={faHourglassStart} />
            <span>Timer</span>
          </NavLink>
        </StyledLowerToolbar>
      </StyledPhoneScreen>
      <StyledPhoneBodyLower />
    </StyledPhoneBody>
  );
};

export default PhoneBody;
