import Logo from "../components/Logo";

const Header = () => {

  return (
    <header className="sticky top-0 flex h-20 w-full items-center justify-center bg-white px-6 py-6 sm:px-24 md:px-12 lg:px-40">
      <div className="block p-5">
        <Logo width={150} />
      </div>
    </header>
  );
};

export default Header;
