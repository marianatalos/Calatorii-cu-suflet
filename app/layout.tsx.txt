import './globals.css';

export const metadata = {
  title: 'Călătorii cu suflet în Turcia',
  description: 'Descoperim împreună, creștem împreună!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro">
      <body>{children}</body>
    </html>
  );
}
