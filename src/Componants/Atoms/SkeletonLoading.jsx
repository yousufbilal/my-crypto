// SkeletonLoading.js
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonLoading = () => {
  return (
    <div>
      <Skeleton height={30} width={300} />
      <Skeleton height={20} width={250} count={3} style={{ marginTop: '10px' }} />
    </div>
  );
};

export default SkeletonLoading;