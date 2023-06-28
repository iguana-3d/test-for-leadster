import React from 'react';
import { SeeDemonstrationSectionContainer } from './styles';
import Button from '../../../buttons/Button';

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
            <span>Pronto para triplicar sua</span>
            <span>
              <strong>Geração de Leads?</strong>
            </span>
          </h2>
          <p className="see-demonstration-paragraph">
            Criação e ativação em <strong>4 minutos.</strong>
          </p>
          <div className="separate-line" />
          <div className="button-box">
            <Button buttonText="Ver demonstração" isUppercase />
            <picture>
              <source srcSet="/static/images/selo_RD.png" type="image/png" />
              <img
                className="nav-bar-image"
                src="/static/images/selo_RD.png"
                alt="logo"
              />
            </picture>
          </div>
          <div className="see-demonstration-bottom-texts">
            <div className="texts-1">
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
            </div>
            <div className="texts-2">
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
        </div>
      </div>
    </SeeDemonstrationSectionContainer>
  );
};

export default SeeDemonstrationSection;
