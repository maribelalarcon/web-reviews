import { IoAddCircleOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Home() {
  const [review, setReview] = useState("./AddReview");
  useEffect(() => {
    try {
      const response = axios
        .get(`${import.meta.env.VITE_API_URL}/reviews`)
        .then((response) => {
          setReview(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  });

  return;
}

export default Home;
