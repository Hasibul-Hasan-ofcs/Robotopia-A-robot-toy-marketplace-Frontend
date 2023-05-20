// move to mongodb
const subCategoryData = [
  {
    name: "Transformer 1",
    type: "t",
    price: 29.99,
    rating: 4.5,
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Foptimus02.jpg?alt=media&token=7d87c717-1f8a-4b63-8d94-2d142774167c",
  },
  {
    name: "Transformer 2",
    type: "t",
    price: 34.99,
    rating: 4.2,
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fbee.jpg?alt=media&token=89481235-5644-4465-bb35-78511b2e06c4",
  },
  {
    name: "Transformer 3",
    type: "t",
    price: 39.99,
    rating: 4.7,
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fdecepticon01.jpg?alt=media&token=f784ddb0-6052-469d-a9e8-6ab7c77a53d9",
  },
  {
    name: "Transformer 4",
    type: "t",
    price: 24.99,
    rating: 4.1,
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fdecepticon02.jpg?alt=media&token=69983e52-16af-49a7-9e0f-e05202cac24e",
  },
  {
    name: "Gundam 1",
    type: "g",
    price: 19.99,
    rating: 4.3,
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fgundam01.jpg?alt=media&token=b21a2fb8-e440-4f1e-a0c6-ffcd6073011d",
  },
  {
    name: "Gundam 2",
    type: "g",
    price: 27.99,
    rating: 4.6,
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fgundam02.jpg?alt=media&token=d0939ccb-4c82-4de1-b4c3-9f2e9ea606d1",
  },
  {
    name: "Gundam 3",
    type: "g",
    price: 32.99,
    rating: 4.4,
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fgundam03.jpg?alt=media&token=80367824-a631-4d49-a9a2-536e3ced14b5",
  },
  {
    name: "Gundam 4",
    type: "g",
    price: 22.99,
    rating: 4.0,
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fgundam04.jpg?alt=media&token=e6f300b8-653d-4b8f-ace9-515acd8afa46",
  },
  {
    name: "Macross 1",
    type: "m",
    price: 14.99,
    rating: 4.2,
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fmacross01.jpg?alt=media&token=f60e5ff9-6e0b-4416-a753-5e4ef69ab22f",
  },
  {
    name: "Macross 2",
    type: "m",
    price: 21.99,
    rating: 4.8,
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fmacross02.jpg?alt=media&token=abde026a-84f7-41c6-a0f4-8fbf505db443",
  },
  {
    name: "Macross 3",
    type: "m",
    price: 36.99,
    rating: 4.5,
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fmacross03.jpg?alt=media&token=224a6285-ffb7-4d2d-933c-eecfb78a9ac5",
  },
  {
    name: "Macross 4",
    type: "m",
    price: 26.99,
    rating: 3.9,
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fmacross04.jpg?alt=media&token=f51ab7da-14b4-41e9-8593-e9fd16df2686",
  },
];

// move to mongodb
const galleryImgs = [
  {
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fmacross04.jpg?alt=media&token=f51ab7da-14b4-41e9-8593-e9fd16df2686",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Foptimus02.jpg?alt=media&token=7d87c717-1f8a-4b63-8d94-2d142774167c",
  },

  {
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fbee.jpg?alt=media&token=89481235-5644-4465-bb35-78511b2e06c4",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fdecepticon01.jpg?alt=media&token=f784ddb0-6052-469d-a9e8-6ab7c77a53d9",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fdecepticon02.jpg?alt=media&token=69983e52-16af-49a7-9e0f-e05202cac24e",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fgundam01.jpg?alt=media&token=b21a2fb8-e440-4f1e-a0c6-ffcd6073011d",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fgundam02.jpg?alt=media&token=d0939ccb-4c82-4de1-b4c3-9f2e9ea606d1",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fgundam03.jpg?alt=media&token=80367824-a631-4d49-a9a2-536e3ced14b5",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fmacross01.jpg?alt=media&token=f60e5ff9-6e0b-4416-a753-5e4ef69ab22f",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fmacross02.jpg?alt=media&token=abde026a-84f7-41c6-a0f4-8fbf505db443",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fmacross03.jpg?alt=media&token=224a6285-ffb7-4d2d-933c-eecfb78a9ac5",
  },
  {
    img: "https://firebasestorage.googleapis.com/v0/b/robotopia-28322.appspot.com/o/gallery%2Fgundam04.jpg?alt=media&token=e6f300b8-653d-4b8f-ace9-515acd8afa46",
  },
];

export { subCategoryData, galleryImgs };
