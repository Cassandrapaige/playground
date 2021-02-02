import React from "react";

// styles
import {
  StyledLapTrackerWrapper,
  StyledLapTracker,
  StyledLapData,
} from "./lap-tracker.styles";

// constants
import { doubleDigits } from "../../../constants";

const LapTracker = ({ LAPS = [] }) => {
  return (
    <StyledLapTrackerWrapper>
      <StyledLapTracker>
        {LAPS.map((lap, index) => (
          <StyledLapData>
            <span>Lap ${index + 1}</span>
            <span class='time'>
              {`${doubleDigits(lap.minutes)}
              :${doubleDigits(lap.seconds)}
              :${doubleDigits(lap.milliseconds)}`}
            </span>
          </StyledLapData>
        ))}
      </StyledLapTracker>
    </StyledLapTrackerWrapper>
  );
};

export default LapTracker;
