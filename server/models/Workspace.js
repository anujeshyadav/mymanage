const mongoose = require("mongoose");
const { Schema } = mongoose;

const WorkspaceSchema = Schema(
  {
    title: String,
    background: {
      type: String,
      default: "",
    },
    boards: [
      {
        type: Schema.Types.ObjectId,
        ref: "Board",
      },
    ],
    collabrators: {
      type: [String],
      default: [],
    },
    isDelete: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Workspace", WorkspaceSchema);
