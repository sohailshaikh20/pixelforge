'use client';

import { createContext, useContext, useState, useCallback } from 'react';

const UsageContext = createContext();

export function UsageProvider({ children }) {
  const [usageCount, setUsageCount] = useState(0);
  const FREE_LIMIT = 20;
  const isLimitReached = usageCount >= FREE_LIMIT;

  const incrementUsage = useCallback(() => {
    setUsageCount((prev) => prev + 1);
  }, []);

  return (
    <UsageContext.Provider value={{ usageCount, FREE_LIMIT, isLimitReached, incrementUsage }}>
      {children}
    </UsageContext.Provider>
  );
}

export function useUsage() {
  return useContext(UsageContext);
}
