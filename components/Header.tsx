import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center bg-slate-400 p-5 justify-between">
      <div>
        <Link href="/">
          <img />
        </Link>
        <h2>NEXT APP</h2>
      </div>
      <li className="flex">
        <Link className="mr-5 hover:text-white duration-100" href="/aboutInfo">
          <ul>About us</ul>
        </Link>
        <Link className="mr-5 hover:text-white duration-100" href="/users">
          <ul>Users</ul>
        </Link>
        <Link className="mr-5 hover:text-white duration-100" href="/reviews">
          <ul>Reviews</ul>
        </Link>
        <Link className="mr-5 hover:text-white duration-100" href="/contacts">
          <ul>Contacts</ul>
        </Link>
      </li>
    </header>
  );
};

export default Header;
