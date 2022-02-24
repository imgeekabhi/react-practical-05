const initialState = [
  { id: 0, name: "Raman Sharma", email: "raman@gmail.com" },
  { id: 1, name: "Shruti Sharma", email: "shruti@gmail.com" },
  { id: 2, name: "Ritika Singh", email: "ritika@gmail.com" },
  { id: 3, name: "Rahul Ranjan", email: "rahul@gmail.com" },
  { id: 4, name: "Saurabh Gupta", email: "saurabh@gmail.com" },
  { id: 4, name: "Ranjan Sharma", email: "ranjan@gmail.com" },
];
const contactStore = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default contactStore;
