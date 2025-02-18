import { auth } from "@/auth";

async function page() {
  const session = await auth();
  console.log(session);
  return <>{session?.user?.name}</>;
}

export default page;
