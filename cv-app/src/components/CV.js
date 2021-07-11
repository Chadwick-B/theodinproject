import React, { Suspense } from 'react';
import GeneralSection from './GeneralSection';
import '../styles/form.css';

const EducationSection = React.lazy(() => import('./EducationSection'));
const PracticalSection = React.lazy(() => import('./PracticalSection'));

const CV = () => {
  return (
    <div className="flex wrap cv-container">
      <GeneralSection />
      <Suspense fallback={<div>...</div>}>
        <EducationSection />
        <PracticalSection />
      </Suspense>
    </div>
  );
};

export default CV;
