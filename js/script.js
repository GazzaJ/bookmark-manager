const tabs= document.querySelectorAll('.tab')
const panels = document.querySelectorAll('.panel')

// Tabs Menu Event Listner
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

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