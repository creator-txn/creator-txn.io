"use server"; // Use as server component

// Import the 'sql' object from the './postgres' module.
import { sql } from "@vercel/postgres";
// Import specific functions and objects from 'next/cache'.
import { revalidatePath, unstable_noStore as noStore } from "next/cache";

// Define an asynchronous function named 'increment' that takes a 'slug' parameter of type string.
export async function increment(slug: string) {
  // Invoke the 'noStore' function.
  noStore();
    
  // Use the 'sql' tagged template literal to perform an SQL insertion or update.
  await sql`
    INSERT INTO views (slug, count)
    VALUES (${slug}, 1)
    ON CONFLICT (slug)
    DO UPDATE SET count = views.count + 1
  `;
}