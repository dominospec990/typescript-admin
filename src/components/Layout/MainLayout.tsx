import Navbar from "./Navbar";

type MainLayoutProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <main className="content">
        <Navbar />

        {children}
      </main>
    </>
  );
};
