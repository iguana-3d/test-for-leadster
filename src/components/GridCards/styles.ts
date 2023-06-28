import styled, { css } from 'styled-components';

interface IButtonNumberProps {
  isActive: boolean;
}

export const GridCardsContainer = styled.div`
  .grid-cards-control {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    @media ${(props) => props.theme.medias.laptopSmall} {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-bottom: 3rem;
    }
  }

  .grid-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 6rem 0;
    border-top: 1px solid
      ${(props) => props.theme.pallete.colors.others.gray[3]};
    border-bottom: 1px solid
      ${(props) => props.theme.pallete.colors.others.gray[3]};

    @media ${(props) => props.theme.medias.laptopSmall} {
      grid-template-columns: repeat(2, 1fr);
    }

    @media ${(props) => props.theme.medias.mobile} {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    margin-top: 3rem;

    span {
      font-weight: ${(props) => props.theme.typeFaceWeight.semiBold};
      font-size: 2rem;
    }
  }

  .iframe-container {
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }

  .radio-group {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    margin: 3rem 0;

    @media ${(props) => props.theme.medias.laptopSmall} {
      justify-content: center;
    }

    .label-button {
      border-radius: 100px;
      padding: 0.4rem 2rem;
      border: 1px solid ${(props) => props.theme.pallete.colors.others.blue[4]};
      color: ${(props) => props.theme.pallete.colors.others.blue[4]};
      font-weight: ${(props) => props.theme.typeFaceWeight.medium};
      transition: all 0.2s;
      background: transparent;
      user-select: none;

      cursor: pointer;

      &:hover {
        border: 1px solid
          ${(props) => props.theme.pallete.colors.others.blue[2]};
        color: ${(props) => props.theme.pallete.colors.others.blue[2]};
      }
    }

    input:checked + .label-button {
      border: 1px solid ${(props) => props.theme.pallete.colors.others.blue[2]};
      background: ${(props) => props.theme.pallete.colors.others.blue[2]};
      color: ${(props) => props.theme.pallete.colors.common.white};
    }

    input {
      display: none;
    }
  }

  .select-group {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-left: auto;

    @media ${(props) => props.theme.medias.laptopSmall} {
      margin-left: initial;
    }

    span {
      color: ${(props) => props.theme.pallete.colors.others.blue[4]};
      font-weight: ${(props) => props.theme.typeFaceWeight.medium};
      font-size: 1.6rem;
      width: max-content;
      white-space: nowrap;
    }
  }
`;

export const ButtonNumber = styled.div<IButtonNumberProps>`
  font-size: 2.4rem;
  display: flex;
  line-height: 2rem;
  font-weight: ${(props) => props.theme.typeFaceWeight.semiBold};

  border-radius: 4px;
  border: 1px solid transparent;
  padding: 0.8rem 1.2rem;
  user-select: none;
  cursor: pointer;

  ${(props) =>
    props.isActive &&
    css`
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme.pallete.colors.others.blue[2]};
      padding: 0.8rem 1.2rem;
      color: ${(props) => props.theme.pallete.colors.others.blue[2]};
    `}
`;

export const CardModalContainer = styled.div`
  h3 {
    max-width: 70%;
    text-align: center;
    margin: 0 auto;
    font-weight: ${(props) => props.theme.typeFaceWeight.bold};
    margin-bottom: 3rem;
    font-size: 2.4rem;

    span {
      font-size: 2.4rem;
      font-weight: ${(props) => props.theme.typeFaceWeight.bold};
      color: ${(props) => props.theme.pallete.colors.others.blue[6]};
    }
  }

  .card-modal-texts {
    padding: 1.6rem 3rem 0;

    h4 {
      padding-bottom: 0.4rem;
      border-bottom: 1px solid
        ${(props) => props.theme.pallete.colors.others.gray[3]};
    }

    p {
      margin-bottom: 1.6rem;
      font-weight: ${(props) => props.theme.typeFaceWeight.medium};
    }
  }

  .card-modal-buttons {
    display: flex;
    flex-wrap: wrap;
    gap: 0.8rem;
  }
`;
