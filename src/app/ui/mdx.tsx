/* REACT | Libraries */
import * as React from 'react';
/* NEXT FEATURE | LINK + IMAGE */
import Link from 'next/link';
import Image from 'next/image';
/* CONTENTLAYER | MDX Component */
import { useMDXComponent } from 'next-contentlayer/hooks';

// Define a custom link component to handle different types of links
// @ts-ignore
const CustomLink = (props) => {
  const href = props.href;
  // If the link starts with '/', use Next.js Link for internal navigation
  if (href.startsWith('/')) { 
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }
  // If the link starts with '#', it is an anchor link, so use a regular anchor tag
  if (href.startsWith('#')) {
    return <a {...props} />;
  }
  // For all other links, open in a new tab with security measures
  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

// Define a custom image component that adds a 'rounded' class to the image
// @ts-ignore
function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded" {...props} />;
}

// Define an object that maps component names in the MDX file to their respective React components
const components = {
  // Use custom RoundedImage component for MDX 'image' components
  image: RoundedImage,
  // Use custom CustomLink component for MDX 'a' (link) components
  a: CustomLink,
};

// Define the props interface for the Mdx component
interface MdxProps {
  code: string;
}

// Define the Mdx component that renders MDX content using the provided code
export function Mdx({ code }: MdxProps) {
  // Use the useMDXComponent hook to convert MDX code into a React component
  const Component = useMDXComponent(code);

  // Render the MDX content within an article tag, passing the custom components object
  return (
    <article>
      <Component components={{ ...components }} />
    </article>
  );
}