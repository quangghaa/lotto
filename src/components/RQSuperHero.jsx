import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

export const RQSuperHero = () => {
    const { heroId } = useParams();

    const onSuccess = (data) => {
        console.log("sucess ", data);
      };
      const onError = (error) => {
        console.log("error ", error);
      };
    
      const { isLoading, data, isError, error } = useSuperHeroData(heroId, onSuccess, onError);
    
      if (isLoading) {
        return <h2>Loading...</h2>;
      }
    
      if (isError) {
        return <h2>{error.message}</h2>;
      }

  return (
    <div>{data.data.name} - {data.data.alterEgo}</div>
  )
}
