import prisma from "@/lib/prisma";
import ProfileForm from "../../account/profileForm";

export default async function UserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  console.log(id);

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(id),
    },
  });

  return <ProfileForm user={user} />;
}
