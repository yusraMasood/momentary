import {generalImages, icons, sampleImages} from '../assets/images';
import {colors} from './appTheme';

export const categoryArray = [
  {
    icon: icons.development,
    title: 'Development',
    backgroundColor: colors.lightGreen,
  },
  {
    icon: icons.finance,
    title: 'Finance',
    backgroundColor: colors.lightBlue,
  },
  {
    icon: icons.consultancy,
    title: 'Consultancy',
    backgroundColor: colors.lightPurple,
  },
  {
    icon: icons.insurance,
    title: 'Insurance',
    backgroundColor: colors.lightOrange,
  },
];

export const homeCategories = [
  {
    title: 'Consultations',
    color: colors.categoryBlueBackground,
    borderColor: colors.categoryBlueBorder,
    route: "CategoryStack"

  },
  {
    title: 'Capsules',
    color: colors.categoryPinkBackground,
    borderColor: colors.categoryPinkBorder,
    route: "CategoryStack"

  },
  {
    title: 'Hygiene',
    color: colors.categoryYellowBackground,
    borderColor: colors.categoryYellowBorder,
    route: "CategoryStack"

  },
  {
    title: 'More',
    color: colors.categoryRedBackground,
    borderColor: colors.categoryRedBorder,
    route: "CategoryStack"
  },
];
export const chatArray = [
  {
    id:1,
    user: 0,
    username: 'Rachel Ross',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. aenean euismod.',
    time: '10:30 am',
  },
  {
    id:2,
    user: 1,
    username: 'You',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. aenean euismod.',
    time: '10:30 am',
  },
  {
    id:3,
    user: 0,
    username: 'You',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. aenean euismod.',
    time: '10:30 am',
  },
  {
    id:4,
    user: 1,
    username: 'You',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. aenean euismod.',
    time: '10:30 am',
  },
];
export const listOfPeopleChats = [
  {
    id:1,
    name: 'Angelina Ross',
    image: sampleImages.userImage,
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. aenean euismod bibendum laoreet. proin gravida dolor sit amet lacus accumsan et viverra justo comm odo. proin sodales pulvinar tempor.',
    time: '10:30 am',
    unread:2,
    // unread:true
  },
  {
    id:2,
    name: 'Angelina rare',
    image: sampleImages.userImage,
    message: 'Consultancy',
    time:"10:30 am",
    unread:0,
  },
  {
    id:3,
    name: 'Angelina special',
    image: sampleImages.userImage,
    message: 'Insurance',
    time:"10:30 am",
    unread:0,
  },
  {
    id:4,
    name: 'Angelina special',
    image: sampleImages.userImage,
    message: 'Insurance',
    time:"10:30 am",
    unread:0,
  },
  {
    id:5,
    name: 'Angelina special',
    image: sampleImages.userImage,
    message: 'Insurance',
    time:"10:30 am",
    unread:0,
  },
  {
    id:6,
    name: 'Angelina special',
    image: sampleImages.userImage,
    message: 'Insurance',
    time:"10:30 am",
    unread:0,
  },
  {
    id:7,
    name: 'Angelina special',
    image: sampleImages.userImage,
    message: 'Insurance',
    time:"10:30 am",
    unread:0,
  },
];

export const productData = [
  {
    id:1,
    image: sampleImages.product1,
    title: 'CardioTonic Tincture',
    rating: 3,
    price: 99,
  },
  {
    id:2,
    image: sampleImages.product2,
    title: 'CardioTonic Tincture',
    rating: 3,
    price: 99,
  },
  {
    id:3,
    image: sampleImages.product2,
    title: 'CardioTonic Tincture',
    rating: 3,
    price: 99,
  },
  {
    id:4,
    image: sampleImages.product2,
    title: 'CardioTonic Tincture',
    rating: 3,
    price: 99,
  },
  {
    id:5,
    image: sampleImages.product2,
    title: 'CardioTonic Tincture',
    rating: 3,
    price: 99,
  },
  {
    id:6,
    image: sampleImages.product2,
    title: 'CardioTonic Tincture',
    rating: 3,
    price: 99,
  },
];
export const consultationArray=[
  {
    id:1,
    title:"Consultation With YAKHI",
    price:"475$ / 30 Min"
  },
  {
    id:2,
    title:"Consultation With YAKHI",
    price:"475$ / 30 Min"
  },
  {
    id:3,
    title:"Consultation With YAKHI",
    price:"475$ / 30 Min"
  }
]
export const timeArray=[
  "09:00 pm",
  "10:00 pm",
  "11:00 pm",
  "12:00 pm",
  "01:00 pm",
  "02:00 pm",
  "03:00 pm",
  "04:00 pm",
]

export const bookingArray = [
  {
    id:1,
    title: "Booking ID : 001",
    date:"12/12/2022",
    time:"Monday - 2:00 PM",
    status:"Pending"
   
  },
  {
    id:2,
    title: "Booking ID : 001",
    date:"12/12/2022",
    time:"Monday - 2:00 PM",
    status:"InProcess"

  },
  {
    id:3,
    title: "Booking ID : 001",
    date:"12/12/2022",
    time:"Monday - 2:00 PM",
    status:"Pending"

  },
  {
    id:4,
    title: "Booking ID : 001",
    date:"12/12/2022",
    time:"Monday - 2:00 PM",
    status:"Reported"
  },
  {
    id:5,
    title: "Booking ID : 001",
    date:"12/12/2022",
    time:"Monday - 2:00 PM",
    status:"Pending"
  },
  {
    id:6,
    title: "Booking ID : 001",
    date:"12/12/2022",
    time:"Monday - 2:00 PM",
    status:"Completed"
  },
];
export const educationData=[
  {
    id:1,
    title: "Eat to Live",
    desc:"Let Your Food Be Your Medicine",
    image:sampleImages.fruits,
    route: "EducationDetails"
   
   
  },
  {
    id:2,
    title: "Instructions",
    desc:"No Yeast, Sugar, Meat, Alcohol....",
    image:sampleImages.exercise,
    route: "EducationDetails"
   

  },
  {
    id:3,
    title: "12 Body System",
    desc:"The Hue-Man Body",
    image:sampleImages.skull,
    route: "EducationDetails"


  },
  {
    id:4,
    title: "List of Resources",
    desc:"A Guide To Healing Resources",
    image:sampleImages.fruits,
    route:"ListOfResources"

  },
  {
    id:5,
    title: "Documents Download",
    desc:"The Best Way To Ensure Your....",
    image:sampleImages.fruits,
    route:"DocumentsDownload"


  },
]

export const orderSummaryData=[
  {
    id:1,
    name:"Healther Navy, M",
    quantity:"25.99 x 2",
    price:51.21,
    desc:"Lorem ipsum dolor sit amet, is consetetur sadipscing elitr.",
    img:sampleImages.product2
  }
]

export const geoGeneticsData=[
  {
    id:1,
    img: sampleImages.product1,
    name:"Package ABC",
    price:234.2
  },
  {
    id:2,
    img: sampleImages.product1,
    name:"Package ABC",
    price:234.2
  },
  {
    id:3,
    img: sampleImages.product1,
    name:"Package ABC",
    price:234.2
  },
  {
    id:4,
    img: sampleImages.product1,
    name:"Package ABC",
    price:234.2
  },
  {
    id:5,
    img: sampleImages.product1,
    name:"Package ABC",
    price:234.2
  },
]

export const categoryData=[
  {
    id:1,
    image: sampleImages.category1,
    name:"Capsules"
  },
  {
    id:2,
    image: sampleImages.category2,
    name:"Capsules"
  },
  {
    id:3,
    image: sampleImages.category3,
    name:"Capsules"
  },
  {
    id:4,
    image: sampleImages.category3,
    name:"Capsules"
  },
]
export const productsArray=[
  {
    id:1,
    image: sampleImages.product1,
    stock:0
  },
  {
    id:2,
    image: sampleImages.product2,
    stock:0
  },
  {
    id:3,
    image: sampleImages.product3,
    stock:0
  },

]