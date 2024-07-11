import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHero = ({ queryKey }) => {
    const id = queryKey[1];
  return axios.get(`http://localhost:4000/superheroes/${id}`);
};

export const useSuperHeroData = (id, onSuccess, onError) => {
  return useQuery(["super-hero", id], fetchSuperHero, {
    // enabled: false,
    onSuccess,
    onError,
    // select: (data) => {
    //   return data.data.map((hero) => hero.name);
    // },
  });
};
