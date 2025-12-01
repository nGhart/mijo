const Navigation = () => {
  return (
    <nav className="mx-auto max-w-6xl px-4 sm:px-6 md:py-2">
      <div className="relative flex items-center justify-between gap-3 rounded-full h-14 bg-white/90 px-3 shadow-lg shadow-black/3 backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,linear-gradient(white_0_0)]">
        <ul className="flex flex-1 items-center gap-3">
          <Link linkName="Features" />
          <Link linkName="Customers" />
          <Link linkName="Businesses" />
          <Link linkName="Partners" />
          <Link linkName="FAQs" />
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

const Link = ({ linkName, link }: { linkName: string; link?: string }) => {
  return (
    <li className="btn-sm py-3 h-full w-[70px] text-gray-800 hover:bg-gray-50 cursor-pointer ">
      {linkName}
    </li>
  );
};
