import PageView from "@/components/page-view";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className='max-w-md m-auto py-8'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl'>
            Hi,
            <br />
            Using Nextjs app router and prisma to create page view counts
            component with ip validation for 24 hour.
          </h1>
          <h3 className='px-4 text-neutral-300'>
            Next.js, prisma, sqlite, tailwind css, typescript
          </h3>
          <h2 className='text-2xl'>
            Project by:{" "}
            <Link
              href={"https://reza-barati.ir/"}
              target='_blank'
              className='text-amber-400 underline'
            >
              Reza Barati
            </Link>
          </h2>
        </div>
      </div>
      <PageView />
    </main>
  );
}
