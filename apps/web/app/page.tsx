
import { client } from "@repo/db/client";

export default async function Home() {
  // const user = await client.user.findFirst();

  return (
    <div>
      {/* {user?.username}
      {user?.password} */}
      hello this is next js app
    </div>
  );
}
