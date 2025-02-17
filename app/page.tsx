import { auth } from "@/auth";
import LeftSidebar from "@/components/LeftSidebar";
import Navbar from "@/components/Navbar";

async function page() {
  const session = await auth();
  console.log(session);
  return (
    <>
      <Navbar />
      <LeftSidebar />
      {session?.user?.name}
    </>
  );
}

export default page;
