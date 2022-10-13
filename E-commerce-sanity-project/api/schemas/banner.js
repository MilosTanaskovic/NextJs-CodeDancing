export default {
    name: 'banner',
    title: 'Banner',
    type: 'document',
    description: 'description for banner',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'One published banner is allowd',
        },
        {
            name: 'buttonText',
            title: 'ButtonText',
            type: 'string',
            description: 'One published banner is allowd',
        },
        {
            name: 'product',
            title: 'Product',
            type: 'string',
        },
         // slug - unique identifiers/name / URLs
         {
            name: 'slug',
            title: 'Slug',
            description: 'filtering banners by slug',
            type: 'slug',
            options: { 
                source: 'product',
                maxLength: 90,
            }

        },
        {
            name: 'desc',
            title: 'Desc',
            type: 'string',
        },
        {
            name: 'smallText',
            title: 'SmallText',
            type: 'string',
        },
        {
            name: 'midText',
            title: 'MidText',
            type: 'string',
        },
        {
            name: 'largeText1',
            title: 'LargeText1',
            type: 'string',
        },
        {
            name: 'largeText2',
            title: 'LargeText2',
            type: 'string',
        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'string',
        },
        {
            name: 'saleTime',
            title: 'SaleTime',
            type: 'string',
        },
    ]
}