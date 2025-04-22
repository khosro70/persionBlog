export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-full max-w-md p-2">{children}</div>
    </div>
  );
}
