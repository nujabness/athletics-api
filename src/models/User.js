import {Schema, model} from 'mongoose';

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Schema.Types.ObjectId,
        ref: 'TypeUser',
        default: '5f6642e1284a85f3f5367dfb'
    },
    nom_athlete: {
        type: String,
        default: 'default',
    },
    prenom_athlete: {
        type: String,
        default: 'default',
    },
    sexe_athlete: {
        type: String,
        default: 'HOMME'
    },
    nationalite_athlete: {
        type: Schema.Types.ObjectId,
        ref: 'Nationalite',
        default: '5f6643b1284a85f3f5367dfc'

    }
});

const User = model('User', userSchema)

export default User;
