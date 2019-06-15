demo = window.demo || {};
(function() {
  alias = localStorage.getItem('alias');
  if (alias === null || alias === '') {
    window.location = '/index.html';
  }
  // ccpUrl = 'https://' + alias + '.awsapps.com/connect/ccp#/';
  ccpUrl =
    'https://fs.pstest.biz/adfs/ls/idpinitiatedsignon.aspx?RelayState=RPID%3durn%3Aamazon%3Awebservices%26RelayState%3dhttps%3A%2F%2Fap-southeast-2.console.aws.amazon.com%2Fconnect%2Ffederate%2Fe3087602-a58f-408a-a5e8-0ea920e56eba%3Fdestination%3d%2Fconnect%2Fccp';
  // homeURL = 'https://' + alias + '.awsapps.com/connect/home';
  homeURL =
    'https://fs.pstest.biz/adfs/ls/idpinitiatedsignon.aspx?RelayState=RPID%3durn%3Aamazon%3Awebservices%26RelayState%3dhttps%3A%2F%2Fap-southeast-2.console.aws.amazon.com%2Fconnect%2Ffederate%2Fe3087602-a58f-408a-a5e8-0ea920e56eba%3Fdestination%3d%2Fconnect%2Fhome';
  demo.alias = alias;
  demo.ccpUrl = ccpUrl;
  demo.homeURL = homeURL;
})();
