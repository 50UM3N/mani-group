import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Interface for our redirection data
interface Redirection {
  old: string;
  new: string;
}

// Cached redirects map to avoid fetching on every request
let redirectsMap: Record<string, string> = {};
let lastFetchTime = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

// Function to fetch redirections from WordPress API
async function fetchRedirections() {
  try {
    // Replace with your actual WordPress site URL
    const response = await fetch((process.env.NEXT_PUBLIC_BASE_API || "") + "/redirection", {
      next: { revalidate: 3600 }, // Revalidate cache every hour
    });

    if (!response.ok) {
      console.error("Failed to fetch redirections:", response.status, response.statusText);
      return null;
    }

    const redirections = await response.json();

    // Convert array of { old, new } objects to a key-value mapping
    const redirectsObject: Record<string, string> = {};
    redirections.forEach((item: Redirection) => {
      redirectsObject[item.old] = item.new;
    });

    return redirectsObject;
  } catch (error) {
    console.error("Error fetching redirections:", error);
    return null;
  }
}

// This function gets or refreshes the redirects map
async function getRedirectsMap() {
  const now = Date.now();

  // If we have cached data that's not expired, use it
  if (Object.keys(redirectsMap).length > 0 && now - lastFetchTime < CACHE_DURATION) {
    return redirectsMap;
  }

  // Otherwise fetch fresh data
  const freshRedirects = await fetchRedirections();
  if (freshRedirects) {
    redirectsMap = freshRedirects;
    lastFetchTime = now;
  }

  return redirectsMap;
}

// The middleware function
export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  // Get the latest redirects map
  const currentRedirectsMap = await getRedirectsMap();
  // First check exact path matches
  if (currentRedirectsMap[pathname]) {
    console.log("Exact match found for path:", pathname, "Redirecting to:", currentRedirectsMap[pathname]);
    return NextResponse.redirect(new URL(currentRedirectsMap[pathname], url.origin), 308);
  }

  // No redirect found, continue to the app
  return NextResponse.next();
}

// Configure which paths middleware will run on
export const config = {
  matcher: [
    // Specify patterns that should trigger your middleware
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
