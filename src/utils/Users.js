 export const users = [
    { name: 'Patrick', email: 'Patrick@gmail..com', password: 'password123' },
    { name: 'Ribeiro', email: 'Ribeiro@gmail.com', password: 'password123' },
  ];
  
  export const setUsers = (users) => window.localStorage.setItem('users', users)

