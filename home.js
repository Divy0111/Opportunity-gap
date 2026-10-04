/* ================= PROFILE DROPDOWN ================= */

const profileBtn =
    document.getElementById("profileBtn");

const profileBox =
    document.getElementById("profileBox");


profileBtn.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();

        profileBox.classList.toggle("show");

    }
);


/* Close profile box when clicking outside */

document.addEventListener(
    "click",
    function(event) {

        if (
            !profileBox.contains(event.target) &&
            !profileBtn.contains(event.target)
        ) {

            profileBox.classList.remove("show");

        }

    }
);


/* ================= LOGOUT ================= */

const logoutBtn =
    document.getElementById("logoutBtn");


logoutBtn.addEventListener(
    "click",
    function() {

        window.location.href =
            "login1.html";

    }
);


/* ================= SEARCH ================= */

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

        }

        else {

            card.style.display = "none";

        }

    });


    if (found) {

        noResults.style.display = "none";

    }

    else {

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

            if (
                selected === "All" ||
                card.dataset.category === selected
            ) {

                card.style.display = "block";

                found = true;

            }

            else {

                card.style.display = "none";

            }

        });


        noResults.style.display =
            found ? "none" : "block";

    }
);


/* ================= SAVE BUTTON ================= */

const saveButtons =
    document.querySelectorAll(".save-btn");


saveButtons.forEach(button => {

    button.addEventListener(
        "click",
        function() {

            if (
                this.innerHTML === "♡"
            ) {

                this.innerHTML = "♥";

                this.style.color = "red";

            }

            else {

                this.innerHTML = "♡";

                this.style.color = "";

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
