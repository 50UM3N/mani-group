module.exports = {
	apps: [
		{
			name: 'mani-group',
			script: 'npm',
			args: 'start',
			instances: 1,
			autorestart: true,
			watch: false,
			exec_mode: 'cluster',
			error_file: '../logs/pm2/err.log',
			out_file: '../logs/pm2/out.log',
			merge_logs: true,
			log_date_format: 'YYYY-MM-DD HH:mm:ss',
		},
	],
};