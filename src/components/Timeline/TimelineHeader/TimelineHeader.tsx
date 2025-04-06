interface TimelineHeaderProps {
	days: string[];
	zoom: number;
	setZoom: (zoom: number) => void;
}

const TimelineHeader = ({ days, zoom, setZoom }: TimelineHeaderProps) => {
	return (
		<div className="flex text-sm font-bold">
			<div className="flex space-x-5 mb-2 text-3xl px-3">
				<button className="cursor-pointer" onClick={() => setZoom(zoom - 10)}>-</button>
				<button className="cursor-pointer" onClick={() => setZoom(zoom + 10)}>+</button>
			</div>
			<div className="flex flex-1">
				{days.map((day) => (
					<div
						key={day}
						className="flex items-center justify-center flex-1 text-center border-l border-b"
						style={{ minWidth: `${zoom}px` }}
					>
						{day.slice(5)}
					</div>
				))}
			</div>
		</div>
	);
};

export default TimelineHeader;
