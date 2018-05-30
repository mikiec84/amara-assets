// require jquery and all plugins first, this way if other modules depend on jquery they will get the plugins too
window.jQuery = window.$ = require('jquery');
require('bootstrap-sass');
require('jquery-form')(window, $);
require('select2')(window, $);
require('../shared/third-party/behaviors');
require('../shared/announcements');
require('../shared/messages');

// require all the other modules
// Third party libraries
require('chartist');
require('chartist-plugin-tooltip');
// Amara modules
require('./ajax');
require('./dialogs');
require('./proxyField');
require('./dependentSelect');
require('../shared/languageSwitcher');
require('../shared/select/main');
require('./selectList');
require('./videoPage');
require('./videoSubtitles');
require('../shared/fileUpload');
require('../shared/compoundField');
require('./clamp');
require('./staffControls');
require('./styleGuide');
require('../shared/tabs');
