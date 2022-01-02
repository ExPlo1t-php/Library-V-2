let title= document.getElementById("title");
let author= document.getElementById("author");
let price= document.getElementById("price");
let date= document.getElementById("date");
let lang= document.getElementById("lang");
let email= document.getElementById("email");
let type= document.getElementsByClassName("types");
let input = document.getElementsByTagName("input");
let table = document.getElementById("table");
let priceReg = new RegExp('(^(\\d{1,5},\\d{1,2})$)|(^(\\d{1,5})$)');
let dateReg = new RegExp('\\w');
let emailReg = new RegExp('(\\S+@[aA-zZ]+\\.\\w+)');
let books = [];
let book;


class opening{
     constructor(title, author, price, date, lang, email, type) {
          this.title = title;
          this.author = author;
          this.price = price;
          this.date = date;
          this.lang = lang;
          this.email = email;
          this.type = type;
     }
     
     openingDetail(){
          return `${this.title} is a ${this.type} in the ${this.lang} language, written by ${this.author} and published on the ${this.date}. The price of ${this.title} is ${this.price}MAD.`
     }
}



let checker = () => {
     let validator = 0;
     //general check (empty field)
     for (let i = 0; i< input.length; i++){
          if(input[i].value == ''){
               validator++;
               input[i].style.borderColor = "red";
          }else{
               input[i].style.borderColor = "green";
          }
     }
     //title check  
     if(title.value.length > 30){
          validator++;
          title.style.borderColor = "red";
     }
     //author check
     if(author.value.length > 30){
          validator++;
          author.style.borderColor = "red";
     }
     //price check
     if(priceReg.test(price.value) == false){
          validator++;
          price.style.borderColor = "red";
     }
     //date check 
     if(dateReg.test(date.value)== false){
          validator++;
          date.style.borderColor = "red";
     }
     //language check
     if(lang.value == ''){
          validator++;
          lang.style.borderColor = "red";
     }else{
          lang.style.borderColor = "green";
     }
     //email check
     if(emailReg.test(email.value)==false){
          validator++;
          email.style.borderColor = "red";
     }
     //type check
     let checked = false;
     for (var i = 0; i < type.length; i++) {
          if(type[i].checked){
               checked = true;
               var Stype = type[i].value;
               break;
          }else{
               checked = false;
          }
     }
     
     
     
     //removes the duplicated rows
     let tr ; 
     function rowRemover(p){
          console.log(table.rows.length);
          count = p.rows.length;
          for(let i = count -1 ; i> 0 ; i--){
              p.deleteRow(i);
          }
      }
      rowRemover(table); 



      //creates a table division
      function createTd(elem){
           let td = document.createElement('td');
           td.appendChild(document.createTextNode(elem));
           tr.appendChild(td);
          }
          
          //adds icons to the row
          function addIcons(){
               let td = document.createElement('td');
               let edit =  document.createElement('i');
               let info =  document.createElement('i');
               let trash =  document.createElement('i');
               edit.className +='fa fa-edit';
               edit.setAttribute('onclick','edit(this)')
               info.className +='fas fa-info-circle';
               info.setAttribute('onclick','info(this)')
               trash.className+='fa fa-trash';
               trash.setAttribute('onclick','remove(this)')
               td.appendChild(edit);
               td.appendChild(info);
               td.appendChild(trash);
               tr.appendChild(td);
          }
          
          
          
          if(validator == 0){
                book = new opening(title.value, author.value, price.value, date.value, lang.value, email.value, Stype);
               books.push(book);
               console.log(books);
               books.sort((a, b)=> {a.title > b.title})
               let keys = Object.keys(books[0]);  
               for (let book of books){   
                    tr = document.createElement('tr');  // create a tr for each key
                    for (let key of keys){
                         createTd(book[key]);
                    }
                    addIcons();
                    table.appendChild(tr);              // append everything to table 
               }
               
               
          }
          
          
     }
     

     //shows info (bugged)
     function info(t){
           parent = t.parentElement.parentElement;
           rowIndex = parent.rowIndex - 1;
          alert(book[rowIndex].openingDetail());
      }
               
//removes the selected row
function remove(l){
     let x = l.parentNode.parentNode.rowIndex;
     table.deleteRow(x);
}
          


//allows the manual editing of the row
function edit(element){
     parent = element.parentElement.parentElement.children;
     for (let i = 0 ; i < parent.length -1 ;i++){
         parent[i].setAttribute('contenteditable','true');
     }
     element.removeAttribute('onclick');
     element.classList.remove('fa-edit');
     element.className +=' fa-check';
     element.setAttribute('onclick','check(this)');
}


//disables the manual editing of the row
function check(element){
     parent = element.parentElement.parentElement.children;
     for (let i = 0 ; i < parent.length -1 ;i++){
         parent[i].setAttribute('contenteditable','false');
     }
     element.removeAttribute('onclick');
     element.classList.remove('fa-check');
     element.className +=' fa-edit';
     element.setAttribute('onclick','edit(this)');
}


               
          
     
          
          