import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

export default function ImageUploadForm() {
  const { register, handleSubmit } = useForm();

  const handleImgSubmit = async (data) => {
    const imgUrls = [];

    const url = 'https://api.imgbb.com/1/upload?key=b6cd8a0df36da3243e927c420a1219b2';


    // Upload all the images and collect the image URLs in an array
    for (let i = 1; i <= 4; i++) {
      const formData = new FormData();
      const image = data[`image${i}`][0];
      formData.append("image", image);

      const response = await axios.post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const photoURL = response.data.data.url;
      imgUrls.push(photoURL);
    }

    console.log(imgUrls);
  };

  return (
    <form onSubmit={handleSubmit(handleImgSubmit)}>
      <div>
        <label>Image 1:</label>
        <input type="file" {...register("image1")} />
      </div>
      <div>
        <label>Image 2:</label>
        <input type="file" {...register("image2")} />
      </div>
      <div>
        <label>Image 3:</label>
        <input type="file" {...register("image3")} />
      </div>
      <div>
        <label>Image 4:</label>
        <input type="file" {...register("image4")} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}