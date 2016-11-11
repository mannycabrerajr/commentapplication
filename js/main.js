function submitComment(){
	// get info from inputName field
	var name = document.getElementById("inputName").value
	// turn inputName into text/string
	var nameText = document.createTextNode(name)
	// get info from inputComment field
	var comment = document.getElementById("inputComment").value
	// turn inputComment into text/string
	var commentText = document.createTextNode(comment)
	// create li element
	var listItem = document.createElement("li")
	// add class to list element
	listItem.className = "list-group-item"
	// create h3
	var newUserName = document.createElement("h3")
	// nameText gets h3 properties
	newUserName.appendChild(nameText)
	// create p
	var newComment = document.createElement("p")
	// commentText gets p properties
	newComment.appendChild(commentText)
	
	// username added to list
	listItem.appendChild(newUserName)
	// comment added to list
	listItem.appendChild(newComment)
	// contents of list added to UL "comment"
	document.getElementById("comment").appendChild(listItem)

}

/*function removeComment(){
	var listItem = ['comment']
	listItem.pop();
	document.getElementById("comment[i]").innerHTML = listItem
}*/




/*function submitComment(){
	// get info from inputName field
	var name = document.getElementById("inputName").value
	// turn inputName into text/string
	var nameText = document.createTextNode(name)
	// get info from inputComment field
	var comment = document.getElementById("inputComment").value
	// turn inputComment into text/string
	var commentText = document.createTextNode(comment)
	// create li element
	var listItem = document.createElement("li")
	// add class to list element
	listItem.className = "list-group-item"
	// create h3
	var newUserName = document.createElement("h3")
	// nameText gets h3 properties
	newUserName.appendChild(nameText)
	// create p
	var newComment = document.createElement("p")
	// commentText gets p properties
	newComment.appendChild(commentText)
	
	// username added to list
	listItem.appendChild(newUserName)
	// comment added to list
	listItem.appendChild(newComment)
	// contents of list added to UL "comment"
	document.getElementById("comment").appendChild(listItem)

}*/


