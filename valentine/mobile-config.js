App.icons({
  // Android
  'android_ldpi': 'resources/icons/icon-36x36.png',
  'android_mdpi': 'resources/icons/icon-48x48.png',
  'android_hdpi': 'resources/icons/icon-72x72.png',
  'android_xhdpi': 'resources/icons/icon-96x96.png'
});

App.setPreference('Orientation', 'portrait');

App.info({
  name: 'I like you!',
  description: 'An Android app built with Meteor and a lot of love!',
  version: '0.0.1'
});

App.launchScreens({
  // Android
  'android_ldpi_portrait': 'resources/splash/splash-200x320.png',
  'android_mdpi_portrait': 'resources/splash/splash-320x480.png',
  'android_hdpi_portrait': 'resources/splash/splash-480x800.png',
  'android_xhdpi_portrait': 'resources/splash/splash-720x1280.png',
});
