import { Metadata } from 'next';

type Props = {
  params: {
    id: string;
  };
};

async function GetUsers(id: string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: {
      revalidate: 60, //cache for 60 seconds
    },
  });
  return response.json();
}

export async function generateMetadata({ params: { id } }: Props)
: Promise<Metadata> {
  return {
    title: id,
  };
}

export default async function User({ params: { id } }: Props) {
  const user = await GetUsers(id);
  return (
    <div className="flex flex-col bg-slate-300 rounded-lg p-5">
      <h2>Name: {user.name}</h2>
      <p>User id: {id}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>City: {user.address.city}</p>
      <p>Website: {user.website}</p>
    </div>
  );
}
