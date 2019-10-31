import {
    GraphQLID,
    GraphQLObjectType,
    GraphQLString,
} from 'graphql';


const UserType = new GraphQLObjectType({
    name: 'UserType',
    fields: {
        email: {
            type: GraphQLString,
        },
        id: {
            type: GraphQLID,
        },
    },
});

export default UserType;
