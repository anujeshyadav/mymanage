const mongoose = require("mongoose");

const { Schema } = mongoose;
const eventSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Public", "Private"],
      default: "Public",
      required: true,
      index: true,
    },
    app_color: {
      type: String,
    },
    start: {
      type: Date,
      required: true,
    },
    end: {
      type: Date,
      required: true,
    },
    notes: {
      type: String,
    },
    status: {
      type: Boolean,
      default: false,
    },
    // repeatedDates: {
    //     type: Array
    // },
    // repeatedConcurrence: {
    //     type: String
    // },
    groupInfoList: {
      type: Array,
    },
    studentInfo: {
      type: Array,
    },
    ticketType: {
      type: String,
      enum: ["Paid", "Free", ""],
    },
    eventBanner: {
      type: String,
    },
    tickeNotes: {
      type: String,
    },
    hostName: {
      type: String,
    },
    hostEmail: {
      type: String,
    },
    hostMobileNumber: {
      type: String,
    },
    hostAlternateNumber: {
      type: String,
    },
    eventLocation: {
      type: String,
    },
    eventStreet: {
      type: String,
    },
    eventCity: {
      type: String,
    },
    eventState: {
      type: String,
    },
    zip: {
      type: String,
    },
    ticketName: {
      type: String,
    },
    ticketType: {
      type: String,
    },
    ticketAvailableQuantity: {
      type: Number,
    },
    ticketPrice: {
      type: Number,
    },
    guests: [
      {
        name: {
          type: String,
          default: "",
        },
        email: {
          type: String,
          trim: true,
        },
        phone: {
          type: Number,
        },
        category: {
          type: String,
          default: "",
        },
        status: {
          type: String,
          default: "No reply",
        },
      },
    ],
    totalIncome: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
