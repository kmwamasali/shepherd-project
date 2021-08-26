import React, { useState } from 'react';
import styled from 'styled-components';

//TODO: enhance with direction prop
interface TooltipProps {
  content: string,
  children: React.ReactNode
}

const StyledTooltipWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const StyledTooltipTip = styled.div`
  position: absolute;
  border-radius: 4px;
  left: 50%;
  transform: translateX(-50%);
  padding: 5px 20px;
  color: #fff;
  background: #212429;
  font-size: 8px;
  font-family: sans-serif;
  line-height: 10px;
  z-index: 100;
  white-space: nowrap;
  top: calc(15px * -1);

  &:before {
    content: " ";
    left: 50%;
    border: solid transparent;
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
    border-width: 6px;
    margin-left: calc(6px * -1);
    top: 100%;
    border-top-color: #212429;
  }
`;

const Tooltip = (props: TooltipProps): JSX.Element => {
  const [show, handleShow] = useState(false);

  //TODO: enhance animation with setTimeout delay
  const toolTipHandler = () => handleShow(!show);

  return(
    <StyledTooltipWrapper
      onMouseEnter={toolTipHandler}
      onMouseLeave={toolTipHandler}
    >
      {show && (
        <StyledTooltipTip>
          {props.content}
        </StyledTooltipTip>
      )}
      {props.children}
    </StyledTooltipWrapper>
  )
}

export default Tooltip;