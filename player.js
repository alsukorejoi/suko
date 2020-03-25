document.getElementById("floating-btn").addEventListener("click", function() {
    toggle(document.querySelectorAll(".tab"));
});

function toggle(elements, specifiedDisplay) {
    var element, index;

    elements = elements.length ? elements : [elements];
    for (index = 0; index < elements.length; index++) {
        element = elements[index];

        if (isElementHidden(element)) {
            element.style.display = "";

            // If the element is still hidden after removing the inline display
            if (isElementHidden(element)) {
                element.style.display = specifiedDisplay || "block";
            }
        } else {
            element.style.display = "none";
        }
    }

    function isElementHidden(element) {
        return (
            window
                .getComputedStyle(element, null)
                .getPropertyValue("display") === "none"
        );
    }
}

function openProvider(evt, providerName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(providerName).style.display = "contents";
    evt.currentTarget.className += " active";
}
document.getElementById("floating-btn").click();
document.getElementById("KotakAjaibOpen").click();