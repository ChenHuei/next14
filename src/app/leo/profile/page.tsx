export default function Profile() {
	return (
		<div>
			<>
				{[...Array(100)].map((i) => (
					<div key={i}>x</div>
				))}
			</>
			<div id="title">profile</div>
		</div>
	);
}
