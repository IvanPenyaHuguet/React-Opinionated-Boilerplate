const h1Style = {
	color: 'red',
	margin: '10px 0',
	backgroundColor: 'blue'
};

export default function App(): JSX.Element {
	return (
		<div>
			<h1 css={h1Style}>Hello from react opinionated starter</h1>
		</div>
	);
}
