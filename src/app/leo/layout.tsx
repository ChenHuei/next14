export default function LeoLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<div style={{ width: '100%', backgroundColor: '#48a9c5' }}>Leo</div>
			<div>{children}</div>
		</div>
	);
}
