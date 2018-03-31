/* eslint consistent-return:0 */

/*
 * Email notification class
 */
class Email {
  /*
   * @param {object} mail configuration
      options = {
        "enabled":false,
        "sender":"Alphonso Inc. <insights@alphonso.tv>",
        "notify": {
          "ongetreports":'',
          "onsignin":'',
          "onreportvideo":'',
          "ongetfullaccess":''
        }
   * @param {function} sendmail, see mail/mail.js
  };
  */
  constructor(options, sendmail) {
    this.email = options;
    this.sendmail = sendmail;
    // console.log(JSON.stringify(options));
  }

  /*
   send report
   @param object reporter information, see below
    reportDetails = {
      toAddress: '<to address>',
      attachments : [{
        fileName : '<attachment name>',
        filePath : '<full path on disk, including filename>'
      }];
      header: '<brand name / content title>',
      signininfo: 'Firstname Lastname (email)'
  };
  */
  sendReport(reportDetails) {
    // console.log(JSON.stringify(reportDetails));
    if (!this.email.enabled) {
      return;
    }

    let subject = 'Report for ' + reportDetails.header;
    let emailBody = `Hi,<br /><br />The report, that you had requested for, can be downloaded by clicking on the link below. Alternatively you can copy/paste the link on the browser to download the report.<br /><br /> ${reportDetails.reportsurl}<br /><br />If you have any questions, or you are looking for additional analytics, do reach out to us at insights@alphonso.tv.<br /><br /> ${reportDetails.extraMessage} With best regards,<br />The Alphonso Crew<br />www.alphonso.tv<br />`;
    // console.log(subject);
    // console.log(emailBody);
    this.sendmail(reportDetails.toAddress, subject, null, null, emailBody);

    // TODO: implement 'bcc' in the Alphonso Platfrom mail lib.
    subject = subject + ': ' + reportDetails.toAddress;
    emailBody = `This report was sent to: ${reportDetails.toAddress}<br />` +
                `IP address: ${reportDetails.reqIP} <br />` +
                `sign in information: ${reportDetails.signininfo} <br />` +
                `timestamp: ${new Date()}<br /><br />` +
                emailBody;
    this.sendmail(this.email.notify.ongetreports, subject, null, null, emailBody);
  }

  /*
   * send location attribution report
   */
  sendLARReportNotification(reportDetails) {
    // console.log(JSON.stringify(reportDetails));
    if (!this.email.enabled) {
      return;
    }

    const subject = "Your Location Attribution Report '" + reportDetails.report_name + "'";
    let emailBody = `Hi,<br /><br />The report, that you had requested for, can be viewed by clicking on the link below. Alternatively you can copy/paste the link on the browser to view the report.<br /><br />${reportDetails.reportsurl}<br /><br />If you have any questions, or you are looking for additional analytics, do reach out to us at insights@alphonso.tv.<br /><br />With best regards,<br />The Alphonso Crew<br />www.alphonso.tv<br />`;
    if (reportDetails.isValid === 0) {
      emailBody = 'Hi,<br /><br />We noticed that the report you requested has fewer data points than what we normally recommend for a robust analysis.<br /><br /> You may want to try expanding the date range for your report and re-run the analysis.<br /><br />Or just send us a note at insights@alphonso.tv and our team will be happy to help you through your analysis.<br /><br />With best regards,<br />The Alphonso Crew<br />www.alphonso.tv<br />';
    }
    // console.log(subject);
    // console.log(emailBody);
    this.sendmail(reportDetails.toAddress, subject, null, null, emailBody);
  }

  /*
   report video violation
   @param {object}
    details = {
      video: {
        contentid: '<content id>',
        contenttitle: '<content title>',
        videourl: '<video url>',
        dashboardurl: '<dashboard details page url>'
      },
      reportedby: {
        name: '<name>',
        email: '<email address>',
        company: '<company name>',
        phone: '<phone number>',
        desc: '<description>'
      },
      signininfo: 'Firstname Lastname (email)'
  };
  */
  reportVideo(details) {
    // console.log(JSON.stringify(details)); // TODO put TS
    if (!this.email.enabled) {
      return;
    }

    const subject = `Video Reported Alert: ${details.video.dashboardurl || ''}`;
    const emailBody = 'Hi,<br /><br />Following video has been reported,<br />' +
                    `timestamp: ${new Date()}<br />` +
                    `content id: ${details.video.contentid || ''} <br />` +
                    // 'content title: ' + details.video.contenttitle + '<br />' +
                    // 'video url: ' + details.video.videourl + "<br />" +
                    `dashboard url: ${details.video.dashboardurl || ''} <br /><br />` +
                    'Other reported information:<br />' +
                    `Name: ${details.reportedby.name || ''}<br />` +
                    `Email Address: ${details.reportedby.email || ''}<br />` +
                    `Company Name: ${details.reportedby.company || ''}<br />` +
                    `Phone Number: ${details.reportedby.phone || ''}<br />` +
                    `Description: ${details.reportedby.desc || ''}<br /><br />` +
                    `IP address: ${details.reqIP || ''}<br />` +
                    `Sign in information: ${details.signininfo || ''}<br /><br />` +
                    'With best regards,<br />The Alphonso Crew<br />www.alphonso.tv<br />';
    // console.log(subject);
    // console.log(`body: ${emailBody}`);
    this.sendmail(this.email.notify.onreportvideo, subject, null, null, emailBody, null);
  }

  /*
   * request free trial request
   @param {object}
    details = {
                email: '<email address>',
                signininfo: 'Firstname Lastname (email)'
    };
  */
  requestFT(details) {
    // console.log(JSON.stringify(details)); // TODO put TS
    if (!this.email.enabled) {
      return;
    }

    const subject = 'Free Trial Request Alert: ' + details.email;
    const emailBody = 'Hi there,<br /><br /> Free trial request received.<br />' +
                    'timestamp: ' + new Date() + '<br />' +
                    'Email Address: ' + details.email + '<br />' +
                    'Brands of interest: ' + details.brands + '<br />' +
                    'IP address: ' + details.reqIP + '<br />' +
                    'Sign in information: ' + details.signininfo + '<br /><br />' +

                    'With best regards,<br />The Alphonso Crew<br />www.alphonso.tv<br />';
    // console.log(subject);
    // console.log(emailBody);
    this.sendmail(this.email.notify.onftrequest, subject, null, null, emailBody, null);
  }

  /*
    details = {
                signininfo: {
                    firstname: '<firstname>',
                    lastname: '<lastname>',
                    email: '<email address>',
                    picture: '<picture url>'
                },
                content: {
                    contentid: '<content id>',
                    contenttitle: '<content title>',
                    brand: '<brand>',
                    category: '<category>',
                    dashboardurl: '<dashboard details page url>'
                }
    };
  */
  signInAlert(details) {
    // console.log(JSON.stringify(details));
    if (!this.email.enabled) {
      return;
    }

    const subject = 'Sign In Alert: ' + details.signininfo.firstname + ' ' + details.signininfo.lastname + ' (' + details.signininfo.email + ')';
    const emailBody = 'The following person has signed in.<br /><br />' +
                        'Timestamp: ' + new Date() + '<br />' +
                        'IP address: ' + details.reqIP + '<br />' +
                        'First Name: ' + details.signininfo.firstname + '<br />' +
                        'Last Name: ' + details.signininfo.lastname + '<br />' +
                        'Email: ' + details.signininfo.email + '<br />' +
                        'Picture url: ' + details.signininfo.picture + '<br />' +
                        'URL accessed: ' + details.content.dashboardurl + '<br /><br />' +
                        // details.content.category + ' > ' + details.content.brand + ' > [' + details.content.contentid + '] ' + details.content.contenttitle + '<br /><br />' +
                        'With best regards,<br />The Alphonso Crew<br />www.alphonso.tv<br />';
    // console.log(subject);
    // console.log(emailBody);
    this.sendmail(this.email.notify.onsignin, subject, null, null, emailBody, null);
  }
}

module.exports = exports = Email;
