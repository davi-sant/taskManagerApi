import { clientData } from "../data/clientData.js";

export const clientService = {
    getClient: () => {
        return clientData.getClient();
    }
}
