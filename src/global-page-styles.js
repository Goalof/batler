import React from "react";
import { transformVar } from "@quarkly/atomize";
import { createGlobalStyle } from "styled-components";

const pageStyles = {
    "404": {
        "background": "#0C0C0C"
    },
    "index": {
        "background": "#0C0C0C"
    },
    "games": {
        "background": "#0C0C0C"
    },
    "controller": {
        "background": "#0C0C0C"
    },
    "inside": {
        "background": "#0C0C0C"
    }
};

const PageStyles = createGlobalStyle`
    body {
        ${({ styles }) =>
            Object.entries(styles || {}).map(
                ([prop, value]) => `${prop}: ${transformVar(prop, value)};`
            )}
    }
`;
export const GlobalQuarklyPageStyles = ({ pageUrl }) => <PageStyles styles={pageStyles[pageUrl]} />
