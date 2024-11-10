function findText() {
    console.log("Find function called");

  
    const searchText = document.getElementById("searchInput").value;
    const textElement = document.getElementById("text");
    const originalText = textElement.textContent;


    if (searchText === "") {
        alert("Please enter some text to search.");
        return;
    }


    const regex = new RegExp(searchText, "gi");


    const highlightedText = originalText.replace(regex, (match) => `<span class="highlight">${match}</span>`);

    textElement.innerHTML = highlightedText;
}
