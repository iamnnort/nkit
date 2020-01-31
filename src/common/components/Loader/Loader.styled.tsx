import styled from '@common/theme/styled-components';

export const LoaderSpin = styled.div`
  height: 33px;

  margin: 15px 0;

  background: url('${require('./loader.gif')}') no-repeat center;
  background-size: 33px;
`;

export const LoaderError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 33px;

  margin: 15px 0;

  font-size: 12px;
  color: ${(props) => props.theme.errorColor};
`;
