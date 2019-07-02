import styled from '../../../theme/styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: flex-end;

  padding: 15px;

  background: ${(props) => props.theme.shadowColor};
`;
