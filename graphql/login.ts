import {gql} from '@apollo/client/core';

export type AuthResponse = {
  profile: ProfileView;
  refreshToken: string;
};

export type LoginInput = {
  application: string;
  email: string;
  password: string;
};

export type ProfileView = {
  avatarFile: string;
  avatarId: string;
  avatarSize: number;
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  permissionGroupList: string[];
  permissionsList: string[];
  phone: string;
  position: string;
  rootAccess: boolean;
};

export const LOGIN = gql`
  mutation login($input: LoginInput) {
    login(input: $input) {
      profile {
        avatarFile
        avatarId
        email
        firstName
        id
        lastName
        phone
        position
      }
      refreshToken
    }
  }
`;

// export function login();
