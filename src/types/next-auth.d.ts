import 'next-auth';

declare module 'next-auth' {
    interface User{
        _id?: string;
        isVerified?: string;
        isAcceptingMessage?: boolean;
        username?: string;
    }
    type NewType = {
        _id;
    };

    interface session {
       user: {
        _id?: string;
        isVerified?: string;
        isAcceptingMessage?: boolean;
        username?: string;
       } & DefaultSession['user']
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        _id?: string;
        isVerified?: string;
        isAcceptingMessage?: boolean;
        username?: string;
    }
}