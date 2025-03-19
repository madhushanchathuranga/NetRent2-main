const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema(
    {
        licenseNumber: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phoneNumber: { type: String, required: true },
        aboutMe: { type: String },
        socialMedia: {
            facebook: { type: String },
            instagram: { type: String },
            linkedin: { type: String },
            youtube: { type: String },
            tiktok: { type: String }
        },
        serviceProposal: [{ type: String }],
        marketingProposal: [{ type: String }],
        serviceFee: {
            residential: { rent: Number, sale: Number },
            commercial: { lease: Number, sale: Number },
            business: { sale: Number }
        }
    },
    { timestamps: true }
);

const Agent = mongoose.model('Agent', agentSchema);

module.exports = Agent;
