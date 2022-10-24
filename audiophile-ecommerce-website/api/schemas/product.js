export default {
    name: "product",
    type: "document",
    title: "Product",
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Product Name',
            description: 'Desc Product Name',
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug Product',
            description: 'Desc Slug Prod',
            options: {
                source: 'name',
                maxLength: 90,
            }
        },
        {
            name: 'productcategory',
            type: 'string',
            title: 'Product Category',
            description: 'Desc Product Category, must by one of categories. Copy slug from category document!!!',
        },
        {
            name: 'image',
            type: 'image',
            title: 'Product Image',
            description: 'Desc Img Prod',
        },
        {
            name: 'title',
            type: 'string',
            title: 'Title',
            description: 'Desc Title Prod',
        },
        {
            name: 'description',
            type: 'string',
            title: 'Description',
            description: 'Desc Desc Prod',
        },
        {
            name: 'price',
            type: 'number',
            title: 'Price',
            description: 'Desc Price Prod',
        },
        {
            name: 'featurestitle',
            type: 'string',
            title: 'Features Title',
            description: 'Desc Features Title Prod',
        },
        {
            name: 'featuresdesc1',
            type: 'string',
            title: 'Features Title 1',
            description: 'Desc Features Title 1 Prod',
        },
        {
            name: 'featuresdesc2',
            type: 'string',
            title: 'Features Title 2',
            description: 'Desc Features Title 2 Prod',
        },
        {
            name: 'intheboxtitle',
            type: 'string',
            title: 'In The Box Title',
            description: 'Desc In The Box Prod Title',
        },
        {
            name: 'intheboxdesc',
            type: 'array',
            title: 'In The Box Desc',
            description: 'Desc In The Box Prod',
            of: [{type: 'string'}]
        },
        {
            name: 'productimages',
            type: 'array',
            title: 'Product Images',
            description: 'Desc Product Images',
            of: [{type: 'image'}],
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
            title: 'Label',
            description: 'Label Title Prod',
        },
        {
            name: 'brandname',
            type: 'string',
            title: 'Brand Name',
            description: 'Desc Title Brand Name',
        },
    ]
}