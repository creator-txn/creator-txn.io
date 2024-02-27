"use server"; // Use as server component

// Import the 'sql' object from the './postgres' module.
import { sql } from "@vercel/postgres";
// Import specific functions ('cache' and 'noStore') from 'next/cache'.
import {
  unstable_cache as cache,
  unstable_noStore as noStore,
} from "next/cache";

// Define an asynchronous function named 'getBlogViews'.
export async function getBlogViews() {
  // Check if the PostgreSQL connection URL is not defined in the environment variables.
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  // Invoke the 'noStore' function.
  noStore();

  // Use the 'sql' tagged template literal to query the number of views from the 'views' table.
  let data = await sql`
    SELECT count
    FROM views
  `;

  // Return the sum of counts from the retrieved views.
  // @ts-ignore
  return data.reduce((acc, curr) => acc + Number(curr.count), 0);
}

// Define an asynchronous function named 'getViewsCount'.
export async function getViewsCount(): Promise<{ slug: string; count: number }[]> {
  // Check if the PostgreSQL connection URL is not defined in the environment variables.
  if (!process.env.POSTGRES_URL) {
    return [];
  }

  // Invoke the 'noStore' function.
  noStore();

  // Query slugs and counts from the 'views' table.
  let data = await sql`
  SELECT slug, count
  FROM views
`;

// Return the result as an array of objects with 'slug' and 'count' properties.
return data.rows as { slug: string; count: number}[];
}