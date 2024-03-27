const post = async (obj) => {
  try {
    await axios.post("", obj);
  } catch (error) {
    alert();
  }
};
