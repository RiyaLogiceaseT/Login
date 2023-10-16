interface Employee {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    gender: string;
    email: string;
    image: string;
    phone: number;
    salary: 1;
    address: {
      city: string;
      address: string;
    };
    university: string;
    birthDate: string;
    height: number;
    weight: number;
  }
  export default Employee;