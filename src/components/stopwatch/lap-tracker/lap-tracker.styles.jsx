import styled from "styled-components";

export const StyledLapTrackerWrapper = styled.div`
  height: 90px;
  overflow: auto;
  cursor: pointer;
  position: relative;
  border-top: 1px solid rgb(94, 94, 94);
  margin: 15px 0 20px 0;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledLapTracker = styled.div`
  position: absolute;
  top: 0;
  min-height: 200px;
  width: 100%;
  overflow: scroll;
  background: repeating-linear-gradient(
    #111,
    #111 30px,
    rgb(94, 94, 94) 30px,
    rgb(94, 94, 94) 31px
  );
`;

export const StyledLapData = styled.div`
  height: 31px;
  display: flex;
  width: 100%;
  justify-content: flex-between;
  align-items: center;

  span {
    font-size: 0.5em;
    flex: 1;
  }

  .time {
    font-variant-numeric: tabular-nums;
    text-align: right;
  }
`;
