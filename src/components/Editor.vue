<template>
  <div id="note-editor">
    <textarea
      :value="activeNoteText"
      @input="editNote"
      class="form-control">
    </textarea>
  </div>
</template>

<script>
import { editNote } from '../../vuex/actions'

export default {
  vuex: {
    getters: {
      activeNoteText: ({ NoteManagerState }) => NoteManagerState.activeNote.text
    },
    actions: {
      editNote
    }
  }
}
</script>
