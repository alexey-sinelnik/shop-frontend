export type AuthStateType = {
    user: UserDataType;
};

export type UserDataType = {
    firstname: string;
    lastName: string;
    email: string;
    country: string;
    city: string;
    region: string;
    address: string;
    street: string;
    postalCode: string;
};
