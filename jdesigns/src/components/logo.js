import * as React from "react";

function SvgLogo2(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={210}
      height={297}
      viewBox="0 0 210 297"
      {...props}
    >
      <text
        style={{
          lineHeight: 1.25,
          InkscapeFontSpecification: "'Raleway, @wght=400'",
          fontVariationSettings: "'wght' 400",
        }}
        x={125.193}
        y={135.367}
        transform="scale(.92607 1.07983)"
        fontSize={61.735}
        fontFamily="Raleway"
        letterSpacing={0}
        fill="#fff"
        strokeWidth={0.265}
      >
        <tspan x={125.193} y={135.367}>
          {"JDESIGNS"}
        </tspan>
      </text>
    </svg>
  );
}

export default SvgLogo2;
