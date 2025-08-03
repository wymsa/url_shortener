import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import databaseConfig from 'src/common/config/database/database.config';

@Module({
	imports: [
		TypeOrmModule.forRootAsync({
			useFactory: () => {
				const dataSource = databaseConfig.options;

				return {
					...dataSource,
					autoLoadEntities: true,
					logging: true,
					synchronize: false,
					retryAttempts: 5,
					retryDelay: 3000
				};
			}
		})
	]
})
export class DatabaseModule {}
