export default {
    name: 'banner',
    type: 'document',
    title: 'Banner',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
            description: 'Desc Name'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Banner Image',
            description: 'Desc Image',
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
            name: 'label',
            type: 'string',
            name: 'Label',
            description: 'Desc Label',
        },
        {
            name: 'title',
            type: 'string',
            name: 'Title',
            description: 'Desc Title',
        },
        {
            name: 'description',
            type: 'string',
            name: 'Description',
            description: 'Desc Desc',
        },
        {
            name: 'buttonText',
            type: 'string',
            name: 'buttonText',
            description: 'Desc Button Text',
        },
    ]
}