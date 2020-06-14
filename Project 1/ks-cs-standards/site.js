/** site.js 
 * You should add your JavaScript code to this file.  
 * See the assignment description in Guide for what
 * your code needs to accomplish.
 */


document.body.onload = addElement;
const container = document.getElementById("container");



function addElement () {
    

    standards.forEach(element => {
        var standardDiv = document.createElement("div");
        standardDiv.className = "stdItem";
                
        /*var iDiv = document.createElement('div');
        iDiv.className = "column one";
        var i = document.createElement('p');
        i.innerHTML= element.identifier;
        iDiv.appendChild(i);
        standardDiv.appendChild(iDiv);*/

        var iDiv = document.createElement('div');
        iDiv.className = "column one"
        var i = document.createElement('p');
        i.innerHTML = element.identifier;
        iDiv.appendChild(i);
        standardDiv.appendChild(iDiv);


        var sDiv = document.createElement('div');
        sDiv.className = "column two"

        var s = document.createElement('p');
        s.innerHTML = element.statement;
        sDiv.appendChild(s);

        var d = document.createElement('p');
        d.innerHTML = element.description;
        sDiv.appendChild(d);



        var sc = document.createElement('p');
        sc.textContent = element.subconcept;
        sc.className = "column three";

        var p = document.createElement('p');
        p.textContent = element.practices
        p.className = "column four"

        standardDiv.appendChild(d);
        standardDiv.appendChild(sc);
        standardDiv.appendChild(p);


        var currentDiv = document.getElementById("stdDiv");
        currentDiv.appendChild(standardDiv);

    });
}




