import { Schema, model } from "mongoose";

const teamSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  teamName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  winningYears: Array,
  venue: {
    type: String,
    required: true,
    trim: true,
  },
},
{
    versionKey:false
});

const Team = model("Team", teamSchema);

export { Team };
