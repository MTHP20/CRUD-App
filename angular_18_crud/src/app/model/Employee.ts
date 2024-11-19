export class EmployeeModel {
    empId: number;
    name: string;
    city: string;
    state: string;
    emailID: string;
    contactNo: string;
    address: string;
    pinCode: string;

    constructor() {
        this.address = '';
        this.city = '';
        this.contactNo = '';
        this.emailID = '';;
        this.empId = 0;
        this.name = '';
        this.state = '';
        this.pinCode = '';
    }
}