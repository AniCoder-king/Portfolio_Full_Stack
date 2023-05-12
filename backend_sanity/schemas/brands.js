export default{
    name: 'brands',
    title: 'Brands',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'imageurl',
            title: 'ImgUrl',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
    ],
}