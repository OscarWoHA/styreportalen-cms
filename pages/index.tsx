import { Media } from "@tinacms/core"
import { useForm, usePlugin } from "@tinacms/react-core"
import { NextPageContext } from "next"
import React from "react"
import MastHead from "./index/MastHead"

const Home: React.FC<NextPageContext> = ({ pathname }) => {
    const [modifiedValues, form] = useForm<{
        header: { title: string; subtitle: string; background?: Media }
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
                        previewSrc: (media) => media.previewSrc,
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
        <MastHead
            subtitle={modifiedValues.header.subtitle}
            title={modifiedValues.header.title}
            background={modifiedValues.header.background}
        />
    )
}

export default Home
