import useTimeline from "@/hooks/useTimeline";
import TimelineHeader from "./TimelineHeader";
import TimelineLane from "./TimelineLane";

interface TimelineProps {
	items: TimelineItemType[];
}

const Timeline = ({ items }: TimelineProps) => {
	const { lanes, days, zoom, setZoom, setItems } = useTimeline(items);
	return (
		<div>
			<TimelineHeader days={days} zoom={zoom} setZoom={setZoom} />
			<div className="space-y-2">
				{lanes.map((lane, i) => (
					<TimelineLane
						key={i}
						items={lane}
						days={days}
						zoom={zoom}
						onUpdate={setItems}
					/>
				))}
			</div>
		</div>
	);
};

export default Timeline;
