import styled from 'styled-components';

export const FooterContainer = styled.footer`
  margin: 6rem 0;
  ${(props) => props.theme.mixins.containerGridDefault};

  .content {
    grid-column: center-start / center-end;

    .footer-logo {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 3rem;
    }

    .grid-links {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 3rem;

      @media ${(props) => props.theme.medias.laptopSmall} {
        grid-template-columns: repeat(2, 1fr);
      }

      @media ${(props) => props.theme.medias.mobile} {
        grid-template-columns: repeat(1, 1fr);
        text-align: center;
      }
    }

    .links-box {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      @media ${(props) => props.theme.medias.mobile} {
        align-items: center;
      }
    }

    .link {
      &,
      &:active,
      &:link {
        color: ${(props) => props.theme.pallete.colors.others.gray[2]};
        text-decoration: none;
        width: max-content;
        padding: 0.8rem 0;
      }

      &:hover {
        font-weight: ${(props) => props.theme.typeFaceWeight.semiBold};
      }
    }
  }

  .footer-line {
    grid-column: full-start / full-end;
    background: ${(props) => props.theme.pallete.colors.others.gray[3]};
    height: 1px;
    width: 100%;
    margin: 3rem 0;
  }

  .footer-copyright {
    grid-column: center-start / center-end;
    display: flex;
    justify-content: space-between;
    gap: 3rem;

    @media ${(props) => props.theme.medias.laptopSmall} {
      flex-direction: column;
      align-items: center;
    }
  }

  .social-media-box {
    display: flex;
    gap: 1.6rem;
    margin-bottom: 1.6rem;

    .icon-box {
      display: flex;
      background: ${(props) => props.theme.pallete.colors.others.gray[1]};
      border-radius: 100px;
      padding: 1.6rem;
      cursor: pointer;

      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .contact-link-box {
    display: flex;
    gap: 0.8rem;
    align-items: center;

    span {
      font-weight: ${(props) => props.theme.typeFaceWeight.semiBold};
    }

    .contact-link {
      &,
      &:active,
      &:link {
        color: ${(props) => props.theme.pallete.colors.others.gray[2]};
        text-decoration: none;
        width: max-content;
      }

      &:hover {
        font-weight: ${(props) => props.theme.typeFaceWeight.semiBold};
      }
    }
  }

  .footer-copyright-link {
    &,
    &:active,
    &:link {
      color: ${(props) => props.theme.pallete.colors.others.blue[7]};
      text-decoration: none;
      width: max-content;
      padding: 0.8rem 0;
    }

    &:hover {
      font-weight: ${(props) => props.theme.typeFaceWeight.semiBold};
    }
  }

  .footer-copyright-terms {
    &,
    &:active,
    &:link {
      text-decoration: none;
      width: max-content;
      padding: 0.8rem 0;
      color: ${(props) => props.theme.pallete.colors.others.blue[4]};
    }

    &:hover {
      color: ${(props) => props.theme.pallete.colors.common.black};
    }
  }
`;
