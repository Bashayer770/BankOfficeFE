const API = {
  AUTH: {
    LOGIN: 'https://localhost:7262/api/Auth/login',
  },
  CUSTOMER: {
    GETALLCUSTOMERS: 'https://localhost:7262/api/Customer',
    CREATECUSTOMER: 'https://localhost:7262/api/Customer',
    UPDATECUSTOMER: (id: number) => `https://localhost:7262/api/customer/${id}`,
    DELETECUSTOMER: (id: number) => `https://localhost:7262/api/customer/${id}`,
    SEARCH_NAME: (name: string) =>
      `https://localhost:7262/api/customer/search/name/${name}`,
    SEARCH_NUMBER: (number: number) =>
      `https://localhost:7262/api/customer/search/number/${number}`,
    GET_BY_ID: (id: number) => `https://localhost:7262/api/customer/${id}`,
  },
};

export default API;
