module.exports = {
	outputDir: 'docs',
	publicPath: process.env.NODE_ENV === 'production' ? '/my-project/' : '/',

	pluginOptions: {
		i18n: {
			locale: 'en',
			fallbackLocale: 'en',
			localeDir: 'i18n',
			enableInSFC: true,
		},
	},
};
