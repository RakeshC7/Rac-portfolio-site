const getCrafts = () => {
    return [
        {
            craftTitle: "Button Component",
            craftDescription:
                "Beautiful Button Component with Typescript, React and TailwindCSS",
            linkType: "internal",
            craftSlug: "button-component"
        },
        {
            craftTitle: "Accordion Component",
            craftDescription: "Simple accordion component",
            linkType: "internal",
            craftSlug: "accordion-component"
        }
    ]
}

export const getCraftHeader = ({ craftSlug }) => {
    let headerpayload = {
        payloadStatus: false
    }

    getCrafts()?.map(craft => {
        if (craftSlug === `/crafts/${craft?.craftSlug}`) {
            headerpayload = {
                payloadStatus: true,
                header: craft?.craftTitle,
                description: craft?.craftDescription,
                uploadedAt: {
                    month: "Mar",
                    year: 2023
                }
            }
        }
    })

    return headerpayload
}

export default getCrafts
