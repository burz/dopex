/* eslint-disable global-require */
/* eslint-disable no-console */
/* eslint import/no-unresolved: [2, { ignore: ['should','assert'] }] */

const should = require('should');
const assert = require('assert');

process.env.NODE_ENV = 'test';
const EmailClient = require('../email');
const config = require('../config');

function sendemail(to, subject, template, data, bodyextra, attachments, cb) {
  console.log(`sendemail: ${to}, ${subject}`);
  to.should.be.equal(config.email.notify.onreportvideo);
  (!!subject).should.be.equal(true);
}

describe('email', () => {
    it('report-video', (done) => {
        const emailClient = new EmailClient(config.email, sendmail);
        const details = {
            video: { contentid: 12345, dashboardurl: 'http://mydb1.allphonso.tv:3000/commercial/12345' },
            reportedby: { name: 'Jack' }
        };
        emailClient.reportVideo(details);
        done();
    });
});
