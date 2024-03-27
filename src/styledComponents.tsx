import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #222;
	border-radius: 8px;
	box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1);
	margin-bottom: 16px;
	width: 320px;
`;

export const CardImage = styled.img`
	width: 100%;
	object-fit: cover;
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	cursor: pointer;
`;

export const CardInfo = styled.div`
	padding: 16px;
`;

export const CardTitle = styled.a`
	font-size: 18px;
	margin-top: 8px;
	margin-bottom: 8px;
`;

export const CardDetails = styled.div`
	font-size: 12px;
	display: flex;
	align-items: center;
	color: #888;
	margin-top: 16px;
	margin-bottom: 16px;
	gap: 8px;
`;

export const PriceContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	align-items: flex-end;
	margin-top: 8px;
	gap: 8px;
`;

export const OriginalPrice = styled.span`
	text-decoration: line-through;
	color: grey;
`;

export const SalePrice = styled.span`
	font-weight: bold;
	color: green;
`;

export const SaleSavings = styled.span`
	color: grey;
	font-size: 12px;
`;
