const mongoose=require('mongoose');

const messageSchema=new mongoose.Schema({
    text:{
        type:String,
        default:"",
    },
    imageUrl:{
        type:String,
        default:"",
    },
    videoUrl:{
       type:String,
       default:true,
    },
    seen:{
        type:Boolean,
        default:false,
    },
},{
    timestamps:true
})

const ConversationSchema=new mongoose.Schema({
    sender:{
        type:mongoose.Schema.ObjectId,
        require:true,
        ref:'User'
    },
    receiver:{
        type:mongoose.Schema.ObjectId,
        require:true,
        ref:'User'
    },
    messages:[{
        type:mongoose.Schema.ObjectId,
        ref:'Message',
    }
    ]

},{
    timestamps:true
})

const MessageModel=mongoose.model("Message",messageSchema);
const ConversationModel=mongoose.model("Conversation",ConversationSchema);

module.exports={
    MessageModel,
    ConversationModel
}