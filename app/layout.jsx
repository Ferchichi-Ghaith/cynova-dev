import "./globals.css";



export const metadata = {
  title: "Cynova - Web Development & Application Solutions",
  description:
    "Cynova specializes in web development, site restructuring, mobile and web app development, web pentesting, and OSINT services.",
  keywords: [
    "Cynova",
    "Web Development",
    "Application Development",
    "Mobile Application Development",
    "Web App Development",
    "Pentesting",
    "OSINT",
    "Website Restructuring",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Cynova" />
      </head>
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
