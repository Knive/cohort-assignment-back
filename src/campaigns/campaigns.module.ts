import { Module } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CampaignsController } from './campaigns.controller';
// import { MerchantsModule } from 'src/merchants/merchants.module';

@Module({
  providers: [CampaignsService],
  exports: [CampaignsService],
  controllers: [CampaignsController]
  // imports: [MerchantsModule]
})
export class CampaignsModule {}
