export type Profile = {
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    gender: string;
    email: string;
}

export type Setup = Omit<Profile, 'email'>
export type Update = Omit<Profile, 'email'>
