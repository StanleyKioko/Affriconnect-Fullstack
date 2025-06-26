import React from 'react';

interface GridLayoutProps {
  children: React.ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}

const GridLayout: React.FC<GridLayoutProps> = ({ 
  children, 
  columns = 1,
  className = ''
}) => {
  let gridCols = 'grid-cols-1';
  
  switch(columns) {
    case 2:
      gridCols = 'grid-cols-1 md:grid-cols-2';
      break;
    case 3:
      gridCols = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      break;
    case 4:
      gridCols = 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      break;
    default:
      gridCols = 'grid-cols-1';
  }

  return (
    <div className={`grid ${gridCols} gap-6 ${className}`}>
      {children}
    </div>
  );
};

export default GridLayout;