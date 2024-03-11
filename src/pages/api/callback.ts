import type { APIRoute } from "astro";
import { client } from "../../lib/logto";

export const GET: APIRoute = async ({ url, cookies, redirect }) => {

  await client.handleSignInCallback(url.origin);

  if (!client.isAuthenticated) {
    return redirect('/500?message=CodeForSession-error')
  }

  return redirect("/dashboard");

};
