export const create_UUID = () => {
  var dt = new Date().getTime();
  var uuid = "xxx-4xxx-yxx".replace(/[xy]/g, function(c) {
    var r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    return (c == "x" ? r : (r && 0x3) || 0x8).toString(16);
  });
  return uuid;
  // var a = Math.floor(Math.random() * 20 + 23684658465/2.6);
  // var uuid =Math.ceil(a);
  // return uuid;
};
export const list = [
  {
    bookname: "Three mistakes",
    price: 56844,
    saleprice: 4584,
    id: "15f-4aff-827",
    author: "Jana",
    email: "jana123@gmail.com"
  },
  {
    bookname: "Sachin 100",
    price: 56498,
    saleprice: 4875,
    id: "19a-4335-a4a",
    author: "Vishnu",
    email: "vishnu876@yahoo.com"
  },
  {
    bookname: "Harry potter",
    price: 58986,
    saleprice: 4358,
    id: "0ef-4459-bc7",
    author: "Ramesh",
    email: "rameshking@hotmail.com"
  },
  {
    bookname: "Vampire dairies",
    price: 52145,
    saleprice: 4912,
    id: "8ba-4e70-a9d",
    author: "Shri",
    email: "shriraamramesh@mail.com"
  }
  // {
  // bookname: 'Wings of fire',
  // price: 52351,
  // id: "61f-4a2f-92d",
  // author: 'Ganesh',
  // email: 'harineramesh@gmail.com'
  // },
  // {
  // bookname: 'Ninja turtles',
  // price: 52146,
  // id: "843-4ee9-a08",
  // author: 'Karthik',
  // email: 'gopiaadhi@yahoo.com'
  // },
  // {
  // bookname: 'In the Middle of Nowhere',
  // price: 58758,
  // id: "a50-44c9-ba6",
  // author: 'James',
  // email: 'homenest@hotmail.com'
  // },
  // {
  // bookname: 'the Darkest side',
  // price: 521332,
  // id: "c03-469d-8f9",
  // author: 'Paul Wesley',
  // email: 'prabhuraj@mail.in'
  // },
  // {
  // bookname: 'The Chamber of secrets',
  // price: 57895,
  // id: "a50-44c9-ba6",
  // author: 'Bavithran',
  // email: 'bavithran07@hotmail.in'
  // },
  // {
  // bookname: 'Honeywell',
  // price: 51425,
  // id: "416-4071-b0e",
  // author: 'Sathish',
  // email: 'sathishsurya@gmail.com'
  // },
  // {
  // bookname: 'Lone Ranger',
  // price: 52139,
  // id: "6eb-48f3-844",
  // author: 'Ranjith',
  // email: 'ranjithanonymous@skype.com'
  // }
];

export const getBooks = () => {
  return list;
};

export const setBooks = data => {
  list.push(data);
};

export const updateBook = data => {
  for (var i = 0; i < list.length; i++) {
    if (list[i].id == data.id) {
      list[i].id = data.id;
      list[i].price = data.price;
      list[i].saleprice = data.saleprice;
      list[i].bookname = data.bookname;
      list[i].author = data.author;
      list[i].email = data.email;
    }
  }
};

export const getBookById = id => {
  const data = list.find(book => book.id === id);
  return data;
};
