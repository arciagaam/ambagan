export default async function Page(props: { params: Promise<{ contributionId: number }> }) {
  const params = await props.params;

  return (
    <div className="w-full h-full">
      <p>You're at id: {params.contributionId}</p>
    </div>
  );
}
