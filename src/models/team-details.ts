import { Schema, model } from "mongoose";

const playersSchema = new Schema({
  id: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
  stats: {
    matches: {
      type: Number,
      required: true,
      trim: true,
    },
    runs: {
      type: Number,
      required: true,
      trim: true,
    },
    wickets: {
      type: Number,
      required: true,
      trim: true,
    },
  },
},{
  _id:false,
});

const teamDetailsSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    team: {
      captainId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
      wicketKeeperId: {
        type: String,
        required: true,
        unique: true,
        trim: true,
      },
    },
    players: [playersSchema],
  },
  {
    versionKey: false,
  }
);

const TeamDetail = model("TeamDetail", teamDetailsSchema);

export { TeamDetail };
