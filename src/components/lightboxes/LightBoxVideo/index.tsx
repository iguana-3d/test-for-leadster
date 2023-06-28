import React, { HTMLAttributes } from 'react';
import { LightBoxVideoContainer } from './styles';
import { MdOutlineClose } from 'react-icons/md';
import { useTheme } from 'styled-components';
import DownloadItemsModal from '../../buttons/DownloadItemsModal';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  handleOpenModal: () => void;
  customLightboxWidth?: string;
  buttonsLeft: React.ReactNode[];
}

const LightBoxVideo: React.FC<IProps> = ({
  children,
  handleOpenModal,
  customLightboxWidth,
  buttonsLeft,
  ...props
}) => {
  const theme = useTheme();

  return (
    <LightBoxVideoContainer
      customLightboxWidth={customLightboxWidth}
      {...props}
    >
      <div className="buttons-bottom-left">
        {buttonsLeft.map((button) => {
          return button;
        })}
      </div>
      <div className="light-box-content">
        <div className="background-above" />
        {children}
        <span className="icon-box" onClick={handleOpenModal}>
          <MdOutlineClose
            size={24}
            color={theme.pallete.colors.others.gray[2]}
          />
        </span>
      </div>
      <div className="light-box-background" onClick={handleOpenModal} />
    </LightBoxVideoContainer>
  );
};

export default LightBoxVideo;
