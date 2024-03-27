import MetacriticLogo from "./assets/metacritic.png";
import SteamLogo from "./assets/steam.png";
import {
	CardContainer,
	CardDetails,
	CardImage,
	CardInfo,
	CardTitle,
	OriginalPrice,
	PriceContainer,
	SalePrice,
	SaleSavings,
} from "./styledComponents";
import { Deal } from "./vm";

interface Props {
	deal: Deal;
}

export const Card = (props: Props) => {
	const { deal } = props;

	function getMonthYearFromTimestamp(timestamp: number) {
		const date = new Date(timestamp * 1000);
		const month = date.getMonth();
		const year = date.getFullYear();
		const formattedMonth = month.toString().padStart(2, "0");
		return `${formattedMonth} / ${year}`;
	}

	return (
		<CardContainer>
			<CardImage
				src={"https://cdn.akamai.steamstatic.com/steam/apps/" + deal.steamAppID + "/header.jpg"}
				alt={deal.title}
				onClick={() =>
					window.open("https://store.steampowered.com/app/" + deal.steamAppID, "_blank")
				}
			/>
			<CardInfo>
				<CardTitle
					target="_blank"
					href={"https://store.steampowered.com/app/" + deal.steamAppID}>
					{deal.title}
				</CardTitle>
				<CardDetails>
					<img src={SteamLogo} width={25}></img>
					<a
						target="_blank"
						href={"https://store.steampowered.com/app/" + deal.steamAppID}>
						{deal.steamRatingText} - {deal.steamRatingPercent}% ({deal.steamRatingCount}
						)
					</a>
				</CardDetails>
				<CardDetails>
					<img src={MetacriticLogo} width={25}></img>
					<a target="_blank" href={"https://www.metacritic.com" + deal.metacriticLink}>
						{deal.metacriticScore}
					</a>
				</CardDetails>
				<CardDetails>
					<a>{getMonthYearFromTimestamp(deal.releaseDate)}</a>
				</CardDetails>

				<PriceContainer>
					{deal.salePrice && (
						<>
							<OriginalPrice>${deal.normalPrice}</OriginalPrice>
							<SaleSavings>
								{parseFloat(deal.savings).toFixed(0).toString()}%
							</SaleSavings>
							<SalePrice>${deal.salePrice}</SalePrice>
						</>
					)}
				</PriceContainer>
			</CardInfo>
		</CardContainer>
	);
};
