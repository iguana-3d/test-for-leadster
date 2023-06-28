import styled from 'styled-components';

export const GridSectionContainer = styled.section`
  margin: 6rem 0;
  ${(props) => props.theme.mixins.containerGridDefault};

  .content {
    grid-column: center-start / center-end;
  }
`;
