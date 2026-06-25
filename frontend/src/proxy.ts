import { NextRequest, NextResponse } from "next/server";
import { PUBLIC_ROUTES } from "./config";

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (req.nextUrl.searchParams.get("clear_session") === "true") {
    const url = new URL("/login", req.url);
    url.searchParams.delete("clear_session");
    const response = NextResponse.redirect(url);
    response.cookies.delete("access_token");
    response.cookies.delete("refresh_token");
    return response;
  }

  const authenticated =
    req.cookies.has("access_token") || req.cookies.has("refresh_token");

  const publicRoute = PUBLIC_ROUTES.some((route) =>
    route === "/" ? pathname === "/" : pathname.startsWith(route),
  );

  const isFirstTime = req.cookies.get("is_first_time")?.value === "true";

  // Unauthenticated user => landing page
  if (!authenticated) {
    return publicRoute
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/", req.url));
  }

  // Authenticated user who is first time => setup page
  if (isFirstTime) {
    return pathname === "/setup"
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/setup", req.url));
  }

  return publicRoute || pathname === "/setup"
    ? NextResponse.redirect(new URL("/dashboard", req.url))
    : NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};
