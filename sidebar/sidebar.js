'use strict';

setLocation();

async function setLocation() {
	let authuser = '0';
  try {
    let res = await browser.storage.sync.get('authuser');
    if ('authuser' in res) {
      authuser = encodeURIComponent(res.authuser);
    }
  } catch (e) {
  }

  let url = `https://tasks.google.com/u/${authuser}/embed/?origin=https://calendar.google.com&fullWidth=1`;
  browser.sidebarAction.setPanel({
    panel: url
  })
}
