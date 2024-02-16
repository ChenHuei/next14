import Link from 'next/link';

export default function Hi({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div>
			<Link href="/leo/profile#title">LINK TO PROFILE TITLE</Link>
			<>
				{[...Array(100)].map((i) => (
					<div key={i}>x</div>
				))}
			</>
			{children}
		</div>
	);
}
