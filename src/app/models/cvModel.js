const mongoose = require('mongoose')

const cvSchema = new mongoose.Schema({
    // fullname: {
    //     type: String,
    //     required: true
    // },
    // email: {
    //     type: String,
    //     required: true
    // },
    // phoneNo: {
    //     type: String,
    //     required: true
    // },
    // skills: [{
    //     type: String
    // }],
    // jobTitle: {
    //     type: String
    // },
    // location: {
    //     type: String
    // },
    // linkedIn: {
    //     type: String
    // },
    // education: 
    //     {
    //         course: {
    //             type: String
    //         },
    //         startDate: {
    //             type: Date
    //         },
    //         endDate: {
    //             type: Date
    //         }
    //     },
    
    // workExperience: 
    //     {
    //         employer: {
    //             type: String
    //         },
    //         summary: {
    //             type: String
    //         },
    //         startDate: {
    //             type: Date
    //         },
    //         endDate: {
    //             type: Date
    //         }
    //     },
    
    // project: 
    //     {
    //         title: {
    //             type: String
    //         },
    //         summary: {
    //             type: String
    //         },
    //         startDate: {
    //             type: Date
    //         },
    //         endDate: {
    //             type: Date
    //         }
    //     },
    
    // achievements: {
    //     type: String
    // }

    response :{
        type:String
    }
});

module.exports = mongoose.models.CV || mongoose.model('CV', cvSchema);

