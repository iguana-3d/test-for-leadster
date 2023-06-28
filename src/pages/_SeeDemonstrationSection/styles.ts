import styled from 'styled-components';

export const SeeDemonstrationSectionContainer = styled.div`
  margin: 6rem 0;
  ${(props) => props.theme.mixins.containerGridDefault};
  background: ${(props) => props.theme.pallete.colors.others.blue[1]};
  padding: 3rem 0;

  .content {
    grid-column: center-start / center-end;
  }
`;
