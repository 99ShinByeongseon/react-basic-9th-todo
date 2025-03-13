interface DetailIdPageProps {
    params: Promise<{ id: string }>;
}

const DetailIDPage = async ({ params }: DetailIdPageProps) => {
  const { id } = await params;
  console.log("🚀 ~ DetailIdPage ~ id:", id);

  return <div>DetailIDPage</div>;
};

export default DetailIDPage;
