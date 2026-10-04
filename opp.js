const searchInput =
    document.getElementById("searchInput");

const searchBtn =
    document.getElementById("searchBtn");

const opportunityCards =
    document.querySelectorAll(".opportunity-card");

const noResults =
    document.getElementById("noResults");


function searchOpportunities() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    let found = false;


    opportunityCards.forEach(card => {

        const title =
            card.dataset.title.toLowerCase();

        const category =
            card.dataset.category.toLowerCase();

        const content =
            card.innerText.toLowerCase();


        if (
            title.includes(searchText) ||
            category.includes(searchText) ||
            content.includes(searchText)
        ) {

            card.style.display = "block";

            found = true;

        } else {

            card.style.display = "none";

        }

    });


    if (found) {

        noResults.style.display = "none";

    } else {

        noResults.style.display = "block";

    }

}


searchBtn.addEventListener(
    "click",
    searchOpportunities
);


searchInput.addEventListener(
    "keyup",
    function(event) {

        if (event.key === "Enter") {

            searchOpportunities();

        }

    }
);
// loginbutton

function openlogin(){
    window.location.href="login.html";
}

/* ================= CATEGORY FILTER ================= */

const categoryFilter =
    document.getElementById("categoryFilter");


categoryFilter.addEventListener(
    "change",
    function() {

        const selected =
            this.value;

        let found = false;


        opportunityCards.forEach(card => {

            const category =
                card.dataset.category;


            if (
                selected === "All" ||
                category === selected
            ) {

                card.style.display = "block";

                found = true;

            } else {

                card.style.display = "none";

            }

        });


        if (found) {

            noResults.style.display = "none";

        } else {

            noResults.style.display = "block";

        }

    }
);


/* ================= SAVE BUTTON ================= */

const saveButtons =
    document.querySelectorAll(".save-btn");


saveButtons.forEach(button => {

    button.addEventListener(
        "click",
        function() {

            this.classList.toggle("saved");


            if (
                this.classList.contains("saved")
            ) {

                this.innerHTML = "♥";

            } else {

                this.innerHTML = "♡";

            }

        }
    );

});


/* ================= CATEGORY CARDS ================= */

const categoryCards =
    document.querySelectorAll(".category-card");


categoryCards.forEach(card => {

    card.addEventListener(
        "click",
        function() {

            const category =
                this.dataset.category;


            categoryFilter.value =
                category;


            categoryFilter.dispatchEvent(
                new Event("change")
            );


            document
                .getElementById("opportunities")
                .scrollIntoView({
                    behavior: "smooth"
                });

        }
    );

});


/* ================= VIEW OPPORTUNITY ================= */

const applyButtons =
    document.querySelectorAll(".apply-btn");


applyButtons.forEach(button => {

    button.addEventListener(
        "click",
        function() {

            alert(
                "Opportunity details will open here."
            );

        }
    );

});


/* ================= MOBILE MENU ================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelector(".nav-links");


menuBtn.addEventListener(
    "click",
    function() {

        if (
            navLinks.style.display === "flex"
        ) {

            navLinks.style.display = "none";

        } else {

            navLinks.style.display = "flex";

            navLinks.style.flexDirection =
                "column";

            navLinks.style.position =
                "absolute";

            navLinks.style.top = "70px";

            navLinks.style.left = "0";

            navLinks.style.width = "100%";

            navLinks.style.background =
                "white";

            navLinks.style.padding =
                "20px";

        }

    }
);