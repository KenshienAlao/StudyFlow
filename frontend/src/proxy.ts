import { NextRequest, NextResponse as Res } from "next/server";
import { PUBLIC_ROUTES } from "./config";

export function proxy(req: NextRequest) {
  const { nextUrl: url, cookies: c } = req;
  const p = url.pathname;

  if (url.searchParams.get("clear_session") === "true") {
    const res = Res.redirect(new URL("/", url));
    res.cookies.delete("access_token");
    res.cookies.delete("refresh_token");
    return res;
  }

  const auth = c.has("access_token") || c.has("refresh_token");
  const pub = PUBLIC_ROUTES.some((r) =>
    r === "/" ? p === "/" : p.startsWith(r),
  );

  if (!auth) return pub ? Res.next() : Res.redirect(new URL("/", url));
  if (c.get("is_first_time")?.value === "true")
    return p === "/setup" ? Res.next() : Res.redirect(new URL("/setup", url));
  if (pub || p === "/setup") return Res.redirect(new URL("/dashboard", url));

  return Res.next();
}

export const config = { matcher: ["/((?!api|_next|favicon.ico).*)"] };
