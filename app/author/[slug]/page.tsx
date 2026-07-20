import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getAuthor, getAllAuthors } from "@/lib/data/authors";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const authors = getAllAuthors();
  return authors.map((author) => ({
    slug: author.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthor(slug);

  if (!author) {
    return {
      title: "Author Not Found",
    };
  }

  return {
    title: `${author.name} - Author`,
    description: `${author.bio} Profile page for ${author.name}.`,
  };
}

export default async function AuthorPage({ params }: Props) {
  const { slug } = await params;
  const author = getAuthor(slug);

  if (!author) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <div className="rounded-xl border border-[var(--line)] bg-[var(--card)] p-8 shadow-[0_1px_0_var(--line-soft)]">
        <div className="mb-8 flex flex-col items-center text-center">
        <div className="mb-6 h-32 w-32 overflow-hidden rounded-full">
          <Image
            src={author.avatar}
            alt={author.name}
            width={128}
            height={128}
            className="h-full w-full object-cover"
          />
        </div>
        <h1 className="mb-2 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
          {author.name}
        </h1>
        <p className="mb-4 text-xl text-gray-600 dark:text-gray-400">
          {author.role}
        </p>
        <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-300">
          {author.bio}
        </p>
        </div>

        <section className="rounded-lg border border-[var(--line)] bg-[var(--paper)] p-6">
          <h2 className="mb-3 text-xl font-semibold text-gray-900 dark:text-gray-50">
            About
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            This author profile is kept for team and contributor information.
            The public blog section has been removed from the site.
          </p>
        </section>
      </div>
    </div>
  );
}
