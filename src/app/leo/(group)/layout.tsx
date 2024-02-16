export default function GroupLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<div style={{ width: '100%', backgroundColor: '#49c0b6' }}>Group</div>
			<div>{children}</div>
		</div>
	);
}
