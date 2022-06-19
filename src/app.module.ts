import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { MerchantsModule } from './merchants/merchants.module'
import { join } from 'path'
import { CampaignsModule } from './campaigns/campaigns.module';

@Module({
  imports: [
    MerchantsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/files'
    }),
    CampaignsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
