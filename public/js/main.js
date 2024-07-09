var levelLinks = document.querySelectorAll('.level-type a');

levelLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        var testLevel = link?.textContent.toLowerCase();
        var levelParent = link.parentNode.parentNode;
        var testCategory =
            Tests[levelParent.querySelector('.column-heading')?.textContent];

        sendTestData(testLevel, testCategory);
    });
});
