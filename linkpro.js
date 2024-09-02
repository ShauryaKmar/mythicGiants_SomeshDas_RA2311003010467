document.addEventListener('DOMContentLoaded', () => {
    const addLinkButton = document.getElementById('addLinkButton');
    const linkList = document.getElementById('linkList');

    addLinkButton.addEventListener('click', () => {
        const linkTitle = document.getElementById('linkTitle').value.trim();
        const linkURL = document.getElementById('linkURL').value.trim();

        if (!linkTitle || !linkURL) {
            alert('Please provide both title and URL.');
            return;
        }

        // Create list item
        const listItem = document.createElement('li');
        listItem.className = 'list-group-item';

        // Create link element
        const link = document.createElement('a');
        link.href = linkURL;
        link.target = '_blank';
        link.textContent = linkTitle;
        link.className = 'link-title';

        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = '×'; // Remove button icon
        removeButton.className = 'remove-btn';
        removeButton.onclick = () => listItem.remove();

        // Append link and remove button to list item
        listItem.appendChild(link);
        listItem.appendChild(removeButton);

        // Append list item to list
        linkList.appendChild(listItem);

        // Clear input fields
        document.getElementById('linkTitle').value = '';
        document.getElementById('linkURL').value = '';
    });
});
