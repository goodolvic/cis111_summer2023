window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest
    var url = "https://wp.zybooks.com/quotes.php?topic=" + topic + "&count=" + count;
    var myQuote = new XMLHttpRequest();
    
    myQuote.addEventListener("load", responseReceivedHandler);
    myQuote.responseType = "json";
    myQuote.open("GET", url, true);
    myQuote.send();
}

// TODO: Add responseReceivedHandler() here
function responseReceivedHandler() {
    var html = "";
    if (this.response.error) {
        html = this.response.error;
    }
    else {
        html += "<ol>";

        for (let i = 0; i < this.response.length; i++) {
            html += `<li>${this.response[i].quote} - ${this.response[i].source}</li>`;
        }
        html += "</ol>";
    }
    document.querySelector("#quotes").innerHTML = html;
}