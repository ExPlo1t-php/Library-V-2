let title= document.getElementById("title");
let author= document.getElementById("author");
let price= document.getElementById("price");
let date= document.getElementById("date");
let lang= document.getElementById("lang");
let email= document.getElementById("email");
let type= document.getElementsByClassName("types");
let input = document.getElementsByTagName("input");
let priceReg = new RegExp('(^(\\d{1,5},\\d{1,2})$)|(^(\\d{1,5})$)');
let dateReg = new RegExp('\\w');
let emailReg = new RegExp('(\\S+@[aA-zZ]+\\.\\w+)');
let dblog = [];


class opening{
     constructor(title, author, price, date, lang, email, type) {
          this.title = title;
          this.author = author;
          this.price = price +' MAD';
          this.date = date;
          this.lang = lang;
          this.email = email;
          this.type = type;
     }
     
     openingDetail(){
          return `The ${this.title} is a ${Stype} in ${this.lang}, written by ${this.author} and published on ${this.date}. the price of ${this.title} is ${this.price}`;
     }
}



let checker = () => {
     let validator = 0;
               //general check (empty field)
               // for (let i = 0; i< input.length; i++){
               //      if(input[i].value == ''){
               //           validator++;
               //           input[i].style.borderColor = "red";
               //      }else{
               //           input[i].style.borderColor = "green";
               //      }
               // }
               // //title check  
               // if(title.value.length > 30){
               //      validator++;
               //      title.style.borderColor = "red";
               // }
               // //author check
               // if(author.value.length > 30){
               //      validator++;
               //      author.style.borderColor = "red";
               // }
               // //price check
               // if(priceReg.test(price.value) == false){
               //      validator++;
               //      price.style.borderColor = "red";
               // }
               // //date check 
               // if(dateReg.test(date.value)== false){
               //      validator++;
               //      date.style.borderColor = "red";
               // }
               // //language check
               // if(lang.value == ''){
               //      validator++;
               //      lang.style.borderColor = "red";
               // }else{
               //      lang.style.borderColor = "green";
               // }
               // //email check
               // if(emailReg.test(email.value)==false){
               //      validator++;
               //      email.style.borderColor = "red";
               // }
               // //type check
               //      let checked = false;
               //     for (var i = 0; i < type.length; i++) {
               //         if(type[i].checked){
               //             checked = true;
               //             var Stype = type[i].value;
               //             break;
               //         }else{
               //             checked = false;
               //         }
               //     }

                   if(validator == 0){
                        let Stype = 12;
                        var book = new opening(title.value, author.value, price.value, date.value, lang.value, email.value, Stype);
                        console.log(book);
                        let row = table.insertRow(-1);
                        let tr;
                        function addor(element){
                         let td = table.createElement('td');
                         td.appendChild(document.createTextNode(element));
                         tr.appendChild(td);
                        }
                        dblog.push(book);
                        var keys = Object.keys(dblog[0]);
                        row.className +='row';
                      
                        for (let b of  dblog) {
                            tr = document.createElement('tr');
                              for(let key of keys){
                                   addor(book[key]);
                              }

                              table.appendChild(tr);
                        }
                   }
               

          }



          let remove = (t)=>{
               let i = t.parentNode.parentNode.rowIndex;
               table.deleteRow(i);
          }


          let edit = ()=>{

          }

           function setdata(){  
                localStorage.setItem('bookList', dblog)
               }
          function getdata(){
               localStorage.getItem('bookList')
          }

          

