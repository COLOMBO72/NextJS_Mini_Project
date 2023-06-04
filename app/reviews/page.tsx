import { Metadata } from 'next';
import Link from 'next/link';

type Review = {
  id: string;
  title: string;
  body: string;
};

async function getReviews() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=15');
  return response.json();
}

export const metadata: Metadata = {
  title: 'Reviews | NEXT',
};

export default async function Reviews() {
  const reviews = await getReviews();
  return (
    <div>
      <h3>Reviews page</h3>
      <li className='list-none'>
        {reviews.map((rev: Review) => (
          <ul className='m-5'>
            <Link className="hover:text-slate-500" href={`/reviews/${rev.id}`}>
              <h2>{rev.title}</h2>
            </Link>
            <p>ID: {rev.id}</p>
            <p>{rev.body}</p>
          </ul>
        ))}
      </li>
    </div>
  );
}
