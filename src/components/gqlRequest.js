import {auth} from "./auth";
import {GraphQLClient} from "graphql-request/dist/src/index";
import {graphql_server} from "../endpoints";

export {gqlRequest};

async function gqlRequest(...options) {
    const token = await auth.currentUser.getIdToken()
    const graphQLClient = new GraphQLClient(graphql_server, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    })
    return graphQLClient.request(...options)
}