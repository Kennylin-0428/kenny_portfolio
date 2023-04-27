export default{
    name: "testimomials",
    title: "Testimomials",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        }, 
        {
            name: "company",
            title: "Company",
            type: "string"
        }, 
        {
            name: "imageurl",
            title: "ImgURL",
            type: "image",
            option:{
                hotspot: true,
            }
        }, 
        {
            name: "feedback",
            title: "Feedback",
            type: "string"
        }, 
    ],

}