const toyDetailsData = async ({ params }) => {
  const fetchData = await fetch(
    `https://robotopia-server.vercel.app/toy-details/${params.id}`
  );
  const detailsData = await fetchData.json();

  return detailsData;
};

export { toyDetailsData };
