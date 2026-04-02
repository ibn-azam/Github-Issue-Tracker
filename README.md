
 <!--Answer The Questions  -->
    - 1️⃣ What is the difference between var, let, and const?
    Answer : In javaScript,var let and const are used to declare variables,but they behave differently.
    var is a function scoped variable so it ignores block scope and can be redeclared.On the other hand,let and const are block scoped variable and can not be redeclared.We can only reassign data in var and let variables.Const variable must be initialied.So,these all are the difference among them.

    - 2️⃣ What is the spread operator (...)?
    Answer : The spread operator expand the elements of arrays,objects and strings into individual elements.For Example,
                const name = "Hello";
                const letters = [...name];
    We will get individual letters. 

    - 3️⃣ What is the difference between map(), filter(), and forEach()?
    Answer : map(),filter() and forEach() these all are array methods.In javaScript,these all are used to loop through arrays,however their behaviour and purpose are different.map() is used for transforming elements and getting a new array,while filter() method return specific elements when its condition is true and forEach() method execute element but never return a new array.

    - 4️⃣ What is an arrow function?
    Answer : An arrow function is a shorter syntax for writing functions in javaScript.This was introduced in ECMAScript 6.For Example,
                const displayGithubIssues = (issues) => {
                    console.log(issues);
                }
                
    - 5️⃣ What are template literals?
    Answer : Template literals are a way to create strings with embedded variables and expressions using backticks ( ` ) instead of quotes.This function is a modern function of ECMAScript 6.For Example,
                        `The ${product} costs $${price}`

---












