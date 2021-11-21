const h1Style = {
	color: 'red',
	top: '4px',
	margin: '10px 0',
	backgroundColor: 'blue',
	bottom: '5px'
};

export function MainPage() {
	return (
		<div>
			<h1 css={h1Style}>
				Hello from react opinionated starter main page
			</h1>
		</div>
	);
}
