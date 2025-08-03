import * as dotenv from 'dotenv';

import * as path from 'node:path';
import { DataSource } from 'typeorm';

const envFiles = [`.env.${process.env.NODE_ENV || 'development'}.local`];

envFiles.forEach((env) => {
	dotenv.config({ path: env });
});

export default new DataSource({
	type: 'postgres',
	url: process.env.DATABASE_URL,
	entities: [path.join(__dirname, '../../../**/*.database.entity.{js,ts}')],
	migrations: [path.join(__dirname, 'migrations/*.{js,ts}')]
});
