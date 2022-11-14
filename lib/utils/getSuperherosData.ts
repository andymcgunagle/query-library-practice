export async function getSuperherosData(): Promise<Superhero[]> {
  const response = await fetch("http://localhost:4000/superheroes");

  if (!response.ok) throw new Error(`Failed to fetch superhero data ${response.status}.`);

  const data: Superhero[] = await response.json();

  if (!data || data.length === 0) throw new Error("No superhero data found.");

  return data;
};
