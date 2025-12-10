import prisma from "@/lib/prisma";
import ProfileForm from "./profileForm";

export default async function AccountPage() {
  const user = await prisma.user.findUnique({
    where: {
      id: 1,
    },
  });

  return (
    <div>
      <h3>حساب کاربری شما</h3>

      <ProfileForm user={user} />
    </div>
  );
}
