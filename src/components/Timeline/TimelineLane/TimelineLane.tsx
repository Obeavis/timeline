import { Dispatch, SetStateAction, useMemo } from "react";
import TimelineItem from "@/components/Timeline/TimelineItem";

interface TimelineLaneProps {
	items: TimelineItemType[];
	days: string[];
	zoom: number;
	onUpdate: Dispatch<SetStateAction<TimelineItemType[]>>;
}

const TimelineLane = ({ items, days, zoom, onUpdate }: TimelineLaneProps) => {
	const itemColors = useMemo(() => {
		const bgColors = [
			"bg-red-500",
			"bg-blue-500",
			"bg-green-500",
			"bg-yellow-500",
			"bg-purple-500",
		];
		
		return items.map(
			() => bgColors[Math.floor(Math.random() * bgColors.length)]
		);
	}, [items]);

	return (
		<div className="flex relative h-24">
			{items.map((item, i) => (
				<TimelineItem
					key={item.id}
					item={item}
					days={days}
					zoom={zoom}
					onUpdate={onUpdate}
					bgColor={itemColors[i]}
				/>
			))}
		</div>
	);
};

export default TimelineLane;
