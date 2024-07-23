const API = require('./api');
const { expect } = require('chai');

describe('TMS API Tests', () => {

    it('should get list of drivers', async () => {
        const data = await API.get('/drivers');
        expect(data).to.be.an('array');
        expect(data.length).to.be.greaterThan(0);
    });

    it('should get list of trucks', async () => {
        const data = await API.get('/trucks');
        expect(data).to.be.an('array');
        expect(data.length).to.be.greaterThan(0);
    });

    it('should get details of a specific driver', async () => {
        const driverId = 1; // Змінити на існуючий ID водія
        const data = await API.get(`/drivers/${driverId}`);
        expect(data).to.be.an('object');
        expect(data.id).to.equal(driverId);
    });

});
