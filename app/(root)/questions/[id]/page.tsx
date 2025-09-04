export default async function page({ params }: { params: { id: string } }) {
  return <div>{params.id}</div>;
}
