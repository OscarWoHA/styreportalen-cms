import { Media } from "@tinacms/core"
import React from "react"
import styled from "styled-components"

const MastHeadComponent = styled.header<{ background?: string }>`
    background-image: url("${(props) => props.background}");
`

MastHeadComponent.defaultProps = {
    background: "/default-header.jpg",
    className: "masthead",
}

type MastHeadProps = {
    subtitle: string
    title: string
    background?: Media
}

const MastHead: React.FC<MastHeadProps> = ({ title, subtitle, background }) => {
    return (
        <MastHeadComponent background={background?.previewSrc}>
            <div className="container">
                <div className="masthead-subheading">{subtitle}</div>
                <div className="masthead-heading text-uppercase">{title}</div>
            </div>
        </MastHeadComponent>
    )
}

export default MastHead
