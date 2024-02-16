export default function LeoLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<div>Leo</div>
			<div>{children}</div>
		</div>
	);
}
