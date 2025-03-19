import { getTodoItem } from "@/api/todo-api";
import TodoDetail from "@/components/todo/TodoDetail";
import { Button } from "@/components/ui/button";
import { 
  dehydrate, 
  HydrationBoundary, 
  QueryClient 
} from "@tanstack/react-query";
import Link from "next/link";

interface DetailPageProps {
  params: Promise<{ id: string }>;
}

const DetailPage = async ({ params }: DetailPageProps) => {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["todos, id"],
    queryFn: () => getTodoItem(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
    <section>
      <div className="container p-2 mx-auto space-y-4">
        <TodoDetail id={id} />

        <Link href="/">
          <Button className="w-full">돌아가기</Button>
        </Link>
      </div>
    </section>
    </HydrationBoundary>
  );
};

export default DetailPage;
