export type iUser = {
  _id?: string;
  companies: any;
  type?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  username?: string;
  companyName?: string;
  companyPosition?: string;
  status?: string;
  associatedOPITStaffUserId?: string;
  licences: any;
  devices: any;
};

export type iUserlogin = {
  email: string;
  password: string;
};

export type iAuthReturn = {
  jwt: string;
  user: iUser;
};

export type iAuth = {
  jwt: string | undefined;
  userId: string | undefined;
};

export type iForgot = {
  email?: string | undefined;
};
