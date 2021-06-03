import React from "react";
import theme from "theme";
import { Theme, Link, Image, Section, Text, Span } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, StackItem, Menu, Stack, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
		<Section padding="50px 0 50px 0" background="#0C0C0C" md-padding="20px 0 20px 0">
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="33.333%" display="flex" md-width="50%" lg-width="50%">
					<Override slot="StackItemContent" align-items="center" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/RW8TP2%201.svg?v=2020-11-26T16:02:44.683Z" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="33.333%" display="flex" md-width="50%" lg-width="50%">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Menu display="flex" md-display="none">
						<Override slot="link-index" href="#browse">
							Browse
						</Override>
						<Override slot="item-404" display="none" />
						<Override
							slot="link"
							text-decoration-line="initial"
							text-transform="uppercase"
							color="#ffffff"
							font="--lead"
							hover-color="rgba(155, 240, 11, 1)"
						/>
						<Override slot="link-active" color="#ffffff" />
						<Override slot="link-inside" href="#inside" />
						<Override slot="link-controller" href="#control" />
						<Override slot="link-games" href="#games" />
					</Menu>
					<Components.MobileSide
						menuPosition="left"
						breakpoint="md"
						animFunction="linear"
						animDuration=".5s"
						display="none"
						lg-display="none"
						md-display="flex"
						md-justify-content="flex-end"
					>
						<Override
							slot="Content"
							md-justify-content="flex-start"
							md-width="100%"
							md-align-items="flex-start"
							md-background="#0C0C0C"
							md-padding="38px 15px 24px 15px"
						/>
						<Override slot="Button Text" md-display="none" />
						<Override slot="Button Icon" md-background="#95ff07" md-padding="5px 5px 5px 5px" md-color="#000000" />
						<Override
							slot="Cross"
							md-background="#9BF00B"
							md-padding="5px 5px 5px 5px"
							md-color="#000000"
							md-margin="30px 0px 0px 0px"
						/>
						<Image
							width="64px"
							height="64px"
							md-width="144px"
							md-height="44px"
							md-padding="7px 0px 0px 0px"
						/>
						<Menu md-margin="100px 0px 0px 0px" md-width="100%" md-padding="6px 0px 6px 0px">
							<Override slot="item-404" md-display="none" />
							<Override slot="link-index">
								BROWSE
							</Override>
							<Override
								slot="link"
								md-text-decoration-line="initial"
								md-font="normal 600 39px/47px --fontFamily-googleInter"
								md-text-align="center"
								md-color="#ffffff"
								md-margin="0px 0px 36px 0px"
							/>
							<Override slot="item" md-text-align="center" md-margin="0px 0px 26px 0px" />
						</Menu>
					</Components.MobileSide>
					{"            "}
				</StackItem>
				<StackItem width="33.333%" display="flex" md-display="none" lg-display="none">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" />
					<Link
						href="#"
						font="normal 700 15px/18px --fontFamily-googleInter"
						color="rgba(10, 10, 10, 1)"
						padding="21px 30px 21px 30px"
						background="#9BF00B"
						text-decoration-line="initial"
						text-transform="uppercase"
						hover-box-shadow="0px 0px 20px rgba(155, 240, 11, 0.5)"
					>
						Order console
					</Link>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			id="browse"
			padding="300px 0 400px 0"
			background="url(https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/xbox.png?v=2020-11-26T16:08:42.878Z) 85% 50% no-repeat,#0C0C0C"
			lg-padding="200px 0 330px 0"
			sm-background="#0C0C0C url(https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/xbox.png?v=2020-11-26T16:08:42.878Z) center center/contain no-repeat"
			sm-padding="100px 0 100px 0"
		>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" lg-align-items="center" />
					<Text
						font="normal 700 21px/25px --fontFamily-googleInter"
						letter-spacing="3%"
						color="rgba(155, 240, 11, 1)"
						text-transform="uppercase"
						margin="0px 0px 24px 0px"
					>
						completely new
					</Text>
					<Text
						font="normal 700 160px/155.27px --fontFamily-googleInter"
						letter-spacing="-0.02em"
						color="rgba(255, 255, 255, 1)"
						text-transform="uppercase"
						margin="24px 0px 24px 0px"
						lg-text-align="center"
						lg-font="normal 700 120px/128px --fontFamily-googleInter"
						sm-font="normal 700 80px/72px --fontFamily-googleInter"
					>
						Xbox Series X
					</Text>
					<Text font="normal 600 23px/34px --fontFamily-googleInter" letter-spacing="-3%" color="rgba(129, 129, 129, 1)" lg-display="none">
						Experience 12 teraflops of graphics processing{" "}
						<br />
						power and 4K resolution at up to 120 fps
						<br />
						second with Xbox Series X. *
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="50px 0 50px 0" background="#0C0C0C">
			<Override slot="SectionContent" max-width="1220px" />
			<Stack margin="0px 0px 0px 0px" lg-padding="0px 0px 0px 80px" sm-padding="0px 20px 0px 20px">
				{"    "}
				<StackItem width="25%" display="flex" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Image src="https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/4k.svg?v=2020-11-26T16:10:44.780Z" object-position="0%" width="150px" />
					<Text font="normal 600 23px/34px --fontFamily-googleInter" letter-spacing="-3%" color="rgba(129, 129, 129, 1)" margin="16px 0px 0px 0px">
						True gaming
					</Text>
					{"            "}
				</StackItem>
				<StackItem width="25%" display="flex" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Image src="https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/hdr.svg?v=2020-11-26T16:11:37.812Z" object-position="0%" width="150px" />
					<Text font="normal 600 23px/34px --fontFamily-googleInter" letter-spacing="-3%" color="rgba(129, 129, 129, 1)" margin="16px 0px 0px 0px">
						High Dynamic Range
					</Text>
					{"            "}
				</StackItem>
				<StackItem width="25%" display="flex" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Image src="https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/Group%20232.svg?v=2020-11-26T16:13:49.363Z" object-position="0%" margin="20px 0px 6px 0px" width="150px" />
					<Text font="normal 600 23px/34px --fontFamily-googleInter" letter-spacing="-3%" color="rgba(129, 129, 129, 1)" margin="16px 0px 0px 0px">
						Frame per second
					</Text>
					{"            "}
				</StackItem>
				<StackItem width="25%" display="flex" lg-width="50%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Image src="https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/v.svg?v=2020-11-26T16:11:53.396Z" object-position="0%" width="150px" />
					<Text font="normal 600 23px/34px --fontFamily-googleInter" letter-spacing="-3%" color="rgba(129, 129, 129, 1)" margin="16px 0px 0px 0px">
						Velocity Architecture
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section padding="50px 0 50px 0" background="#0C0C0C" sm-padding="50px 0 20px 0">
			<Override slot="SectionContent" max-width="1220px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="100%" display="flex" align-items="center" justify-content="center">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
					<Text
						font="normal 700 91px/104px --fontFamily-googleInter"
						letter-spacing="-0.02em"
						color="#ffffff"
						margin="16px 0px 100px 0px"
						text-align="center"
						lg-font="normal 700 72px/82px --fontFamily-googleInter"
						lg-margin="16px 0px 40px 0px"
						sm-font="normal 700 49px/56px --fontFamily-googleInter"
					>
						The fastest and the most powerful console xbox for the{" "}
						<Span color="rgba(155, 240, 11, 1)">
							entire history
						</Span>
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/7cc62d15-d4d3-4274-b293-88e4c9571c18%201.png?v=2020-11-26T16:17:46.344Z) 0% 0% /auto repeat scroll padding-box" lg-background="linear-gradient(180deg,--color-greyD1 0%,transparent 100%) 0 0 no-repeat,rgba(0, 0, 0, 0.93) url(https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/7cc62d15-d4d3-4274-b293-88e4c9571c18%201.png?v=2020-11-26T16:17:46.344Z) 0% 0% /auto repeat scroll padding-box" sm-background="linear-gradient(180deg,rgba(14, 19, 23, 0.63) 74.8%,rgba(14, 19, 23, 0.63) 100%) 0 0 no-repeat,rgba(0, 0, 0, 0.93) url(https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/7cc62d15-d4d3-4274-b293-88e4c9571c18%201.png?v=2020-11-26T16:17:46.344Z) 20% 0%/auto repeat scroll padding-box">
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					align-items="center"
					justify-content="center"
					lg-display="none"
				>
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
					{"            "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					align-items="center"
					justify-content="center"
					lg-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						margin="0px 70px 0px 0px"
						lg-margin="0px 0px 0px 0px"
						lg-padding="0px 70px 0px 110px"
						sm-padding="0px 50px 0px 50px"
					/>
					<Text
						font="normal 700 72px/100% --fontFamily-googleInter"
						letter-spacing="-0.03em"
						color="#ffffff"
						margin="180px 0px 0px 0px"
						sm-font="normal 700 48px/100% --fontFamily-googleInter"
						sm-margin="60px 0px 0px 0px"
					>
						Power you
						<br />
						dreams
					</Text>
					<Text
						font="normal 600 23px/34px --fontFamily-googleInter"
						letter-spacing="-3%"
						color="rgba(129, 129, 129, 1)"
						margin="16px 0px 30px 0px"
						text-align="left"
					>
						From future adventures, to current obsessions, to classic titles, thousands of favorites across four generations of Xbox look and play best on Xbox Series X.
					</Text>
					<Text
						font="normal 700 21px/25px --fontFamily-googleInter"
						letter-spacing="3%"
						color="rgba(155, 240, 11, 1)"
						text-transform="uppercase"
						margin="0px 0px 180px 0px"
						cursor="pointer"
						hover-text-shadow="0px 0px 20px rgba(155, 240, 11, 0.5)"
						sm-margin="0px 0px 60px 0px"
						md-margin="0px 0px 70px 0px"
					>
						learn more
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section id="games" padding="70px 0 50px 0" background="#0C0C0C" sm-padding="20px 0 50px 0">
			<Override slot="SectionContent" max-width="1220px" />
			<Stack margin="0px 0px 0px 0px" gap="0px" background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/bg2.png?v=2020-11-26T16:34:39.971Z) 0% 0% /auto repeat scroll padding-box">
				{"    "}
				<StackItem
					width="60%"
					display="flex"
					align-items="center"
					justify-content="center"
					lg-width="100%"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						padding="0px 110px 0px 144px"
						sm-padding="0px 40px 0px 40px"
					/>
					<Text
						font="normal 700 72px/79px --fontFamily-googleInter"
						letter-spacing="-0.02em"
						color="#ffffff"
						margin="196px 0px 30px 0px"
						sm-font="normal 700 48px/48px --fontFamily-googleInter"
						sm-margin="120px 0px 30px 0px"
					>
						Optimized for series X-S
					</Text>
					<Text
						font="normal 600 23px/34px --fontFamily-googleInter"
						letter-spacing="-3%"
						color="rgba(129, 129, 129, 1)"
						margin="0px 0px 196px 0px"
						text-align="left"
						sm-margin="0px 0px 120px 0px"
					>
						From future adventures, to current obsessions, to classic titles, thousands of favorites across four generations of Xbox look and play best on Xbox Series X.
					</Text>
					{"            "}
				</StackItem>
				<StackItem
					width="40%"
					display="flex"
					align-items="center"
					justify-content="center"
					lg-display="none"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="flex-start"
						justify-content="center"
						position="relative"
					/>
					<Image src="https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/Group%20236.png?v=2020-11-26T16:24:50.931Z" position="relative" z-index="2" />
					<Image
						src="https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/Frame%20237.png?v=2020-11-26T16:24:50.948Z"
						position="absolute"
						top="auto"
						left="auto"
						right="0px"
						bottom="0px"
					/>
					<Image
						src="https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/Group%20237.png?v=2020-11-26T16:25:54.802Z"
						position="absolute"
						top="70px"
						left="auto"
						right="0px"
						bottom="auto"
					/>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section id="control" padding="60px 0 70px 0" background="#0C0C0C">
			<Override slot="SectionContent" max-width="1220px" />
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="100%" display="flex" align-items="center" justify-content="center">
					<Override slot="StackItemContent" flex-direction="column" align-items="center" justify-content="center" />
					<Text
						font="normal 700 91px/104px --fontFamily-googleInter"
						letter-spacing="-0.02em"
						color="#ffffff"
						margin="0px 0px 0px 0px"
						text-align="center"
						lg-font="normal 700 72px/82px --fontFamily-googleInter"
					>
						Complete{" "}
						<Span color="rgba(155, 240, 11, 1)">
							control
						</Span>
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					width="50%"
					display="flex"
					align-items="center"
					justify-content="center"
					lg-width="100%"
					lg-order="1"
				>
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						margin="0px 0px 0px 0px"
						padding="0px 0px 0px 0px"
					/>
					<Image src="https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/Rectangle%207.png?v=2020-11-26T16:34:07.656Z" padding="0px 0px 0px 0px" width="100%" />
					<StackItem width="100%" display="flex" align-items="center" justify-content="center">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" margin="0px 0px 0px 0px" />
						<Image src="https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/Rectangle%209.png?v=2020-11-26T16:39:01.328Z" padding="18px 0px 0px 0px" width="100%" />
						{"            "}
					</StackItem>
					{"            "}
				</StackItem>
				<StackItem
					width="50%"
					display="flex"
					align-items="center"
					justify-content="center"
					lg-width="100%"
					lg-order="0"
				>
					<Override slot="StackItemContent" flex-direction="column" margin="0px 0px 0px 0px" position="relative" />
					<Text
						font="normal 600 23px/34px --fontFamily-googleInter"
						letter-spacing="-3%"
						color="rgba(129, 129, 129, 1)"
						margin="0px 70px 0px 100px"
						text-align="left"
						position="relative"
						top="60px"
						bottom="auto"
						lg-text-align="center"
						lg-top="0px"
						sm-width="100%"
						sm-margin="0px 0px 0px 0px"
					>
						The new Xbox Wireless Controller brings elegant design, refined comfort, and instant sharing to a familiar favorite.
					</Text>
					<StackItem width="100%" display="flex" align-items="center" justify-content="center">
						<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" margin="0px 0px 0px 0px" />
						<Image src="https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/Rectangle%208.png?v=2020-11-26T16:37:54.781Z" padding="122px 0px 18px 0px" width="100%" sm-padding="50px 0px 18px 0px" />
						{"            "}
					</StackItem>
					<Components.Knopka
						display="flex"
						flex-direction="column"
						justify-content="center"
						padding="86px 86px 20px 86px"
						background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/Rectangle%2010.png?v=2020-11-26T16:43:48.221Z) 0% 0% /cover no-repeat scroll padding-box"
						transition="-webkit-transition: all .3s;  transition: all .3s"
						border-radius="0px"
						lg-padding="68px 36px 30px 36px"
						border-width="1px"
						border-style="solid"
						border-color="#161616"
						position="relative"
						z-index="3"
						overflow-y="hidden"
						overflow-x="hidden"
						sm-padding="60px 36px 00px 36px"
					>
						<Override
							slot="Link :default"
							text-decoration-line="initial"
							color="#000000"
							margin="0px 0px 0px -44px"
							padding="0px 0px 0px 0px"
						/>
						<Override
							slot="Link :hover"
							align-items="center"
							display="flex"
							justify-content="center"
							text-align="center"
						/>
						<Override
							slot="Link"
							border-radius="100%"
							display="flex"
							align-items="center"
							justify-content="center"
							transition="-webkit-transition: all .3s;  transition: all .3s"
							font="600 18px --fontFamily-googleInter"
							color="#000000"
							text-decoration-line="initial"
							padding="0px 0px 0px 0px"
							href="/privileged-user-monitoring/"
						/>
						<Override slot="Before Text">
							TheTheTheTheTheTheTheTheTheTheTheTheTheTheTheThe
						</Override>
						<Override
							slot="Before Text2"
							color="#000000"
							font="normal 600 0px/0% --fontFamily-googleInter"
							margin="0px 0px 0px 0px"
							transition="-webkit-transition: all .5s;  transition: all .5s"
							letter-spacing="-0.03em"
						>
							Helps reduce the risks of data leakage and loss of reputation
						</Override>
						<Override slot="Before Text2 :default" transform="translateY(20px)">
							Helps reduce the risks of data leakage and loss of reputation
						</Override>
						<Override slot="Before Text2 :hover" transform="translateY(-25px)" />
						<Override slot="image" src="https://uploads.quarkly.io/5f844e532e3a2a001faf55b8/images/arrowffuuu.svg?v=2020-10-30T00:58:06.309Z" width="7px" height="12px" />
						<Override
							slot="Before image"
							src="https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/flash%201.png?v=2020-11-26T16:47:50.488Z"
							top="0px"
							left="156px"
							bottom="0px"
							right="auto"
							margin="0px 0px 20px 0px"
							transform="translateX(300px)"
							position="static"
							transition=" -webkit-transition: all .3s;  transition: all .3s"
							sm-transform="translateX(200px)"
						/>
						<Override
							slot="Before image :default"
							src="https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/flash%201.png?v=2020-11-26T16:47:50.488Z"
							top="auto"
							bottom="0px"
							left="28px"
							right="auto"
							margin="0px 0px 20px 0px"
						/>
						<Override
							slot="Before image :hover"
							top="0px"
							bottom="auto"
							right="auto"
							left="190px"
							transform="translateX(-30px)"
						/>
						<Text font="normal 600 60px/110% --fontFamily-googleInter" letter-spacing="-0.03em" margin="0px 0px 24px 0px" sm-font="normal 600 37px/42px --fontFamily-googleInter">
							Compatible with games on Windows 10
						</Text>
						<Text font="normal 600 23px/34px --fontFamily-googleInter" letter-spacing="-0.03em" margin="0px 0px 0px 0px" color="#304D00">
							The gamepad fully supports Windows 10, you can play all the games of this platform and switch easily
						</Text>
					</Components.Knopka>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			padding="70px 0 30px 0"
			background="#0C0C0C"
			sm-padding="40px 0 0px 0"
			lg-padding="70px 0 130px 0"
			md-padding="70px 0 0px 0"
		>
			<Override slot="SectionContent" max-width="=" width="100%" />
			<Section>
				<Override slot="SectionContent" width="100%" max-width="1220px" />
				<Stack margin="0px 0px 0px 0px" gap="--cmp-stack-gap-default">
					{"    "}
					<StackItem
						width="50%"
						display="flex"
						align-items="center"
						justify-content="center"
						lg-width="100%"
					>
						<Override
							slot="StackItemContent"
							flex-direction="column"
							align-items="flex-start"
							justify-content="center"
							padding="0px 180px 0px 0px"
							lg-align-items="center"
							lg-padding="0px 80px 0px 80px"
							sm-padding="0px 20px 0px 20px"
							md-padding="0px 20px 0px 20px"
						/>
						<Text
							font="normal 700 72px/79px --fontFamily-googleInter"
							letter-spacing="-0.02em"
							color="#ffffff"
							margin="0px 0px 41px 0px"
							lg-width="100%"
							lg-text-align="center"
							lg-font="normal 700 72px/82px --fontFamily-googleInter"
							sm-font="normal 700 42px/48px --fontFamily-googleInter"
						>
							Technologically{" "}
							<Span color="rgba(155, 240, 11, 1)">
								perfect
							</Span>
						</Text>
						<Text
							font="normal 600 23px/34px --fontFamily-googleInter"
							letter-spacing="-3%"
							color="rgba(129, 129, 129, 1)"
							margin="0px 0px 0px 0px"
							text-align="left"
							lg-text-align="center"
							sm-width="100%"
						>
							The new Xbox Wireless Controller brings elegant design, refined comfort, and instant sharing to a familiar favorite.
						</Text>
						{"            "}
					</StackItem>
					{"    "}
				</Stack>
				<Image width="100%" src="https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/xbox%20tech%202.png?v=2020-11-26T17:15:41.863Z" margin="-140px 0px 0px 0px" lg-margin="0px 0px 0px 0px" />
			</Section>
		</Section>
		<Section id="inside" padding="30px 0 0px 0" background="url(https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/Vector%204.png?v=2020-11-26T17:33:56.532Z) center center/90% no-repeat,#0C0C0C">
			<Override slot="SectionContent" max-width="1220px" sm-width="100%" sm-max-width="none" />
			<Stack margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="100%" display="flex" align-items="center" justify-content="center">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						padding="0px 0px 0px 0px"
					/>
					<Text
						font="normal 700 91px/104px --fontFamily-googleInter"
						letter-spacing="-0.02em"
						color="#ffffff"
						margin="0px 0px 0px 0px"
						lg-font="normal 700 72px/82px --fontFamily-googleInter"
						sm-font="normal 700 42px/48px --fontFamily-googleInter"
					>
						Xbox series X
					</Text>
					<Text
						font="normal 700 53px/79px --fontFamily-googleInter"
						letter-spacing="-0.02em"
						color="#ffffff"
						margin="0px 0px 16px 0px"
						lg-font="normal 700 72px/82px --fontFamily-googleInter"
						sm-font="normal 700 42px/48px --fontFamily-googleInter"
					>
						$499.99
					</Text>
					<Text
						font="normal 700 21px/25px --fontFamily-googleInter"
						letter-spacing="3%"
						color="rgba(155, 240, 11, 1)"
						text-transform="uppercase"
						margin="0px 0px 24px 0px"
						sm-margin="0px 0px 33px 0px"
					>
						pre order
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px" gap="0px">
				{"    "}
				<StackItem width="100%" display="flex" align-items="center" justify-content="center">
					<Override
						slot="StackItemContent"
						flex-direction="column"
						align-items="center"
						justify-content="center"
						padding="0px 0px 0px 0px"
						position="relative"
					/>
					<Components.ImageCrut
						width="172px"
						height="172px"
						position="absolute"
						top="20px"
						left="30%"
						right="auto"
						bottom="auto"
						lg-left="27%"
						sm-height="70px"
						sm-width="70px"
						sm-left="24%"
						sm-top="0px"
						md-width="120px"
						md-height="120px"
						md-left="24%"
						md-top="9px"
						lg-width="120px"
						lg-height="120px"
						lg-top="9px"
					/>
					<Image src="https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/xbox%20purchase.png?v=2020-11-26T17:30:26.657Z" md-width="100%" lg-width="100%" />
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section
			padding="140px 0 140px 0"
			background="#0C0C0C"
			lg-padding="70px 0 70px 0"
			md-padding="40px 0 40px 0"
			sm-padding="20px 0 40px 0"
		>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="100%" display="flex" align-items="center" justify-content="center">
					<Override slot="StackItemContent" flex-direction="column" align-items="flex-start" justify-content="center" />
					<Text
						font="normal 700 91px/104px --fontFamily-googleInter"
						letter-spacing="-0.02em"
						color="#ffffff"
						margin="0px 0px 80px 0px"
						text-align="left"
						width="80%"
						lg-text-align="center"
						lg-width="100%"
						lg-font="normal 700 72px/82px --fontFamily-googleInter"
						lg-margin="0px 0px 30px 0px"
						sm-font="normal 700 42px/48px --fontFamily-googleInter"
					>
						Frequently asked questions{" "}
						<Span
							color="rgba(155, 240, 11, 1)"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
						>
							control{" "}
						</Span>
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="100%" display="flex">
					<Override slot="StackItemContent" flex-direction="column" />
					{"        "}
					<Components.Accordion width="100%" margin="0px 0px 20px 0px" border-width="0px" border-radius="0px">
						<Components.AccordionItem>
							<Components.AccordionSummary>
								<Override slot="Accordion Summary" background="rgba(230, 229, 230, 0)" border-width="0px" padding="16px 64px 16px 0px" />
								<Override slot="Accordion Summary Icon" color="#ffffff" size="32px" />
								<Text color="#ffffff" font="normal 600 23px/34px --fontFamily-googleInter" letter-spacing="-0.03em">
									When is Xbox Series X release date?
								</Text>
							</Components.AccordionSummary>
							<Components.AccordionDetails>
								<Override
									slot="Accordion Details"
									border-color="#2E2E2E"
									border-width="0px 0px 3px 0px"
									border-style="solid"
									padding="0px 24px 0px 0px"
								/>
								<Text color="#777777" font="normal 600 20px/34px --fontFamily-googleInter" letter-spacing="-0.03em" margin="0px 0px 40px 0px">
									Xbox Series X is launching at participating retailers worldwide on November 10, 2020.
								</Text>
							</Components.AccordionDetails>
						</Components.AccordionItem>
					</Components.Accordion>
					<Components.Accordion width="100%" margin="0px 0px 20px 0px" border-width="0px" border-radius="0px">
						<Components.AccordionItem>
							<Components.AccordionSummary>
								<Override slot="Accordion Summary" background="rgba(230, 229, 230, 0)" border-width="0px" padding="16px 64px 16px 0px" />
								<Override slot="Accordion Summary Icon" color="#c9c9c9" size="32px" />
								<Text color="#ffffff" font="normal 600 23px/34px --fontFamily-googleInter" letter-spacing="-0.03em">
									Will my previous Xbox games work on Xbox Series X?{" "}
								</Text>
							</Components.AccordionSummary>
							<Components.AccordionDetails>
								<Override
									slot="Accordion Details"
									border-color="#2E2E2E"
									border-width="0px 0px 3px 0px"
									border-style="solid"
									padding="0px 24px 0px 0px"
								/>
								<Text color="#777777" font="normal 600 20px/34px --fontFamily-googleInter" letter-spacing="-0.03em" margin="0px 0px 40px 0px">
									Yes, games that support the new console generation will be available to you
								</Text>
							</Components.AccordionDetails>
						</Components.AccordionItem>
					</Components.Accordion>
					<Components.Accordion width="100%" margin="0px 0px 20px 0px" border-width="0px" border-radius="0px">
						<Components.AccordionItem>
							<Components.AccordionSummary>
								<Override slot="Accordion Summary" background="rgba(230, 229, 230, 0)" border-width="0px" padding="16px 64px 16px 0px" />
								<Override slot="Accordion Summary Icon" color="#c9c9c9" size="32px" />
								<Text color="#ffffff" font="normal 600 23px/34px --fontFamily-googleInter" letter-spacing="-0.03em">
									Which games include Smart Delivery?{" "}
								</Text>
							</Components.AccordionSummary>
							<Components.AccordionDetails>
								<Override
									slot="Accordion Details"
									border-color="#2E2E2E"
									border-width="0px 0px 3px 0px"
									border-style="solid"
									padding="0px 24px 0px 0px"
								/>
								<Text color="#777777" font="normal 600 20px/34px --fontFamily-googleInter" letter-spacing="-0.03em" margin="0px 0px 40px 0px">
									The entire list of games is available here:{" "}
									<Link href="https://www.xbox.com/ru-RU/games/optimized" color="rgba(155, 240, 11, 1)" font="600 20px/34px Inter, sans-serif">
										https://www.xbox.com/ru-RU/games/optimized
									</Link>
								</Text>
							</Components.AccordionDetails>
						</Components.AccordionItem>
					</Components.Accordion>
					{"    "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
		<Section md-padding="14px 0 14px 0" padding="50px 0 50px 0" background="#0C0C0C" lg-padding="00px 0 0px 0">
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem
					width="33.333%"
					display="flex"
					md-width="100%"
					lg-width="100%"
					lg-align-items="center"
					lg-justify-content="center"
				>
					<Override slot="StackItemContent" align-items="center" lg-justify-content="center" />
					{"        "}
					<Image src="https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/RW8TP2%201.svg?v=2020-11-26T16:02:44.683Z" />
					{"    "}
				</StackItem>
				{"    "}
				<StackItem width="33.333%" display="flex" md-width="100%" lg-width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="center" />
					<Menu display="flex" sm-flex-direction="column" sm-align-items="center">
						<Override slot="link-index" href="#browse">
							Browse
						</Override>
						<Override slot="item-404" display="none" />
						<Override
							slot="link"
							text-decoration-line="initial"
							text-transform="uppercase"
							color="#ffffff"
							font="--lead"
							hover-color="rgba(155, 240, 11, 1)"
						/>
						<Override slot="link-active" color="#ffffff" />
						<Override slot="item" sm-margin="0px 0px 10px 0px" />
						<Override slot="link-games" href="#games" />
						<Override slot="link-controller" href="#control" />
						<Override slot="link-inside" href="#inside" />
					</Menu>
					{"            "}
				</StackItem>
				<StackItem width="33.333%" display="flex" lg-width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" lg-justify-content="center" />
					<SocialMedia twitter="https://twitter.com/quarklyapp" youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw" instagram="https://www.instagram.com/goalov/">
						<Override
							slot="link"
							background="rgba(237, 242, 246, 0)"
							color="#ffffff"
							hover-background="rgba(237, 242, 246, 0)"
							hover-color="rgba(155, 240, 11, 1)"
						/>
					</SocialMedia>
					{"            "}
				</StackItem>
			</Stack>
		</Section>
		<Section
			sm-padding="24px 0 24px 0"
			md-padding="14px 0 24px 0"
			padding="20px 0 20px 0"
			background="#0C0C0C"
			lg-padding="10px 0 30px 0"
		>
			<Stack margin="0px 0px 0px 0px">
				{"    "}
				<StackItem width="50%" display="flex" md-width="100%" lg-width="100%">
					<Override slot="StackItemContent" align-items="center" lg-justify-content="center" />
					<Text font="normal 500 16px/24px --fontFamily-googleInter" color="#777777" letter-spacing="-0.03em" lg-margin="0px 0px 0px 0px">
						© Microsoft 2020
					</Text>
					{"            "}
				</StackItem>
				<StackItem width="50%" display="flex" md-width="100%" lg-width="100%">
					<Override slot="StackItemContent" align-items="center" justify-content="flex-end" lg-justify-content="center" />
					<Text font="normal 500 16px/24px --fontFamily-googleInter" color="#777777" letter-spacing="-0.03em" lg-margin="0px 0px 0px 0px">
						Contact us Privacy & cookies
					</Text>
					{"            "}
				</StackItem>
				{"    "}
			</Stack>
		</Section>
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
		<RawHtml>
			<style place={"endOfHead"} rawKey={"60b8c674f16f1a6afae4eee9"}>
				{"* {\n    scroll-behavior: smooth;\n    }"}
			</style>
		</RawHtml>
	</Theme>;
});