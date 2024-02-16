export default function GroupLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<div style={{ width: '100%', backgroundColor: '#da1884' }}>Group</div>
			<div>{children}</div>
		</div>
	);
}
