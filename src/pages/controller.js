import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"controller"} />
		<Helmet>
			<title>
				Xbox series X
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/4.png?v=2021-06-03T12:05:27.934Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/4.png?v=2021-06-03T12:05:27.934Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/4.png?v=2021-06-03T12:05:27.934Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/4.png?v=2021-06-03T12:05:27.934Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/4.png?v=2021-06-03T12:05:27.934Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/4.png?v=2021-06-03T12:05:27.934Z"} />
			<meta name={"msapplication-TileColor"} content={"#9BF00B"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});