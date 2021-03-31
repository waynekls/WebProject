"use strict"

class LookupPostal {
    constructor(postalCode, Address) {
        this.postalCode = postalCode;
        this.Address = Address;
    }

    getpostalCode() {
        return this.postalCode;
    }

    getaddress() {
        return this.Address;
    }
}

module.exports = LookupPostal;