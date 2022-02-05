const mongoose = require('mongoose');

const NotesSchema = new Schema({
      title:{
          type:String,
          required:true
      },
      description:{
        type:String,
        required:true
    },
     tag:{
        type:String,
        Default:"General"
    },
    date:{
        type:Date,
        Default:Date.now
    },
  });

  module.exports=mongoose.model('notes',NotesSchema);