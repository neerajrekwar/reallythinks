import NextAuth from "next-auth/next";
import { authOptions } from "./options";

const handler = NextAuth(authOpstions)

export { handler as GET, handler as POST}