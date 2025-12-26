export async   function LawyersPage({ params }: { params: { need: string; city: string } }) {
  const { need, city } = await params;
  return (
    <div className="text-center">
      <p>Need: {need}</p>
      <p>City: {city}</p>
    </div>
  );
}
export default LawyersPage;
