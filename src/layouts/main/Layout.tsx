import Header from "./Header";

type LayoutProps = {
  children: React.ReactNode;
};

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="bg-primary h-full lg:h-screen xl:h-screen text-primary-content">
      <Header />
      <div className="w-full flex justify-center">
        <div className="flex w-full lg:max-w-2xl xl:max-w-2xl mx-3 lg:mx-auto xl:mx-auto py-3 flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
