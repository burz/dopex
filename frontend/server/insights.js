/* eslint consistent-return:0 */
/* eslint import/no-unresolved: [2, { ignore: ['mail/mail','config'] }] */

const URL = require('url');
const express = require('express');
const router = express.Router();

// const Promise = require('bluebird');
// const _ = require('lodash');

/* load application configuration file */
const config = require('./config');
const EmailClient = require('./email');
const logger = require('./logger');

module.exports = router;

// TODO: this should be sorted out
/*
const sendmail = require('mail/mail');
const alphaConfig = require('config');
alphaConfig.set('mail.from', config.sender);
*/
function sendmail(to, subject, template, data, bodyextra, attachments, cb) {
  console.log(`sendemail: ${to}, ${subject}`);
}
const emailClient = new EmailClient(config.email, sendmail);

/**
 * report video violation
 */
router.post('/report-video', (req, res) => {
  logger.debug(`${req.method} ${req.originalUrl} ` + JSON.stringify(req.query), 'body data=' + JSON.stringify(req.body));
  logger.debug(`Request ${req.method} ${req.originalUrl}, remoteAddress: ${req.connection.remoteAddress}:${req.connection.remotePort}`);

  logger.userAction(req);

  // early decision
  res.status(200).json({ status: true });

  const reqdata = req.body;
  const urlobj = URL.parse(req.originalUrl);
  urlobj.pathname = `/commercial/${reqdata.content}`;
  urlobj.search = '';
  urlobj.hash = '';

  const mailDetails = {};
  mailDetails.video = {};
  mailDetails.video.contentid = reqdata.content;
  // mailDetails.video.contenttitle = req.query.title;
  // mailDetails.video.videourl = req.query.videourl;
  mailDetails.video.dashboardurl = URL.format(urlobj);
  mailDetails.reportedby = {};
  mailDetails.reportedby.name = reqdata.name || '';
  mailDetails.reportedby.email = reqdata.email || '';
  mailDetails.reportedby.company = reqdata.company || '';
  mailDetails.reportedby.phone = reqdata.phone || '';
  mailDetails.reportedby.desc = reqdata.desc || '';
  // mailDetails.signininfo = require('./util/linkedin').signinInfo(req);
  mailDetails.reqIP = `${req.connection.remoteAddress}:${req.connection.remotePort}`;

  emailClient.reportVideo(mailDetails);
});

/**
 * request full-access
 *  request payload: {
       name: <string>
       email: <string>
       company: <string>
       desc: <string>
 *  }
 *
 * @TODO
 */
router.post('/access-request', (req, res) => {
  logger.userAction(req);
  res.status(200).json({ status: true });
});
