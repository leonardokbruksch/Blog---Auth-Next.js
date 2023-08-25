import { SingInButton } from "@/components/buttons";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {

  const session = await getServerSession(authOptions);

  if (!session) {
    return (
      <>
        <p>You must be signed In.</p>
        <SingInButton />
      </>
    )
  }

  return (
    <div>
      <h1>Welcome to NextSpace!</h1>
      <p>
        A next-gen social media app to connect with frens inspired by MySpace
      </p>
    </div>
  );
}