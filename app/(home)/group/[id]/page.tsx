export default async function Page(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;

  return (
    <div className="w-full h-full">
      <p>You are at: {params.id}</p>
    </div>
  )
}
