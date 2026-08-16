import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "GUID Generator",
  alternates: { canonical: `${SITE_CONFIG.domain}/tools/uuid-generator` },
};

export default function GuidRedirectPage() {
  // Server-side redirect to the canonical UUID generator page.
  redirect("/tools/uuid-generator");
}
