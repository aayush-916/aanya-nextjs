import { Geist, Geist_Mono, Nunito_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
  display: "swap",
});

export const metadata = {
  title: "Aanya Solutions | Back Office & Web Development in USA"
  ,
  description:
    "Aanya Solutions offers expert back office services, data entry, inventory management, and IT solutions including web and software development.",
  keywords:
    "Aanya Solutions, Back Office Services USA, Inventory Management Company India, Data Entry Services, Report Creation Services, Graphic Designing, Website Development, Software Development, Website Optimization, Remote Back Office Support, IT Solutions USA, Web Design USA, App Development USA, Custom Software USA, Digital Marketing Services USA, Professional IT Company",
  authors: [{ name: "Aanya Solutions" }],
  icons: {
    icon: "/logo2.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${nunitoSans.variable}`}>
      <body
        className={`antialiased ${geistMono.variable} ${geistSans.variable} font-sans`}
        style={{ fontFamily: "var(--font-nunito-sans)" }}
      >
        {children}

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-66M52FLY0B"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-66M52FLY0B');
          `,
          }}
        />
      </body>
    </html>
  );
}
