import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/useSuperHeroesData";

export const RQSuperheroesPage = () => {
  const onSuccess = (data) => {
    console.log("sucess ", data);
  };
  const onError = (error) => {
    console.log("error ", error);
  };

  const { isLoading, data, isError, error, refetch } = useSuperHeroesData(onSuccess, onError);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const fetchData = () => {
    refetch();
  };

  return (
    <>
      <h2>RQSuperheroes.page</h2>
      {data?.data.map((item) => (
        <div key={item.id}>
          <Link to={`/rq-super-heroes/${item.id}`}>{item.name}</Link>
        </div>
      ))}
      {/* {data.map((heroName) => (
        <div key={heroName}>{heroName}</div>
      ))} */}
      <button onClick={fetchData}>Fetch Data</button>
    </>
  );
};
