"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components";
import { Footer } from "@/containers";

export default function AdminLayoutGuard({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <>{children}</>;
  }

  return (
    <div className="watermark-container relative flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}
