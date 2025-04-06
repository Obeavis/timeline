import { useState, useRef, Dispatch, SetStateAction } from "react";
import { differenceInDays, parseISO, format, addDays } from "date-fns";
import { cn } from "@/libs/utils";

interface TimelineItemProps {
	item: TimelineItemType;
	days: string[];
	zoom: number;
	onUpdate: Dispatch<SetStateAction<TimelineItemType[]>>;
	bgColor?: string;
}
const TimelineItem = ({
	item,
	days,
	zoom,
	onUpdate,
	bgColor,
}: TimelineItemProps) => {
	const start = days.indexOf(item.start) + 1;
	const length = differenceInDays(parseISO(item.end), parseISO(item.start)) + 1;
	const [name, setName] = useState(item.name);
	const [editing, setEditing] = useState(false);
	const dragging = useRef(false);
	const dragStartX = useRef(0);
	const originalStart = useRef(item.start);

	const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		dragging.current = true;
		dragStartX.current = e.clientX;
		originalStart.current = item.start;
		document.addEventListener("mousemove", handleMouseMove);
		document.addEventListener("mouseup", handleMouseUp);
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (!dragging.current) return;
		const deltaX = e.clientX - dragStartX.current;
		const deltaDays = Math.round(deltaX / zoom);
		const newStart = addDays(parseISO(originalStart.current), deltaDays);
		const duration = differenceInDays(parseISO(item.end), parseISO(item.start));
		const newEnd = addDays(newStart, duration);

		onUpdate((prev) =>
			prev.map((it) =>
				it.id === item.id
					? {
							...it,
							start: format(newStart, "yyyy-MM-dd"),
							end: format(newEnd, "yyyy-MM-dd"),
					  }
					: it
			)
		);
	};

	const handleMouseUp = () => {
		dragging.current = false;
		document.removeEventListener("mousemove", handleMouseMove);
		document.removeEventListener("mouseup", handleMouseUp);
	};

	return (
		<div
			className={cn(
				"absolute text-white rounded h-full p-5 m-2 cursor-pointer text-ellipsis text-nowrap overflow-hidden",
				bgColor
			)}
			style={{
				left: start * zoom - (zoom - 70) + 2,
				width: length * zoom - 4,
			}}
			onDoubleClick={() => setEditing(true)}
			onMouseDown={handleMouseDown}
		>
			{editing ? (
				<input
					value={name}
					onChange={(e) => setName(e.target.value)}
					onBlur={() => setEditing(false)}
					onKeyDown={(e) => e.key === "Enter" && setEditing(false)}
					autoFocus
				/>
			) : (
				<span title={name}>{name}</span>
			)}
		</div>
	);
};

export default TimelineItem;
