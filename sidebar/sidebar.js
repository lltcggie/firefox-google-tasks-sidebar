'use strict';

setLocation();

async function setLocation() {
	let authuser = '';
  try {
    let res = await browser.storage.sync.get('authuser');
    if ('authuser' in res) {
      authuser = res.authuser;
    }
  } catch (e) {
  }

  browser.sidebarAction.setPanel({
    panel: `https://reminders.google.com/?authuser=${authuser}`
  })
}
