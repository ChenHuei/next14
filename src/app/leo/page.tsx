'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Leo() {
	const router = useRouter();
	return (
		<div>
			<Link href="/leo/profile#title">LINK TO PROFILE TITLE</Link>
			<div onClick={() => router.push('/leo/me')}>REDIRECT TO Me</div>
			<Link href="/leo/auth">LINK TO PROFILE AUTH</Link>
		</div>
	);
}
