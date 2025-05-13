import { auth } from "@/auth";
import ButtonLink from "@/components/ButtonLink";
import Filters from "@/components/Filters";
import ThreadCard from "@/components/ThreadCard";
import { api } from "@/lib/api";
import fetchHandler from "@/lib/fetchHandler";
import ROUTES from "@/routes";

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
  const { data } = await api.users.getByEmail("hmt123@gmail.com");
  console.log(data);
  console.log(session);
  return (
    <>
      <div className="flex items-center justify-between p-5">
        <div>
          <h1 className="text-3xl font-bold">All Threads</h1>
        </div>
        <div>
          <ButtonLink href={ROUTES.QUESTION_CREATE}>
            Create new thread
          </ButtonLink>
        </div>
      </div>
      <Filters />
      <ThreadCard />
    </>
  );
}

export default page;
