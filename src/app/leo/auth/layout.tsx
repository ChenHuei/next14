export default function AuthLayout({
	children,
	image,
	data,
}: Readonly<{
	children: React.ReactNode;
	image: React.ReactNode;
	data: React.ReactNode;
}>) {
	return (
		<div>
			<div style={{ width: '100%', backgroundColor: '#222' }}>Auth</div>
			{children}
			<div style={{ display: 'flex', gap: '20px' }}>
				{image}
				{data}
			</div>
		</div>
	);
}
