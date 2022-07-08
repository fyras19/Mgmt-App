import { GraphQLID, GraphQLList, GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";

const ProjectType: GraphQLObjectType = new GraphQLObjectType({
    name: "Project",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: { type: GraphQLString }
    })
});

const RootQuery: GraphQLObjectType = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        projects: {
            type: new GraphQLList(ProjectType),
            resolve(parent, args) {
            
            }
        },
        project: {
            type: ProjectType,
            resolve(parent, args) {

            }
        }
    }
});

const schema = new GraphQLSchema({
    query: RootQuery
});

export default schema;