import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { SITE_NAME } from "@/lib/i18n/en";
import { SITE_CONFIG } from "@/lib/site-config";
import { ThemeProvider } from "@/lib/contexts/theme-context";
import { MobileNavProvider } from "@/lib/contexts/mobile-nav-context";
import { ClientLayoutWrapper } from "@/components/layout-client";
import { LoadingBar } from "@/components/loading-bar";
import MobileNav from "@/components/MobileNav";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-plex-mono",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Lets the browser paint its default canvas (and form controls, scrollbars)
  // in the OS-preferred scheme immediately, before any CSS or JS runs — this
  // is what actually prevents the white flash for the split second before
  // the theme-bootstrap script below executes.
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.domain),
  title: {
    default: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "developer tools",
    "online utilities",
    "json formatter",
    "base64 encoder",
    "uuid generator",
    "regex tester",
    "color converter",
    "privacy-first tools",
    "client-side tools",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: SITE_CONFIG.domain,
  },
};

const themeBootstrapScript = `
(function() {
  try {
    var storageKey = 'theme';
    var storedTheme = localStorage.getItem(storageKey);
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var resolvedTheme = storedTheme === 'light' || storedTheme === 'dark'
      ? storedTheme
      : (prefersDark ? 'dark' : 'light');

    var root = document.documentElement;
    root.classList.toggle('dark', resolvedTheme === 'dark');
    root.style.colorScheme = resolvedTheme;
  } catch (_) {
    // Keep default light theme if browser APIs are unavailable.
  }
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Raw inline script (not next/script) placed as the very first
            thing in <head> so the browser is forced to execute it before
            parsing continues into <body> — guaranteeing the correct theme
            class is applied before any content can paint. */}
        <script
          id="theme-bootstrap"
          dangerouslySetInnerHTML={{ __html: themeBootstrapScript }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} flex min-h-screen flex-col text-gray-900 dark:text-gray-50`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <MobileNavProvider>
            <MobileNav />
            <LoadingBar />
            <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
          </MobileNavProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
