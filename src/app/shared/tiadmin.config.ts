export const config: any = {
  API_URL: 'assets/api',
  tiSkin: 'ti-style-0',

  skins: [
    {
      name: 'ti-style-0',
      logo: 'assets/img/logo.png',
      skinBtnClass: 'btn btn-block btn-xs txt-color-white margin-right-5',
      style: {
        backgroundColor: '#4E463F'
      },
      label: 'Ti Default'
    },
  ]
};

// required for SmartNotification
window['jQuery'].sound_on = config.sound_on;
window['jQuery'].sound_path = config.sound_path;
