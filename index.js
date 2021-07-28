// const Person=require('./person');// person is the 'module/class name that is export
// const person =new Person("Huzaifa",30);
// person.getData();

// reading data form the file 

const fs=require('fs');
fs.readFile('file.txt','utf8',(error,data)=>{
    if(!data) throw error
    console.log(data);
});

