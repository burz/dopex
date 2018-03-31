import styled from 'styled-components';

export const AppStyle = styled.div`

  // This is used to provide padding when a fixed navbar is present,
  // essentially every page except for Home - '/'
  padding-top: ${props => props.location ? '110px' : '0px'};

  // Used to provide padding to compensate for the area occupied by the footer
  padding-bottom: 50px;
`;
