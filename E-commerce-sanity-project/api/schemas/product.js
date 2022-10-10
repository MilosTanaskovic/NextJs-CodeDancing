export default {
    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        // list of prod imgs
        {
            name: 'image',
            title: 'Image',
            description: 'description of img',
            type: 'array',
            of: [{ type: 'image' }],
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
        // name of product
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        // slug - unique identifiers/name / URLs
        {
            name: 'slug',
            title: 'Slug',
            description: 'description of slug',
            type: 'slug',
            options: { 
                source: 'name',
                maxLength: 90,
            }

        },
        // price of product
        {
            name: 'price',
            title: 'Price',
            type: 'number'
        },
        // details of product
        {
            name: 'details',
            title: 'Details',
            type: 'string',
        }
    ]
}