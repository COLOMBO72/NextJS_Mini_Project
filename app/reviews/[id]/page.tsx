import { Metadata } from 'next';

type Props = {
  params: {
    id: string;
  };
};

async function getReviews(id:string) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  return response.json()
}

// export async function generateMetadata({ params: id }: Props): Promise<Metadata> {
//   return {
//     title: id,
//   }
// }

export default async function Review({params: {id}}:Props) {
  const review = await getReviews(id)
  return (
    <div>
      <h1>{review.title}</h1>
      <span>{review.body}</span>
    </div>
  )
}
