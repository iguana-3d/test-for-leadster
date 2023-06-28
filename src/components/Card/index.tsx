import React, { HTMLAttributes } from 'react';
import { BsPlayFill } from 'react-icons/bs';
import { CardContainer } from './styles';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

const Card: React.FC<IProps> = ({ title, ...props }) => {
  return (
    <CardContainer {...props}>
      <picture>
        <source srcSet="/static/images/thumbnail.png" type="image/png" />
        <img
          className="nav-bar-image"
          src="/static/images/thumbnail.png"
          alt="logo"
        />
        <div className="icon-play-box">
          <BsPlayFill size={96} />
        </div>
      </picture>
      <h3>{title}</h3>
    </CardContainer>
  );
};

export default Card;
