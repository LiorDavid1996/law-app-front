export const fetchServices = async () => {
  return await fetch("https://law-server.onrender.com/api/services")
    .then((res) => res.json())
    .then((res) => console.log(res));
  // try {
  //   const res =  await axios.get("/services")
  //   const data = await res.json();
  //   console.log(data);
  //   return data;
  // } catch (error) {
  //   return console.log(error);
  // }
};
