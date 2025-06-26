import React from 'react';

interface SplitLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
  leftWidth?: string;
  rightWidth?: string;
  className?: string;
}

const SplitLayout: React.FC<SplitLayoutProps> = ({ 
  left, 
  right, 
  leftWidth = 'w-full md:w-1/2', 
  rightWidth = 'w-full md:w-1/2',
  className = '' 
}) => {
  return (
    <div className={`flex flex-col md:flex-row gap-6 ${className}`}>
      <div className={leftWidth}>
        {left}
      </div>
      <div className={rightWidth}>
        {right}
      </div>
    </div>
  );
};

export default SplitLayout;