import React from "react";
import { Card } from "./card.component";
import "./styles.css";
import { Deal } from "./vm";

export default function App() {
	const [lowDeals, setLowDeals] = React.useState<Deal[]>([]);
	const [midDeals, setMidDeals] = React.useState<Deal[]>([]);
	const [highDeals, setHighDeals] = React.useState<Deal[]>([]);
	const [selectedCriteria, setSelectedCriteria] = React.useState("Reviews");

	React.useEffect(() => {
		getDeals(0, 15, setLowDeals);
		getDeals(15, 30, setMidDeals);
		getDeals(30, 50, setHighDeals);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedCriteria]);

	const getDeals = (
		lower: number,
		upper: number,
		setDeals: React.Dispatch<React.SetStateAction<Deal[]>>
	) => {
		fetch(
			`https://www.cheapshark.com/api/1.0/deals?storeID=1&pageSize=5&lowerPrice=${lower}&upperPrice=${upper}&sortBy=${selectedCriteria}&onSale=1&metacritic=1`
		)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((result) => {
				setDeals(result);
			})
			.catch((error) => console.log("error", error));
	};

	const sortCriteria = [
		{ value: "DealRating", label: "Deal Rating" },
		{ value: "Title", label: "Title" },
		{ value: "Savings", label: "Savings" },
		{ value: "Price", label: "Price" },
		{ value: "Metacritic", label: "Metacritic" },
		{ value: "Reviews", label: "Reviews" },
		{ value: "Release", label: "Release" },
		{ value: "Store", label: "Store" },
		{ value: "Recent", label: "Recent" },
	];

	const CriteriaSelect = (props: {
		value: string;
		onChange: React.Dispatch<React.SetStateAction<string>>;
	}) => {
		const { value, onChange } = props;

		return (
			<select value={value} onChange={(e) => onChange(e.target.value)}>
				{sortCriteria.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		);
	};

	return (
		<>
			<h1 style={{textAlign:"center"}}>Steam Deals</h1>

			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					gap: 16,
				}}>
				Sorted by <CriteriaSelect value={selectedCriteria} onChange={setSelectedCriteria} />
			</div>

			<h2>30$ or more</h2>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					gap: 16,
				}}>
				{highDeals.length > 0 &&
					highDeals.map((deal) => <Card deal={deal} key={deal.internalName} />)}
			</div>

			<h2>15$ - 30$</h2>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					gap: 16,
				}}>
				{midDeals.length > 0 &&
					midDeals.map((deal) => <Card deal={deal} key={deal.internalName} />)}
			</div>

			<h2>15$ or less</h2>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "center",
					gap: 16,
				}}>
				{lowDeals.length > 0 &&
					lowDeals.map((deal) => <Card deal={deal} key={deal.internalName} />)}
			</div>
		</>
	);
}
