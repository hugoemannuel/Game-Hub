import DefaultPage from "./global/DefaultPage";
import RootLayoutClient from "./styles/RootLayoutClient";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <RootLayoutClient>
          <DefaultPage>{children}</DefaultPage>
        </RootLayoutClient>
      </body>
    </html>
  );
}
