    // Get references to the button and the section to scroll to
    const toggleButton = document.getElementById('Kahvaltı_but');
    const sectionToScroll = document.getElementById('Kahvaltı_sec');
    const toggleButton_soğuk = document.getElementById('soğuk_but');
    const sectionToScroll_soğuk = document.getElementById('soğuk_sec');
    const toggleButton_sıcak = document.getElementById('sıcak_but');
    const sectionToScroll_sıcak = document.getElementById('sıcak_sec');
    // Add a click event listener to the button
    toggleButton.addEventListener('click', () => {
        // Toggle the display property of the section
        

        if (sectionToScroll.style.display === 'none' || sectionToScroll.style.display === '') {
            sectionToScroll_soğuk.style.display ='none';
            sectionToScroll_sıcak.style.display ='none';
            sectionToScroll.style.display = 'block';
        } else {
            sectionToScroll.style.display = 'none';
        }

        // Scroll to the section
        sectionToScroll.scrollIntoView({ behavior: 'smooth' });
    });

    // Get references to the button and the section to scroll to
    // Add a click event listener to the button
    toggleButton_soğuk.addEventListener('click', () => {
        sectionToScroll.style.display == 'none';

        // Toggle the display property of the section
        if (sectionToScroll_soğuk.style.display === 'none' || sectionToScroll_soğuk.style.display === '') {
            sectionToScroll.style.display ='none';
            sectionToScroll_sıcak.style.display ='none';

            sectionToScroll_soğuk.style.display = 'block';
        } else {
            sectionToScroll_soğuk.style.display = 'none';
        }

        // Scroll to the section
        sectionToScroll_soğuk.scrollIntoView({ behavior: 'smooth' });
    });

        // Get references to the button and the section to scroll to
    // Add a click event listener to the button
    toggleButton_sıcak.addEventListener('click', () => {
        sectionToScroll.style.display == 'none';
        sectionToScroll_soğuk.style.display ='none';

        // Toggle the display property of the section
        if (sectionToScroll_sıcak.style.display === 'none' || sectionToScroll_sıcak.style.display === '') {
            sectionToScroll.style.display ='none';

            sectionToScroll_sıcak.style.display = 'block';
        } else {
            sectionToScroll_sıcak.style.display = 'none';
        }

        // Scroll to the section
        sectionToScroll_sıcak.scrollIntoView({ behavior: 'smooth' });
    });


    const searchInput = document.getElementById('searchInput');
    const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    cards.forEach((card) => {
        const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
        if (cardTitle.includes(searchTerm)) {
            card.style.display = 'block'; // Show matching card
        } else {
            card.style.display = 'none'; // Hide non-matching card
        }
    });
});

const searchInput_soguk = document.getElementById('searchInput_soguk');
const cards_soguk = document.querySelectorAll('.card');

searchInput_soguk.addEventListener('input', () => {
const searchTerm = searchInput_soguk.value.toLowerCase();

cards_soguk.forEach((card) => {
    const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
    if (cardTitle.includes(searchTerm)) {
        card.style.display = 'block'; // Show matching card
    } else {
        card.style.display = 'none'; // Hide non-matching card
    }
});
});

const searchInput_sıcak = document.getElementById('searchInput_sıcak');
const cards_sıcak = document.querySelectorAll('.card');

searchInput_sıcak.addEventListener('input', () => {
const searchTerm = searchInput_sıcak.value.toLowerCase();

cards_sıcak.forEach((card) => {
    const cardTitle = card.querySelector('.card-title').textContent.toLowerCase();
    if (cardTitle.includes(searchTerm)) {
        card.style.display = 'block'; // Show matching card
    } else {
        card.style.display = 'none'; // Hide non-matching card
    }
});
});

function filterTema() {
    var input, filter, buttons, button, i;
    input = document.getElementById("searchInput_tema");
    filter = input.value.toUpperCase();
    buttons = document.querySelectorAll("#tema button");

    for (i = 0; i < buttons.length; i++) {
        button = buttons[i];
        if (button.innerHTML.toUpperCase().indexOf(filter) > -1) {
            button.style.display = "";
        } else {
            button.style.display = "none";
        }
    }
}

function go_header(){
    const sectionToScroll = document.getElementById('Kahvaltı_sec');
    const sectionToScroll_soğuk = document.getElementById('soğuk_sec');
    const sectiontoscroll_header = document.getElementById('Header');
    const sectionToScroll_sıcak = document.getElementById('sıcak_sec');
    sectionToScroll_sıcak.style.display ='none';
    sectionToScroll_soğuk.style.display ='none';
    sectionToScroll.style.display = 'none';
    sectiontoscroll_header.scrollIntoView({ behavior: 'smooth' });

}