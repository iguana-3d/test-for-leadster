import React from 'react';
import {
  DownloadItemsModalContainer,
  IDownloadItemsModalProps,
} from './styles';
import { SlCloudDownload } from 'react-icons/sl';

interface IProps extends IDownloadItemsModalProps {
  text: string;
}

const DownloadItemsModal: React.FC<IProps> = ({ text, ...props }) => {
  return (
    <DownloadItemsModalContainer {...props}>
      <span className="download-items-icon-box">
        <SlCloudDownload size={24} />
      </span>
      <span className="download-items-text">{text}</span>
    </DownloadItemsModalContainer>
  );
};

export default DownloadItemsModal;
