export default function AboutLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<div>About</div>
			<div>{children}</div>
		</div>
	);
}
