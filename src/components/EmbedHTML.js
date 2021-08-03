import React, { useRef, useLayoutEffect } from "react";
import atomize from "@quarkly/atomize"; // Put your HTML here:

const customHtml = `

  <style>
   a.rollover {
        background: url(https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/xbox%20tech%202.png?v=2020-11-26T17:15:41.863Z); /* Путь к файлу с заменяемым рисунком  */

    display: block; /*  Рисунок как блочный элемент */
    width: 100%; /* Ширина рисунка */
            height: 900px;
    background-size: contain;
    background-repeat: no-repeat !important;
    background-size: 110%;
   }
   a.rollover:hover {
   
       background: url(https://uploads.quarkly.io/5fbfb773b1c8af001eb57f5a/images/xbox%20tech%201.png); /* Путь к файлу с исходным рисунком  */
 background-size: contain;
     background-repeat: no-repeat !important;
                 height: 900px;
    background-size: contain;
    background-repeat: no-repeat !important;
    background-size: 110%;
   }
a.rollover span {
  text-decoration: none !important;
    color: #000;
    font-size: 31px;
    background: rgba(155,240,11,1);
    font-weight: 500;
    padding: 9px 18px;
    border-radius: 50%;
}
a.rollover span {
    height: 34px;
    position: relative;
    top: 42px;
    left: 115px;
}

a.rollover {
    text-decoration: none !important;
    display: flex !important;
    justify-content: center !important;
}
a.rollover span:hover {
    box-shadow: 0px 0px 20px rgba(155, 240, 11, 0.5);
}
  </style>
`;

const EmbedHTML = ({
	children,
	...props
}) => {
	const ref = useRef(null);
	useLayoutEffect(() => {
		ref.current.innerHTML = customHtml;
	}, []);
	return <div {...props} ref={ref} />;
};

export default atomize(EmbedHTML)({
	name: "EmbedHTML",
	normalize: true,
	mixins: true
});