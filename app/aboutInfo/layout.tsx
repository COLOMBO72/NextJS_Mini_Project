import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "About us | NEXT"
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex justify-center items-center flex-col'>
      <Link href="/aboutInfo">
        <h1>About us</h1>
      </Link>
      <Link href="/aboutInfo/team">
        Team
      </Link>
      <Link href="/aboutInfo/congratulations">
        Congratulations
      </Link>
      {children}
    </div>
  );
}
