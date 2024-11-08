import {allDonars} from './controllers/donar.js';
import { allHospitals } from './controllers/hospitalController.js';

export const resolvers = {
    Query: {
        donars: allDonars,
        hospitals: allHospitals
    }
}

