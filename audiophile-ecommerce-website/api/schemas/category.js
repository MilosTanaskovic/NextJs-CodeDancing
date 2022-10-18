export default {
    name: 'category',
    type: 'document',
    title: 'Category',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'name',
            description: 'Desc Name',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Category Image',
            description: 'Desc Img',
            options: {
                isHighlighted: true, // <-- make this field easily accessible
                hotspot: true, //<-- Defaults to false
                metadata: [
                    'blurhash',   // Default: included
                    'lqip',       // Default: included
                    'palette',    // Default: included
                    'exif',       // Default: not included
                    'location',   // Default: not included
                ],
            },
        },
        {
            name: 'btnText',
            type: 'string',
            title: 'Button Text',
            description: 'Desc Button Text',
        },
    ]
}