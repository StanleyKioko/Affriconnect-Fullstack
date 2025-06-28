// Base API URL
const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API URL

// Helper function for making API requests
export const fetchApi = async <T>(
  endpoint: string, 
  options?: RequestInit
): Promise<T> => {
  const url = `${API_BASE_URL}${endpoint}`;
  
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });
  
  if (!response.ok) {
    throw new Error(`API error: ${response.status}`);
  }
  
  return await response.json();
};

// If you're not ready to implement API calls yet
export {};