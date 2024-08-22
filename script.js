document.getElementById('addNote').addEventListener('click', function() {
    const noteInput = document.getElementById('noteInput');
    const noteText = noteInput.value;

    if (noteText) {
        const notesContainer = document.getElementById('notesContainer');

        const noteDiv = document.createElement('div');
        noteDiv.className = 'note';
        noteDiv.textContent = noteText;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '🗑️';
        deleteBtn.onclick = function() {
            notesContainer.removeChild(noteDiv);
        };

        noteDiv.appendChild(deleteBtn);
        notesContainer.appendChild(noteDiv);
        noteInput.value = '';
    } else {
        alert('Please enter a note!');
    }
});