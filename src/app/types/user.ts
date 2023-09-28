interface iUser {
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
}

interface iUserlogin {
  email: string;
  password: string;
}

interface iAuthReturn {
  jwt: string;
  user: iUser;
}

interface iAuth {
  jwt: string | undefined;
  userId: string | undefined;
}

interface iForgot {
  email?: string | undefined;
}
