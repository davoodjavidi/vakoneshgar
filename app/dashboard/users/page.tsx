import { getUsers } from "@/app/_lib/getUsers";
import Link from "next/link";

export default async function UsersPage() {
  const users = await getUsers();
  return (
    <div>
      <h3>کاربران</h3>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/dashboard/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
