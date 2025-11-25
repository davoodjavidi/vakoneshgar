type Props = {
  children?: React.ReactNode;
};

export default function LoggedOutLayout({ children }: Props) {
  return (
    <div className="flex flex-col gap-4 min-h-screen p-24 justify-center items-center">
      {children}
    </div>
  );
}
