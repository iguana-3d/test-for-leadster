import React from 'react';
import { SeeDemonstrationSectionContainer } from './styles';

const SeeDemonstrationSection: React.FC = () => {
  return (
    <SeeDemonstrationSectionContainer>
      <div className="content">
        <div className="content-left">
          <picture>
            <source srcSet="/static/images/comparativo.png" type="image/png" />
            <img
              className="nav-bar-image"
              src="/static/images/comparativo.png"
              alt="logo"
            />
          </picture>
        </div>
        <div className="content-right">
          <h2>
            <span>Pronto para triplicar sua geração</span>
            <span>Geração de Leads?</span>
          </h2>
          <p>
            Criação e ativação em <strong>4 minutos.</strong>
          </p>
          <div className="separate-line" />
          <button>Ver demonstração</button>
          <picture>
            <source srcSet="/static/images/selo_RD.png" type="image/png" />
            <img
              className="nav-bar-image"
              src="/static/images/selo_RD.png"
              alt="logo"
            />
          </picture>
          <picture>
            <source
              srcSet="/static/images/no-card-dark.webp"
              type="image/png"
            />
            <img
              className="nav-bar-image"
              src="/static/images/no-card-dark.webp"
              alt="logo"
            />
          </picture>
          <p>
            <strong>Não</strong> é necessário cartão de crédito |
          </p>
          <picture>
            <source srcSet="/static/images/rating.webp" type="image/png" />
            <img
              className="nav-bar-image"
              src="/static/images/rating.webp"
              alt="logo"
            />
          </picture>
          <p>
            <strong>4.9</strong>/5 média de satisfação
          </p>
        </div>
      </div>
    </SeeDemonstrationSectionContainer>
  );
};

export default SeeDemonstrationSection;
