/** site.js 
 * You should add your JavaScript code to this file.  
 * See the assignment description in Guide for what
 * your code needs to accomplish.
 */


document.body.onload = addElement;

function addElement () {
    

    standards.forEach(element => {
        var standardDiv = document.createElement("div");
        standardDiv.className = "stdItem";
                
        var i = document.createElement('p');
        i.textContent= element.identifier;

        var s = document.createElement('p');
        s.textContent = element.statement;

        var d = document.createElement('p');
        d.className = "description";
        d.textContent = element.description;

        var sc = document.createElement('p');
        sc.textContent = element.subconcept;

        var p = document.createElement('p');
        p.textContent = element.practices

        standardDiv.appendChild(i);
        standardDiv.appendChild(s);
        standardDiv.appendChild(d);
        standardDiv.appendChild(sc);
        standardDiv.appendChild(p);


        var currentDiv = document.getElementById("stdDiv");
        currentDiv.appendChild(standardDiv);

    });
}




