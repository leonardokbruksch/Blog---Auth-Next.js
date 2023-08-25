import { prisma } from "@/lib/prisma";
import style from "./page.module.css";
import UserCard from "@/components/UserCard/UserCard";

export default async function Users() {
    const users = await prisma.user.findMany();
  
    return (
      <div className={style.grid}>
        {users.map((user) => {
          return <UserCard key={user.id} {...user} />;
        })}
      </div>
    );
  }