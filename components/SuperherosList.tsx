import { useGetSuperherosData } from "../lib/hooks/useGetSuperherosData";
import { useGetSuperherosQuery } from "../lib/services/app";

export default function SuperherosList() {
  // const {
  //   data,
  //   error,
  //   isError,
  //   isLoading,
  // } = useGetSuperherosData();

  const {
    data,
    error,
    isError,
    isLoading,
  } = useGetSuperherosQuery(undefined, {
    // pollingInterval: 5000, // 5 seconds
    // selectFromResult: (result) => ({
    //   ...result,
    //   data: result.data?.aSpecificPropertyIWant,
    // }),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  };

  if (isError) {
    return <div>{(error as Error)?.message}</div>;
  };

  return (
    <div>
      {data?.map((superhero) => (
        <div key={superhero.id}>
          <h2>{superhero.name}</h2>
          <p>Also know as: {superhero.alterEgo}</p>
        </div>
      ))}
    </div>
  );
};