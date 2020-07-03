// add_term_freefly_js
api.addButtonToToolbar({
    title: '@W',
    icon: 'calendar',
    shortcut: 'ctrl+]',
    action: async function() {
        // var pInput = $("#add-link-note-autocomplete")[0];
        var pInput = $(".note-autocomplete-input")[0];
        // var pWiki0 = .value;
        var pWiki = pInput.value;
        console.log(pWiki);
        const termNoteId = await api.runOnServer(
            async pWiki => {
                //const {note} = await api.createNote('gvifYX9nZG5r', pWiki,'');
                // __wiki_tmp node
                const {note} = await api.createNote('SP72A8UBxwsM', pWiki,'');
                return note.noteId;
            },[pWiki]
        );
        //api.activateNote(termNoteId.noteId);
        // wait until the frontend is fully synced with the changes made on the backend above
        await api.waitUntilSynced();
        //var myclip = new ClipboardJS('.note-autocomplete-input');
        pInput.value=pWiki;
        pInput.select();

        if (navigator.clipboard) {
            navigator.clipboard.writeText(termNoteId);
        }
    }
});
      