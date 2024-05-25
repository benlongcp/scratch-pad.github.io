// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //








function makeContact(id, nameFirst, nameLast) {
    
    var contact = {
        'id': id,
        'nameFirst': nameFirst,
        'nameLast': nameLast
    }
    return contact;
} 

// var benLong = makeContact(1, "Ben", "Long");
// console.log(benLong);


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },


        addContact: function(contact){
            //pushes the contact to the contacts array
            contacts.push(contact)
            return contacts
        },


        findContact: function(fullName){
            //splits fullName into first and last names
            var nomFirst = fullName.split(" ")[0];
            console.log("first name: " + nomFirst)

            var nomLast = fullName.split(" ")[1];
            console.log("last name: " + nomLast)

            //iterate through contacts array
            console.log("contact list length: " + contacts.length)
            for (var i = 0; i < contacts.length; i++){

                //check if each object in the array contains the nameFirst and nameLast
                console.log("index #: " + i);
                if (contacts[i]['nameFirst'] === nomFirst && contacts[i]['nameLast'] === nomLast){
                    
                    console.log(contacts[i]);
                    return contacts[i];

                } 
                    return undefined;           
            }
        },


        //creates a funciton that takes an object parameter
        removeContact: function(contact){
            //loops through the contacts array
            for (var i = 0; i < contacts.length; i++){
                //if the contact id matches the contact id at the current index
                if (contacts[i]['id'] === contact['id']){
                    //return the contacts array spliced at the given index, removing one item
                    return contacts.splice(i, 1);
                }                  

            }

            return contacts
        },


        /*
        I - no inputs
        O - outputs a string
        C
        E        
        */

        //creates a function that takes no parameters
        printAllContactNames: function(){
            
            //make empty string to return later
            var conString = "";

            //loop through the contacts array
            for (var i = 0; i < contacts.length; i++){
                console.log("index: ", i)
                //concatenated strings of nameFirst and nameLast
                conString = conString + contacts[i]['nameFirst'] + " " + contacts[i]['nameLast'] + "\n";
                console.log("current conString: ", conString);
            }
        //chop off that last line break
        conString = conString.slice(0, conString.length -1);    
        console.log("conString Final: ", conString);
        //return concatenated formatted string
        return conString;
        }
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}