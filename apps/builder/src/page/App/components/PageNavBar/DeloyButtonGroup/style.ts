import { css } from "@emotion/react"
import { getColor } from "@illa-design/react"

export const deployConfigButtonStyle = css`
  position: relative;

  &:before {
    border-radius: 1px;
    background: ${getColor("white", "06")};
    width: 1px;
    height: 12px;
    content: "";
    position: absolute;
    left: 0;
  }
`
export const deployMenuStyle = css`
  padding: 8px 0;
`
export const deployLabelStyle = css`
  font-weight: 500;
  line-height: 22px;
`
export const deployConfigDescStyle = css`
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
  color: ${getColor("grayBlue", "04")};
`