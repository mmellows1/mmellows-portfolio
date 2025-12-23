import { PortableText as PortableTextReact } from "@portabletext/react";
import { PortableText, SanityImage } from "@/types/sanity";
import { getImageUrl } from "@/utils/api";
import Image from "next/image";

interface PortableTextRendererProps {
  content: PortableText;
}

export default function PortableTextRenderer({
  content,
}: PortableTextRendererProps) {
  const components: any = {
    types: {
      image: ({ value }: { value: SanityImage }) => (
        <div className="my-4">
          <Image
            src={getImageUrl(value, 800, 600)}
            alt={value.alt || ""}
            width={800}
            height={600}
            className="rounded-lg"
          />
          {value.caption && (
            <p className="text-sm text-gray-600 mt-2 italic">{value.caption}</p>
          )}
        </div>
      ),
    },
    block: {
      h1: ({ children }: { children: React.ReactNode }) => (
        <h1 className="text-4xl font-bold mb-4">{children}</h1>
      ),
      h2: ({ children }: { children: React.ReactNode }) => (
        <h2 className="text-3xl font-bold mb-3">{children}</h2>
      ),
      h3: ({ children }: { children: React.ReactNode }) => (
        <h3 className="text-2xl font-bold mb-2">{children}</h3>
      ),
      h4: ({ children }: { children: React.ReactNode }) => (
        <h4 className="text-xl font-bold mb-2">{children}</h4>
      ),
      normal: ({ children }: { children: React.ReactNode }) => (
        <p className="mb-4 leading-relaxed">{children}</p>
      ),
      blockquote: ({ children }: { children: React.ReactNode }) => (
        <blockquote className="border-l-4 border-primary pl-4 italic my-4">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: { children: React.ReactNode }) => (
        <ul className="list-disc pl-6 mb-4">{children}</ul>
      ),
      number: ({ children }: { children: React.ReactNode }) => (
        <ol className="list-decimal pl-6 mb-4">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }: { children: React.ReactNode }) => (
        <li className="mb-2">{children}</li>
      ),
      number: ({ children }: { children: React.ReactNode }) => (
        <li className="mb-2">{children}</li>
      ),
    },
    marks: {
      strong: ({ children }: { children: React.ReactNode }) => (
        <strong className="font-bold">{children}</strong>
      ),
      em: ({ children }: { children: React.ReactNode }) => (
        <em className="italic">{children}</em>
      ),
      code: ({ children }: { children: React.ReactNode }) => (
        <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
          {children}
        </code>
      ),
      link: ({
        children,
        value,
      }: {
        children: React.ReactNode;
        value: { href: string };
      }) => (
        <a
          href={value.href}
          className="hover:text-primary-dark hover:underline underline-offset-4 text-teal-300 font-bold"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <div className="prose max-w-none">
      <PortableTextReact value={content} components={components} />
    </div>
  );
}
