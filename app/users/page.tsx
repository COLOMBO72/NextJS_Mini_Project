import { Metadata } from 'next';
import Link from 'next/link';

type User = {
  name: string;
  id: string;
  email: string;
};

async function GetUsers() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users',{
    next: {
      revalidate: 60 //cache for 60 seconds
    }
  });
  return response.json();
}

export const metadata: Metadata = {
  title: 'Users | NEXT',
};

export default async function Users() {
  const users = await GetUsers();
  return (
    <div>
      <h3>Users page</h3>
      <li className="list-none">
        {users.map((user: User) => (
          <ul className="list-none flex" key={user.id}>
            <Link className="mr-3 hover:text-white duration-100" href={`/users/${user.id}`}>
              <h1>{user.name}</h1>
            </Link>
            <span className="mr-3">{user.email}</span>
            <p>{user.id}</p>
          </ul>
        ))}
      </li>
    </div>
  );
}
