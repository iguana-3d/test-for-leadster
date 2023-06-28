import React from 'react';
import { FooterContainer } from './styles';
import Link from 'next/link';
import { FaLinkedinIn } from 'react-icons/fa';
import { BiLogoInstagram, BiLogoFacebook } from 'react-icons/bi';
import { useTheme } from 'styled-components';
import { useRouter } from 'next/navigation';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  const theme = useTheme();
  const router = useRouter();

  return (
    <FooterContainer>
      <div className="content">
        <div className="footer-logo">
          <picture>
            <source srcSet="/static/images/logo.png" type="image/png" />
            <img
              className="nav-bar-image"
              src="/static/images/logo.png"
              alt="logo"
            />
          </picture>
          <p>Transformando visitantes em clientes.</p>
        </div>
        <div className="grid-links">
          <div className="links-box">
            <h3>Links Principais</h3>
            <Link href="/" className="link">
              Home
            </Link>
            <Link href="/" className="link">
              Ferramenta
            </Link>
            <Link href="/" className="link">
              Preços
            </Link>
            <Link href="/" className="link">
              Contato
            </Link>
          </div>
          <div className="links-box">
            <h3>Cases</h3>
            <Link href="/" className="link">
              Geração de Leads B2B
            </Link>
            <Link href="/" className="link">
              Geração de Leads em Software
            </Link>
            <Link href="/" className="link">
              Geração de Leads em Imobiliária
            </Link>
            <Link href="/" className="link">
              Cases de Sucesso
            </Link>
          </div>
          <div className="links-box">
            <h3>Materiais</h3>
            <Link href="/" className="link">
              Blog
            </Link>
            <Link href="/" className="link">
              Parceria com Agências
            </Link>
            <Link href="/" className="link">
              Guia Definitivo do Marketing
            </Link>
            <Link href="/" className="link">
              Materiais Gratuitos
            </Link>
          </div>
          <div className="links-box">
            <h3>Siga a Leadster</h3>
            <div className="social-media-box">
              <div className="icon-box">
                <FaLinkedinIn
                  size={24}
                  color={theme.pallete.colors.others.gray[2]}
                  onClick={() => router.push('/')}
                />
              </div>
              <div className="icon-box">
                <BiLogoFacebook
                  size={24}
                  color={theme.pallete.colors.others.gray[2]}
                  onClick={() => router.push('/')}
                />
              </div>
              <div className="icon-box">
                <BiLogoInstagram
                  size={24}
                  color={theme.pallete.colors.others.gray[2]}
                  onClick={() => router.push('/')}
                />
              </div>
            </div>
            <div className="contact-link-box">
              <span>E-mail:</span>
              <Link
                href="mailto:contato@leadster.com.br"
                className="contact-link"
              >
                contato@leadster.com.br
              </Link>
            </div>
            <div className="contact-link-box">
              <span>Telefone:</span>
              <Link href="tel:+5542988289851" className="contact-link">
                (42) 98828-9851
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-line" />
      <div className="footer-copyright">
        <p>
          Copyright &copy; 2015 - {year} Todos os direitos reservados |{' '}
          <Link href="/" className="footer-copyright-link">
            Leadster
          </Link>
        </p>
        <p>
          Rua José Loureiro, 464 - Centro - Curitiba PR - CEP: 080010-000 |{' '}
          <Link href="/" target="_blank" className="footer-copyright-terms">
            Termos de uso
          </Link>
        </p>
      </div>
    </FooterContainer>
  );
};

export default Footer;
