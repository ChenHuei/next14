export default function LeoLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<div style={{ width: '100%', backgroundColor: '#0c3866' }}>Leo</div>
			<div>{children}</div>
		</div>
	);
}
