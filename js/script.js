const tabs= document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')
const logo = document.getElementById('logo')


// Tabs Menu Event Listner
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

// Hamburger Button Listner.
btn.addEventListener('click', navToggle)

function onTabClick(e) {
    // Deactivate all tabs
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            'border-softRed',
            'border-b-4',
            'md:border-b-0'
        )
    })

    // Hide all of the panels
    panels.forEach((panel) => panel.classList.add('hidden'))

    // Activate the selected panel
    e.target.classList.add('border-softRed', 'border-b-4')
    const classString = e.target.getAttribute('data-target')
    document.getElementById('panels')
        .getElementsByClassName(classString)[0]
        .classList.remove('hidden')
}

// Display the Mobile Menu items
function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')

    if (menu.classList.contains('flex')) {
        logo.setAttribute('src', './images/logo-bookmark-footer.svg')
    } else {
        logo.setAttribute('src', './images/logo-bookmark.svg')
    }
}