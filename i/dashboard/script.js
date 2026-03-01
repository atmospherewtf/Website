function updatePage(page) {
    let pageSet = false;
    for (const node of document.querySelectorAll(".page")) {
        if (node.id === page) {
            node.style.display = "block";
            pageSet = true;
        } else {
            node.style.display = "none";
        }
    }

    if (!pageSet) updatePage("account");
}

document.querySelectorAll(".tab").forEach((node) => {
    node.addEventListener('click', () => {
        updatePage(node.href.split("#")[1]);
    });
});

updatePage(window.location.hash.substring(1));

const modal = document.getElementById("modal");
document.getElementById("modal").querySelector("button").addEventListener('click', () => {
    modal.style.pointerEvents = "none";
    modal.style.opacity = "0";
});

function displayModal(title, description) {
    modal.querySelector("h2").innerText = title;
    modal.querySelector("p").innerText = description;
    modal.style.pointerEvents = "unset";
    modal.style.opacity = "100%";
}

// all code beyond this point is purely for showcase purposes and is not to be used in production.
document.getElementById("upload-skin").addEventListener('click', () => displayModal("Customization", "You do not have access to this feature."));
document.getElementById("upload-cape").addEventListener('click', () => displayModal("Customization", "You do not have access to this feature."));

let defaultButton = document.getElementById("skin-default");
let slimButton = document.getElementById("skin-slim");

defaultButton.addEventListener('click', () => {
    defaultButton.classList.add("disabled");
    slimButton.classList.remove("disabled");
});

slimButton.addEventListener('click', () => {
    defaultButton.classList.remove("disabled");
    slimButton.classList.add("disabled");
});

// document.getElementById("hwid-reset")