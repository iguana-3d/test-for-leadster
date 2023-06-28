import React from 'react';
import GridCards from '../../components/GridCards';
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
