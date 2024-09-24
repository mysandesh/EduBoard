import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Education Board Management Dashboard",
  description: "Next.js School Management System",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen flex">
      {/*LEFT */}
      <div className="">L</div>
      {/*RIGHT */}
      <div className="">R</div>
    </div>
  );
}
