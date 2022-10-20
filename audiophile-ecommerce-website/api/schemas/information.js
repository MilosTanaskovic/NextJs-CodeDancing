export default {
    name: "information",
    type: "document",
    title: "Information",
    fields: [
        {
            name: "name",
            type: "string",
            title: "Name",
            description: "Desc Name"
        },
        {
            name: "image",
            type: "image",
            title: "Image Logo",
            description: "Desc Img Logo",
            options: {
                isHighlighted: true, // <-- make this field easily accessible
                hotspot: true, //<-- Defaults to false
                metadata: [
                    'blurhash',   // Default: included
                    'lqip',       // Default: included
                    'palette',    // Default: included
                    'exif',       // Default: not included
                    'location',   // Default: not included
                ]
            }
        },
        {
            name: "cart",
            type: "image",
            title: "Image Shop Cart",
            description: "Desc Shop Cart",
            options: {
                isHighlighted: true, // <-- make this field easily accessible
                hotspot: true, //<-- Defaults to false
                metadata: [
                    'blurhash',   // Default: included
                    'lqip',       // Default: included
                    'palette',    // Default: included
                    'exif',       // Default: not included
                    'location',   // Default: not included
                ]
            }
        },
        {
            name: "navitem",
            type: "array",
            title: "NavItems Text",
            description: "Desc NavItems",
            of: [{type: 'string'}],
            options: {
               
            }

        },
        {
            name: 'description',
            type: "string",
            title: "Description",
            description: "Desc",
        },
        {
            name: 'copyright',
            type: "string",
            title: "Copyright",
            description: "Desc Copyright",
        }

    ]
}