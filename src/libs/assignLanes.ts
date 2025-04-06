function assignLanes(items: TimelineItemType[]): TimelineItemType[][] {
	const sortedItems = [...items].sort(
		(a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()
	);

	const lanes: TimelineItemType[][] = [];

	for (const item of sortedItems) {
		let placed = false;
		for (const lane of lanes) {
			const last = lane[lane.length - 1];
			if (new Date(last.end) < new Date(item.start)) {
				lane.push(item);
				placed = true;
				break;
			}
		}
		if (!placed) {
			lanes.push([item]);
		}
	}

	return lanes;
}

export default assignLanes;
