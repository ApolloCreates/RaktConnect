export const typeDefs = `#graphql

    # this is the definition of donars and everything about them
    type DonarInc {
        _id: ID!
        name: String!
        email: String!
        password: String!
        confirmPassword: String!
        gender: Gender! 
        bloodType: BloodType!
        address: Address!
        createdAt: Date!
        medicalCondition: String
        lastDonationDate: Date
    }

    enum Gender {
        Male
        Female
        Other
    }

    enum BloodType {
        A_POS
        A_NEG
        B_POS
        B_NEG
        AB_POS
        AB_NEG
        O_POS
        O_NEG
    }


    type Address {
        street: String!
        city: String!
        state: String!
        country: String!
        postalCode: String!
    }


    # definition of hospitals requesting the blood
    type Hospital {
        name: String!
        email: String!
        phoneNumber: String!
        address: Address!
        requestedBlood: [RequestedBlood]
        createdAt: Date!
    }
    

    type RequestedBlood {
        bloodType: String
        requestedBloodBank: ID
        status: String
        quantity: Number
        timeStamp: Date
    }

    # definition of Blood bank
    type BloodBank {
        name: String!
        email: String!
        phoneNumber: Number!
        address: Address!
        bloodStock: BloodStock!
        createdAt: Date! 
    }


    type BloodStock {
        A_PLUS: Int!
        A_MINUS: Int!
        B_PLUS: Int!
        B_MINUS: Int!
        AB_PLUS: Int!
        AB_MINUS: Int!
        O_PLUS: Int!
        O_MINUS: Int!
    }
    
    scalar Date

    type Query{
        donars: [DonarInc]
        hospitals: [Hospital]
        bloodBanks: [BloodBank]
    }

    type Mutation {
        
    }
`;
