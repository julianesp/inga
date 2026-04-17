import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);
const isSignInRoute = createRouteMatcher(["/admin/sign-in(.*)"]);

const ADMIN_EMAIL = "ipsingakamentsa@gmail.com";

export default clerkMiddleware(async (auth, req) => {
  if (!isAdminRoute(req)) return;

  const { userId, sessionClaims } = await auth();

  // Si no está autenticado, redirigir al login
  if (!userId) {
    if (isSignInRoute(req)) return;
    const signInUrl = new URL("/admin/sign-in", req.url);
    return NextResponse.redirect(signInUrl);
  }

  // Si está autenticado pero no es el admin autorizado, denegar acceso
  const email = (sessionClaims?.email as string) ?? "";
  if (!isSignInRoute(req) && email !== ADMIN_EMAIL) {
    const deniedUrl = new URL("/admin/sign-in?error=unauthorized", req.url);
    return NextResponse.redirect(deniedUrl);
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
