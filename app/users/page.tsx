import { prisma } from "@/lib/prisma";
import style from "./page.module.css";
import UserCard from "@/components/UserCard/UserCard";

export default async function Users() {

    throw new Error('Shit has gone south.');

    const users = await prisma.user.findMany();
  
    return (
      <div className={style.grid}>
        {users.map((user) => {
          return <UserCard key={user.id} {...user} />;
        })}
      </div>
    );
  }