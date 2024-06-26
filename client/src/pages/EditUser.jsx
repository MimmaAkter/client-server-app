import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios';

const EditUser = () => {
  //console.log(match);
  const {id} = useParams()
  const history = useNavigate();
  const [data, setData] = useState({
    name: "",
    image: "",
  });
  {/*useEffect(() => {
    fetch(`http://localhost:5000/user/`+match.useParams)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);*/}
  useEffect(()=>{
    axios.get('http://localhost:5000/user/'+id)
    .then((res) => res.json())
    .then((data) => setData(data))
    .catch(err=>console.log(err))
},[])

  const handleChange = (name) => (e) => {
    const value = name === "image" ? e.target.files[0] : e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      let formData = new FormData();
      formData.append("image", data.image);
      formData.append("name", data.name);

      const res = await fetch(`http://localhost:5000/user/`+match.useParams.id, {
        method: "PUT",
        body: formData,
      });
      if (res.ok) {
        setData({ name: "", image: "" });
        history('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ maxWidth: 500, margin: "auto" }}>
      <div className="mb-3">
        <input
          className="form-control"
          type="text"
          name="name"
          value={data.name}
          onChange={handleChange("name")}
        />
      </div>
      <div className="mb-3">
        <input
          className="form-control"
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange("image")}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-primary" onClick={handleSubmit}>
          Update
        </button>
      </div>
    </div>
  );
};

export default EditUser;
