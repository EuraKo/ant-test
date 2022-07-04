import 'antd/dist/antd.less';
import { Button, DatePicker, version } from 'antd';
import './App.less';

function App() {
	return (
		<div className='App'>
			<h1>antd version: {version}</h1>
			<DatePicker />
			<Button type='primary' style={{ marginLeft: 8 }}>
				Primary Button
			</Button>
		</div>
	);
}

export default App;
