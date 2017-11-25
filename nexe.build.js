const nexe = require('nexe')
nexe.compile( {
		input: './dist/main.bundle.js',
		output: 'release/NS-ScreenshotBot.exe',
		loglevel: 'verbose',
		build: true,
		ico: 'resource/icon.ico',
//		native: {
//			sharp: {
//				additionalFiles: [
//					// relative to: node_modules/sharp/lib/index.js
//					'../build/release/sharp.node',
//					'../build/release/GNU.Gettext.dll',
//					'../buildrelease/libasprintf-0.dll',
//					'../buildrelease/libcairo-2.dll',
//					'../buildrelease/libcairo-gobject-2.dll',
//					'../buildrelease/libcairo-script-interpreter-2.dll',
//					'../buildrelease/libcharset-1.dll',
//					'../buildrelease/libcroco-0.6-3.dll',
//					'../buildrelease/libexif-12.dll',
//					'../buildrelease/libexpat-1.dll',
//					'../buildrelease/libffi-6.dll',
//					'../buildrelease/libfftw3-3.dll',
//					'../buildrelease/libfontconfig-1.dll',
//					'../buildrelease/libfreetype-6.dll',
//					'../buildrelease/libgcc_s_seh-1.dll',
//					'../buildrelease/libgdk_pixbuf-2.0-0.dll',
//					'../buildrelease/libgif-7.dll',
//					'../buildrelease/libgio-2.0-0.dll',
//					'../buildrelease/libglib-2.0-0.dll',
//					'../buildrelease/libgmodule-2.0-0.dll',
//					'../buildrelease/libgobject-2.0-0.dll',
//					'../buildrelease/libgsf-1-114.dll',
//					'../buildrelease/libgthread-2.0-0.dll',
//					'../buildrelease/libiconv-2.dll',
//					'../buildrelease/libintl-8.dll',
//					'../buildrelease/libjpeg-62.dll',
//					'../buildrelease/liblcms2-2.dll',
//					'../buildrelease/libpango-1.0-0.dll',
//					'../buildrelease/libpangocairo-1.0-0.dll',
//					'../buildrelease/libpangowin32-1.0-0.dll',
//					'../buildrelease/libpixman-1-0.dll',
//					'../buildrelease/libpng16-16.dll',
//					'../buildrelease/libquadmath-0.dll',
//					'../buildrelease/librsvg-2-2.dll',
//					'../buildrelease/libssp-0.dll',
//					'../buildrelease/libstdc++-6.dll',
//					'../buildrelease/libtiff-5.dll',
//					'../buildrelease/libvips-42.dll',
//					'../buildrelease/libvips-cpp.dll',
//					'../buildrelease/libwebp-7.dll',
//					'../buildrelease/libxml2-2.dll',
//					'../buildrelease/zlib1.dll'
//				]
//			}
} );