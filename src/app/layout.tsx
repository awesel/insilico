// app/layout.tsx
import { AuthProvider } from "@/app/context/AuthContext";
import "./globals.css";

export const metadata = {
  title: "Insilico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}