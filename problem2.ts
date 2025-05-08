

function filterByRating(items:{title:string;rating:number}[]):{title:string;rating:number}[]{
    return items.filter((item:{title:string;rating:number})=>item.rating>=4)
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book D", rating: 4.0 },
  ];


const output = filterByRating(books)
console.log(output)