import Timeline from "@/components/Timeline";
import timelineItems from "@/data/timelineItems";
import "./index.css";

function App() {
	return (
		<div className="app-container">
			<Timeline items={timelineItems} />
		</div>
	);
}

export default App;
