import React from 'react';
import GridCards from '../../../GridCards';
import { GridSectionContainer } from './styles';

const GridSection: React.FC = () => {
  return (
    <GridSectionContainer>
      <div className="content">
        <GridCards />
      </div>
    </GridSectionContainer>
  );
};

export default GridSection;
