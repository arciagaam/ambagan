import Group from "./_components/Group";

export default async function Page(props: { params: Promise<{ id: number }> }) {
  const params = await props.params;

  return (
    <div className="w-full h-full">
      <Group id={params.id} />
    </div>
  );
}
