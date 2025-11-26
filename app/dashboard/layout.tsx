import MainMenu from "./_component/MainMenu";

type Props = {
  children?: React.ReactNode;
};

export default function DashboardLayout({ children }: Props) {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <MainMenu />
      <div className="overflow-auto py-2 px-4">
        <h3>خوش آمدی</h3>

        {children}
      </div>
    </div>
  );
}
