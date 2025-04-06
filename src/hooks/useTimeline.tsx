import { useMemo, useState } from "react";
import { format, eachDayOfInterval, parseISO } from "date-fns";
import assignLanes from "@/libs/assignLanes";

const useTimeline = (initialItems: TimelineItemType[]) => {
	const [zoom, setZoom] = useState(70);
	const [items, setItems] = useState(initialItems);

	const allDays = useMemo(() => {
		const dates = items.map((i) => [parseISO(i.start), parseISO(i.end)]);
		const min = new Date(Math.min(...dates.map(([s]) => s.getTime())));
		const max = new Date(Math.max(...dates.map(([, e]) => e.getTime())));

		return eachDayOfInterval({ start: min, end: max }).map((d) =>
			format(d, "yyyy-MM-dd")
		);
	}, [items]);

	const lanes = useMemo(() => assignLanes(items), [items]);

	return { lanes, days: allDays, zoom, setZoom, setItems };
};

export default useTimeline;
