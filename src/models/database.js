import {connect} from 'mongoose';

const connectDB = () => {
    return connect('mongodb+srv://athletics:elassouri@athletics.dgnbd.mongodb.net/athletics?retryWrites=true&w=majority',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
}

export default connectDB;
