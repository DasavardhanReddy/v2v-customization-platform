import "./globals.css";

export const metadata = {
  title: "V2V Customization",
  description: "Vehicle Customization Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}