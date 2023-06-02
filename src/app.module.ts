import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UsersModule,
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const mongoConfig = configService.get('MONGO_URI');
        console.log(mongoConfig);
        return {
          uri: mongoConfig,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppModule {}
