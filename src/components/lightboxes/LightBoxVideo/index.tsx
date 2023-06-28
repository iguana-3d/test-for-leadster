import React, { HTMLAttributes } from 'react';
import { LightBoxVideoContainer } from './styles';
import { MdOutlineClose } from 'react-icons/md';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  handleOpenModal: () => void;
  customLightboxWidth?: string;
}

const LightBoxVideo: React.FC<IProps> = ({
  children,
  handleOpenModal,
  customLightboxWidth,
  ...props
}) => {
  return (
    <LightBoxVideoContainer
      customLightboxWidth={customLightboxWidth}
      {...props}
    >
      <div className="light-box-content">
        {children}
        <span className="icon-box" onClick={handleOpenModal}>
          <MdOutlineClose size={36} />
        </span>
      </div>
      <div className="light-box-background" onClick={handleOpenModal} />
    </LightBoxVideoContainer>
  );
};

export default LightBoxVideo;
