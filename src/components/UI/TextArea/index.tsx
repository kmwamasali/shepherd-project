import React from 'react';
import styled from 'styled-components';

type State = {
  text: string
}

const StyledTextArea = styled.textarea`
  color: #272727;
  padding: 16px;
  font-size: 10px;
  background: #F9F9F9;
  border: 1px solid #E5E5E5;
  box-sizing: border-box;
  border-radius: 10px;
  width: 100%;
  min-height: 175px;
`;

const StyledLimitText = styled.p`
  font-size: 8px;
  text-align: center;
  color: #D85988;
`;

class TextArea extends React.Component<any, State> {
  render() {
    return(
      <>
        <StyledTextArea maxLength={this.props.limited} value={this.props.text} onChange={this.props.onChange} />
        {this.props.limited && <StyledLimitText>Max 500 Characters</StyledLimitText>}
      </>
    );
  }
}

export default TextArea;