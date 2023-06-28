import React from 'react';
import { WebinarSectionContainer } from './styles';

const WebinarSection: React.FC = () => {
  return (
    <WebinarSectionContainer>
      <div className="content">
        <span className="webinar-span">Webinars exclusivos</span>
        <h2 className="heading-2">
          <span>Menos Conversinha,</span>
          <span>
            Mais{' '}
            <span>
              Conversão
              <picture>
                <source
                  srcSet="/static/images/asset-header.png"
                  type="image/png"
                />
                <img src="/static/images/asset-header.png" alt="logo" />
              </picture>
            </span>
          </span>
        </h2>
        <p className="content-paragraph">
          Conheça as estratégias que <strong>mudaram o jogo</strong> e como
          aplicá-las no seu negócio
        </p>
      </div>
    </WebinarSectionContainer>
  );
};

export default WebinarSection;
