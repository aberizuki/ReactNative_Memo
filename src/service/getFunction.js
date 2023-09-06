import axios from "axios";

const getList = () => {
  axios
    .get(`http://192.168.100.22:5000/api/v1/todos`)
    .then((res) => {
      setDataList(res.data.data);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

useEffect(() => {
  getList();
}, []);
