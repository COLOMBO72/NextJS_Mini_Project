'use client';
export default function ErrorWrap({error}: {error: Error}){
  return <div>
    <h3>Something went wrong, try to update page</h3>
    <p>{error.message}</p>
  </div>
}