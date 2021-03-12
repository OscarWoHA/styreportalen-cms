import { useForm, usePlugin } from "@tinacms/react-core"
import { NextPageContext } from "next"
import React from "react"
import styled from "styled-components"

const MastHead = styled.header<{ background?: string }>`
    background-image: url("${(props) => props.background}");
`

MastHead.defaultProps = {
    background: "/default-header.jpg",
    className: "masthead",
}

const Home: React.FC<NextPageContext> = ({ pathname }) => {
    const [modifiedValues, form] = useForm<{
        header: { title: string; subtitle: string; background?: string }
    }>({
        id: pathname,
        label: "Rediger forsiden",
        fields: [
            {
                label: "Rediger header",
                name: "header",
                component: "group",
                fields: [
                    {
                        name: "title",
                        label: "Tittel",
                        component: "text",
                    },
                    {
                        name: "subtitle",
                        label: "Undertittel",
                        component: "text",
                    },
                    {
                        name: "background",
                        label: "Bakgrunn",
                        component: "image",
                    },
                ],
            },
        ],
        initialValues: {
            header: {
                title: "Tittel",
                subtitle: "Undertittel",
            },
        },
        onSubmit: async (formData) => {
            console.log(formData)
        },
    })

    usePlugin(form)

    return (
        <MastHead background={modifiedValues.header.background}>
            <div className="container">
                <div className="masthead-subheading">
                    {modifiedValues.header.subtitle}
                </div>
                <div className="masthead-heading text-uppercase">
                    {modifiedValues.header.title}
                </div>
            </div>
        </MastHead>
    )
}

export default Home
