import MainMenu from "./_component/MainMenu";

type Props = {
  children?: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="grid grid-cols-[240px_1fr] h-screen">
      <MainMenu />
      <div className="overflow-auto py-2 px-4">
        <p className="mb-4">به وبسایت واکنشگر خوش آمدید</p>

        {children}
      </div>
    </div>
  );
}
