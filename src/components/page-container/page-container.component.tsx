import { ReactNode } from 'react';
import './page-container.style.css';

interface IProps {
  children: ReactNode;
}

export const PageContainer = ({children}: IProps) => {
  return (
    <div className='page'>
      <div className='container'>
      {children}
      </div>
    </div>
  );
}
