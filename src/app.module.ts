import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/common/database/database.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			cache: true,
			isGlobal: true,
			envFilePath: [`.env.${process.env.NODE_ENV || 'development'}.local`]
		}),
		DatabaseModule
	],
	controllers: [],
	providers: []
})
export class AppModule {}
