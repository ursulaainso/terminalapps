const ESC = '\x1B';
const reset = ESC+'[0m';
import chalk from 'chalk';
import inquirer from 'inquirer';


inquirer
  .prompt([
    {
        message: "What is your favourite color?",
        type:'list',
        name: 'colors',
        choices: ["Red", "Blue", "Orange", "Purple"],
    }
  ])
  .then((answers) => {
     console.log(answers);  
  })
  .catch((error) => {
    if (error.isTtyError) {

    } else {
    }
  }); 

inquirer
  .prompt([
    {
        message: "What is your show size?",
        type:'rawlist',
        name: 'shoe sizes',
        choices: ["36", "37", "38", "39", "40"],
    }
  ])
  .then((answers) => {
     console.log(answers);  
  })
  .catch((error) => {
    if (error.isTtyError) {

    } else {
    }
  });


  inquirer
  .prompt([
    {
        message: "Choose your pizza toppings",
        type:'checkbox',
        name: 'pizza',
        choices: ["parmesan", "olives", "mushrooms", "pineapple", "pickles"],
    }
  ])
  .then((answers) => {
     console.log(answers);  
  })
  .catch((error) => {
    if (error.isTtyError) {
        
    } else {
    }
  }); 
  

  inquirer
  .prompt([
    {
        message: "Do you wish to proceed?",
        type:'confirm',
        name: 'Confirmation',
    }
  ])
  .then((answers) => {
     console.log(answers);  
  })
  .catch((error) => {
    if (error.isTtyError) {
        
    } else {
    }
  }); 


inquirer
.prompt([
  {
      message: "Please enter your name",
      type:'input',
      name: 'name',
  }
])
.then((answers) => {
   console.log(answers);  
})
.catch((error) => {
  if (error.isTtyError) {
      
  } else {
  }
}); 


inquirer
.prompt([
  {
      message: "How old are you?",
      type:'number',
      name: 'age',
  }
])
.then((answers) => {
   console.log(answers);  
})
.catch((error) => {
  if (error.isTtyError) {
      
  } else {
  }
}); 



inquirer
.prompt([
  {
      message: "Please enter your password",
      type:'password',
      name: 'password',
      mask: true,
  }
])
.then((answers) => {
   console.log(answers);  
})
.catch((error) => {
  if (error.isTtyError) {
      
  } else {
  }
});



inquirer
.prompt([
  {
      message: "Continue editing your file",
      type:'editor',
      name: 'edit',
  }
])
.then((answers) => {
   console.log(answers);  
})
.catch((error) => {
  if (error.isTtyError) {
      
  } else {
  }
});



inquirer
.prompt([
  {
      message: "Error with your file",
      type:'expand',
      name: 'Error',
      choices: [
        {key: 'a',
         name: 'Save file',
         value: 'save file'   
        },
        {
         key: 'b',
         name: 'Copy file',
         value: 'copy file'   
        },
        {
         key: 'c',
         name: 'Delete file',
         value: 'delete file'  
        },
      ],
  },
])
.then((answers) => {
   console.log(answers);  
})
.catch((error) => {
  if (error.isTtyError) {
      
  } else {
  }
});
*/