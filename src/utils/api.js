// utils/api.js

export const fetchDataFromAPI = async (endpoint) => {
    // Simulated API call with dummy data
    const dummyData = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
      { id: 3, name: 'Bob Smith' },
    ];
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(dummyData);
      }, 1000); // Simulating a 1 second delay
    });
  };
  