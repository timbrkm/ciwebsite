import React, { useEffect } from 'react';
import AiCoachComponent from '../components/AiCoach';
import { motion } from 'framer-motion';

const Coach: React.FC = () => {
  useEffect(() => {
    // Ensure page starts at top
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="pt-16 min-h-screen bg-neutral-900">
        <AiCoachComponent />
    </div>
  );
};

export default Coach;