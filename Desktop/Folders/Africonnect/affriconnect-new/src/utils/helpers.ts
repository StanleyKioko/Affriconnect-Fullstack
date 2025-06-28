// String formatting helpers
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const truncate = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength) + '...';
};

// Date formatting
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};

// If you're not ready to implement helper functions yet
// export {};