// src/app/page.tsx


import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import NonAuthHomeView from "@/sections/NonAuthHome";
import AuthHomeView from "@/sections/AuthHome";

export const metadata = { title: "Domov | ZoškaSnap" };

export default async function HomePage() {
  // Fetch session on the server
  const session = await getServerSession(authOptions);

  // Conditionally render authenticated or non-authenticated home view
  return session ? <AuthHomeView session={session} /> : <NonAuthHomeView />;
}

