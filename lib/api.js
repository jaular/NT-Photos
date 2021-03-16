import axios from "axios";

const API_ACCESS_KEY = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

export const getCuratedPhotos = async (url) => {
  const direction = `${url}&client_id=${API_ACCESS_KEY}`;
  const response = await axios.get(direction);
  const { data } = response;
  return data;
};

export const getQueryPhotos = async (url) => {
  const direction = `${url}&client_id=${API_ACCESS_KEY}`;
  const response = await axios.get(direction);
  const { results } = response.data;
  return results;
};

export const getPhotoById = async (id) => {
  const direction = `https://api.unsplash.com/photos/${id}?&client_id=${API_ACCESS_KEY}`;
  const response = await axios.get(direction);
  const { data } = response;
  return data;
};
