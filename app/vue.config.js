module.exports = {
	outputDir: '../dist',
	publicPath: process.env.NODE_ENV === 'production' ? '/gta-asm.github.io/' : '/',

	pluginOptions: {
		i18n: {
			locale: 'en',
			fallbackLocale: 'en',
			localeDir: 'i18n',
			enableInSFC: true,
		},
	},
};
