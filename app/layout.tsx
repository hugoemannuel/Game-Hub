import DefaultPage from "./global/DefaultPage";
import StyledComponentsRegistry from "./lib/Registry/StyledComponentsRegistry";
import RootLayoutClient from "./styles/RootLayoutClient";

// app/layout.tsx
export const metadata = {
  title: "Game Hub",
  description: "Sua plataforma de jogos",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxNiIgY3k9IjE2IiByPSIxNCIgZmlsbD0iIzEzMTExOCIgc3Ryb2tlPSIjMDA3MGYzIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxjaXJjbGUgY3g9IjE2IiBjeT0iMTYiIHI9IjgiIGZpbGw9IiMxMzExMTgiIHN0cm9rZT0iIzAwNzBmMyIgc3Ryb2tlLXdpZHRoPSIxIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMS41IiBmaWxsPSIjMDA3MGYzIi8+PGNpcmNsZSBjeD0iMjAiIGN5PSIxMiIgcj0iMS41IiBmaWxsPSIjMDA3MGYzIi8+PGNpcmNsZSBjeD0iMTIiIGN5PSIyMCIgcj0iMS41IiBmaWxsPSIjMDA3MGYzIi8+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMS41IiBmaWxsPSIjMDA3MGYzIi8+PGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMi41IiBmaWxsPSIjMDA3MGYzIi8+PGxpbmUgeDE9IjYiIHkxPSI2IiB4Mj0iMTAiIHkyPSIxMCIgc3Ryb2tlPSIjMDA3MGYzIiBzdHJva2Utd2lkdGg9IjEuNSIvPjxsaW5lIHgxPSIyNiIgeTE9IjYiIHgyPSIyMiIgeTI9IjEwIiBzdHJva2U9IiMwMDcwZjMiIHN0cm9rZS13aWR0aD0iMS41Ii8+PGxpbmUgeDE9IjYiIHkxPSIyNiIgeDI9IjEwIiB5Mj0iMjIiIHN0cm9rZT0iIzAwNzBmMyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48bGluZSB4MT0iMjYiIHkxPSIyNiIgeDI9IjIyIiB5Mj0iMjIiIHN0cm9rZT0iIzAwNzBmMyIgc3Ryb2tlLXdpZHRoPSIxLjUiLz48L3N2Zz4=",
        type: "image/svg+xml",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <RootLayoutClient>
            <DefaultPage>{children}</DefaultPage>
          </RootLayoutClient>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
