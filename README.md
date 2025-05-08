আসসালামু আলাইকুম, বর্তমানে আমারা যারা Typescript নিয়ে কাজ করি প্রায়ই আমাদের বিভিন্ন টাইপ নিয়ে কাজ করা লাগে। তাই আমরা আজকে দৈনন্দিন ব্যবহৃত টাইপগুলার মধ্যে থেকে interfaces এবং types এর পার্থক্য ও union এবং intersection নিয়ে আলোচনা করব ।

interface vs type 

প্রধান পার্থক্য ঃ interface ডিক্লেয়ার করা হয় interface Name {
    key:datatypes
}  এর মাধ্যমে । 
যেমন: interface Person {
    name:string;
    age:number  
}
আর type এর ডিক্লেয়ার এর ক্ষেত্রে (যদি অব্জেক্ট এর টাইপ ডিক্লেয়ার করা হয়) শুধু {} ব্রাকেটের পরে = দেওয়া হয় । primitive values,function এবং tuples এর ক্ষেত্রে সহজেই টাইপ ডিক্লেয়ার করা যায় । 
যেমন , type Greet =  (name:string,age:number)=>string । 
এমন কোনো বাধ্যবাধকতা নাই যে interface ই ব্যবহার করতে হবে অথবা type ই ব্যবহার করতে হবে কোনো প্রোজেক্টে । এইটা ব্যক্তি থেকে ব্যাক্তি আলাদা হয় । তবে বেশির ভাগ ডেভেলপার object data type বা class এর টাইপ এর ক্ষেত্রে interface ব্যবহারে বেশি পছন্দ করে আর অন্যান্য primitive values এর ক্ষেত্রে type ই বেশি ব্যবহার হয় ।

type এর ব্যবহারঃ Typescript এ types variables এর type define করতে ব্যবহৃত হয়।
এতে রয়েছে কিছু built-in types, user-defined types এবং type aliases এর মত অ্যাডিশনাল ফিচার । Typescript এর মৌলিক ধারনা হলো , string,boolean এবং number । যেমন ঃ type name = string , isAdmin = boolean, roll = number;। এছাড়াও অব্জেক্ট,ক্লাসের ক্ষেত্রেও type define করা যায় । যেমন ঃ type Person = {
    name:string;
    gender:string;
    age:number;
}


interface এর ব্যবহারঃ interface দিয়ে সাধারনত অব্জেক্টের ও ক্লাসের টাইপ ডিফাইন করা হয় । যেমন ঃ interface Person {
    name:string;
    age:number;
    gender:string;
}

interface Person{
    name:string;
    age:string;
    greet():string;
}
class Student implements Person{
    name:string;
    age:number:
    constructor(name:string,age:number){
        this.name = name;
        this.age = age;
    }
    greet(){
        return `Welcome ${this.name}`
    }
}

    Extend ফিচার ঃ interface এ extends ফিচার আছে যার মাধ্যমে অন্য কোনো ইন্টারফেচের সকল প্রোপারটি ইনহেরিট করা যায় । 
    যেমন ঃ interface Person{
        name:string;
        email:string;
    }  
    এখন এই Person interface এর সকল প্রোপার্টিগুলা আমি যদি অন্য কোনো টাইপে ইঙ্কলুড করতে চাই তাহলে শুধু extends করলেই হয়ে যাবে । 
    যেমন ঃ interface Student extends Person{
        roll:string;
    }
    এইখানে এই Student টাইপ Person এর সকল টাইপ ইনহেরিট করেছে । 

    Merging ফিচার ঃ interface এ যদি একিই নামের interface ডিক্লেয়ার করা হয় তাহলে ঐ সব প্রোপার্টি এক নামে মার্জ হয়ে যায় । 
    যেমন ঃ interface Person {
        name:string,
        age:number
    }
    interface Person {
        gender:string
    }
    এই দুইটা এখন একটা Person এর আন্ডারে হয়ে যাবে । 


union and intersection 

union : union ও অসাধারন একটা ফিচার টাইপ্সক্রিপ্টে । এর মাধ্যমে দুইটা টাইপের ক্ষেত্রে যেকোনো একটাকে প্রাধান্য দেওয়া হয় (এইখানে অনেক টাইপের ভিতর একটা কে প্রাধান্য দেওয়া হয়)। 
যেমন ঃ type Man = {
    name:string;
    age:string;
}

type Person = {
    height: string;
    weight: string
}
এইখানে type NewStudent = Man | Person 
এইখানে একটা সমস্যা আছে , সেইটা হচ্ছে যদি আমি এই NewStudent টাইপ কোনো ভ্যারিয়েবলে ডিফাইন করি তাহলে সেই ভ্যারিয়েবলে এই দুইটার সব property ই সেই ভ্যারিয়েবলে ডিফাইন করা যাবে । যদি মনে করেন যে এই ভ্যারিয়েবলে Man অথবা Person এর যেকোনো একটা টাইপের ডাটা দেওয়া যাবে তাহলে এই টাইপে একটা অতিরিক্ত  attribute দিতে হবে সেটা হলো type:"man" ও type:"person"।
যেমন ঃ type Man = {
    type:"man";
    name:string;
    age:string;
}

type Person = {
    type:"person"
    height: string;
    weight: string
}

এইবার যখনি আপনি এই newStudent এ প্রথম ডাটা type এর ভ্যালু দিবেন তখন Typescript নিজে থেকেই বুজে যাবে যে আপনি কোন টাইপের ডাটা দিতে চাচ্ছেন তখন অন্য type এর ডাটা দিতে গেলে এরর দিবে । 

intersection:  Typescript এ intersection বহুল ব্যবহৃত একটা টাইপ । এইটা Typescript এর type কে একসাথে করে। 
যেমন ঃ type Man = {
    name:string;
    age:string;
}

type Person = {
    height: string;
    weight: string
}

এখন যদি আমি চাই এই দুই টাইপ এক সাথে মার্জ হয়ে একটা টাইপ হয়ে যাক তাহলে আমি intersection ব্যবহার করব আর টাইপস্ক্রিপ্টে intersection করা হয় "&" এর মাধ্যমে । 
যেমন ঃ type Student = Man & Person । এখন, এই টাইপ এই Man ও Person এর সব টাইপ 
একসাথে রাখবে । 


সবশেষে, Typescript এর types এবং interfaces খুবিই powerful tool যেইটা ডেভেলপার কে সব সময় clean , efficient ও maintanable কোড লিখতে অতন্দ্র প্রহরির মত পাশে থেকে গাইড করে যাবে । এদের মধ্যে অনেক মিল আছে তবে প্রধান পার্থক্য ও use cases এর কারনে বিভিন্ন ক্ষেত্রে এদের ব্যবহার করা হয় । 
আর union ও intersection ও ডেভেলপমেন্টে প্রচুর ব্যবহৃত হয়।




