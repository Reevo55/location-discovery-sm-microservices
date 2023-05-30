export interface GoogleProfile {
  id: string;
  displayName: string;
  name: { familyName: string; givenName: string };
  emails: [
    {
      value: string;
      verified: boolean;
    },
  ];
  photos: [
    {
      value: string;
    },
  ];
  provider: string;
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
  accessToken: string;
}
