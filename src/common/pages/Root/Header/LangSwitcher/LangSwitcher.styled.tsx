import styled from '@common/theme/styled-components';

export const LangSwitcher = styled.div`
  display: flex;
`;

export const LangSwitcherItem = styled.button<{
  isActive: boolean;
}>`
  display: flex;
  justify-content: center;

  min-width: 50px;

  margin-left: 5px;
  padding: 5px;
  border: 1px solid ${(props) => props.theme.whiteColor};

  background: none;
  color: ${(props) => props.theme.whiteColor};
  font-size: ${(props) => props.theme.mediumFontSize};
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.whiteColor};
    color: ${(props) => props.theme.textColor};
  }

  ${(props) =>
    props.isActive &&
    `
    background: ${props.theme.whiteColor};
    color: ${props.theme.textColor};
  `}
`;
