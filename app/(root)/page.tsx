import { auth } from "@/auth";
import Button from "@/components/Button";
import Filters from "@/components/Filters";
import ThreadCard from "@/components/ThreadCard";

async function page({
  searchParams,
}: {
  searchParams: Promise<{
    search: string | undefined;
    filter: string | undefined;
  }>;
}) {
  const session = await auth();
  const { search, filter } = await searchParams;
  console.log(session);
  return (
    <>
      <div className="flex items-center justify-between p-5">
        <div>
          <h1 className="text-3xl font-bold">All Threads</h1>
        </div>
        <div>
          <Button>Create new thread</Button>
        </div>
      </div>
      <Filters />
      <ThreadCard />
    </>
  );
}

export default page;
