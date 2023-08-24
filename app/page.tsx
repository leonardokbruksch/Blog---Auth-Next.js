import { SingInButton } from "@/components/buttons";
import { getServerSession } from "next-auth";

export default async function Home() {

  const session = await getServerSession();

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
      <p>To get started, sign up for an account</p>
    </div>
  );
}