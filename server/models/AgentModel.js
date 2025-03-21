const mongoose = require('mongoose');

const agentSchema = new mongoose.Schema(
    {
        licenseNumber: { type: String, required: true },
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phoneNumber: { type: String, required: true },
        verified: { type: Boolean, default: false },
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
        profilePicture: { type: String },
        totalSold: { type: Number, default: 0 },
        totalRented: { type: Number, default: 0 },
        totalSelected: { type: Number, default: 0 },
        views: { type: Number, default: 0 },
        rating: { type: Number, default: 0 },
    },
    { timestamps: true }
);

const Agent = mongoose.model('Agent', agentSchema);

module.exports = Agent;
