import styled from "styled-components";

export const StyledPhoneBody = styled.div`
  height: 620px;
  width: 300px;
  background: white;
  position: relative;
  border-radius: 50px;
  box-shadow: 0px 2px 20px rgba(19, 19, 19, 0.2);
  z-index: 100000;
`;

export const StyledPhoneBodyUpper = styled.div`
  position: absolute;
  height: 5px;
  width: 70px;
  top: 40px;
  background: #111;
  border-radius: 10px;
  left: 50%;
  transform: translateX(-50%);

  &:before {
    position: absolute;
    content: "";
    height: 9px;
    width: 9px;
    left: -20px;
    background: #111;
    border-radius: 50%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const StyledPhoneBodyLower = styled.div`
  position: absolute;
  height: 50px;
  width: 50px;
  bottom: 15px;
  border-radius: 50%;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #111;
`;

export const StyledPhoneScreen = styled.div`
  position: absolute;
  background: #111;
  height: 73%;
  width: 93%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px;
  color: #fff;
`;

export const StyledUpperToolbar = styled.div`
  position: absolute;
  width: 100%;
  height: 20px;
  top: 0;
  background: #221f1f;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  z-index: 2000;

  .item {
    color: #fff;
    font-size: 0.65em;

    .local-time {
      font-variant-numeric: tabular-nums;
    }

    span {
      padding: 0 5px;
    }
  }
`;

export const StyledLowerToolbar = styled.div`
  position: absolute;
  width: 100%;
  height: 40px;
  border-top: 1px solid rgb(43, 42, 42);
  bottom: 0;
  left: 0;
  background: #221f1f;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(150, 146, 146);
    cursor: pointer;
    font-size: 1.25em;

    span {
      font-size: 0.35em;
      padding-top: 2px;
    }

    &.active {
      color: orange;
    }
  }
`;
