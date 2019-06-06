module.exports = {
	outputDir: 'docs',
	publicPath: process.env.NODE_ENV === 'production' ? '/sa-unity/' : '/',

	pluginOptions: {
		i18n: {
			locale: 'en',
			fallbackLocale: 'en',
			localeDir: 'i18n',
			enableInSFC: true,
		},
	},
};
