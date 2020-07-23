// add_term_onfly_js

api.addButtonToToolbar({
    title: 'T',
    icon: 'message-square-add',
    shortcut: 'ctrl+]',
    action: async function() {
        var pInput = $(".aa-input")[0];
        var pWiki = pInput.value;  
        // console.log(pWiki);
        const termNoteId = await api.runOnServer(
            async pWiki => {
                const {note} = await api.createNote('SP72A8UBxwsM', pWiki,'');
                return note.noteId;
            },[pWiki]
        );
        //api.activateNote(termNoteId.noteId);
        // wait until the frontend is fully synced with the changes made on the backend above
        await api.waitUntilSynced();
        // copy
        if (navigator.clipboard) {
            navigator.clipboard.writeText(termNoteId);
        }
    }
});
      